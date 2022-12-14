import axios from "axios";

export { G4ApiError, getG4ApiError };

type G4ApiError = {
  /**
   * The original source of the error
   */
  source: "network" | "http" | "auth" | "g4" | "other";
  /**
   * Code specific to the error source
   */
  code?: string;
  /**
   * Human readable error message
   */
  message: string;
  /**
   * Details specific to the error source
   */
  details?: object;
};

/**
 *
 * Map an error thrown by an API request into a normalized format.
 *
 * @param error Error thrown by API request
 *
 * example:
 * ```typescript
 * try {
 *   // API request code
 * } catch (error: unknown) {
 *   const err = getG4ApiError(error);
 *   console.log(`Error (${err.source}): ${err.message}`);
 * }
 * ```
 */
function getG4ApiError(error: unknown): G4ApiError {
  if (!axios.isAxiosError(error)) {
    return {
      source: "other",
      message: error instanceof Error ? error.message : "unknown error",
    };
  }
  if (typeof error.code !== "undefined") {
    return {
      source: "network",
      code: error.code,
      message: error.message,
    };
  }
  const g4error = error.response?.headers["x-g4-error"];
  if (typeof g4error !== "undefined") {
    return {
      source: "g4",
      code: "failure",
      message: g4error,
    };
  }
  const status = error.response?.data.status;
  if (typeof status === "number") {
    switch (status) {
      case 400:
        const statusText = error.response?.data.statusText;
        if (typeof statusText === "undefined") {
          return {
            source: "g4",
            code: "validation",
            message: "request validation error",
            details: error.response?.data.errors,
          };
        }
        return {
          source: "http",
          message: statusText,
        };
      case 401:
        return {
          source: "auth",
          message: "unauthorized request",
        };
      default:
        return {
          source: "http",
          message: `status: ${status}`,
          details: { status },
        };
    }
  }
  return {
    source: "other",
    message: `${error.name}: ${error.message}`,
    details: error,
  };
}
