import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";

export class S3Buckets extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    this.logging_bucket = s3.Bucket.fromBucketName(
      scope,
      "LoggingBucket",
      "microsearch-central-logging"
    );
  }

  public get LogginBucket() {
    return this.logging_bucket;
  }

  private logging_bucket: s3.IBucket;
}
