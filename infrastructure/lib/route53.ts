import { Construct } from "constructs";
import * as route53 from "aws-cdk-lib/aws-route53";

const DB_DOMAIN = "mrcaws.net";
const DB_DOMAIN_PUBLIC_HOSTED_ZONE_ID = "Z3MX8938V1JBFH";
const DB_DOMAIN_PRIVATE_HOSTED_ZONE_ID = "ZVAIQ5N4GZL79";

const API_DOMAIN = "mrcapi.net";
const API_DOMAIN_PUBLIC_HOSTED_ZONE_ID = "Z1AAN7F1QADROR";

const ADMIN_DOMAIN = "g4admin.net";
const ADMIN_DOMAIN_PUBLIC_HOSTED_ZONE_ID = "Z06937303KU32F11CT2A1";

const MRC_DOMAIN = "mrcaws.net";
const MRC_DOMAIN_PUBLIC_HOSTED_ZONE_ID = "Z3MX8938V1JBFH";

export class Route53Zones extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.db_zone = route53.HostedZone.fromHostedZoneAttributes(
      scope,
      "PublicDbZone",
      {
        hostedZoneId: DB_DOMAIN_PUBLIC_HOSTED_ZONE_ID,
        zoneName: DB_DOMAIN,
      }
    );

    this.private_db_zone = route53.HostedZone.fromHostedZoneAttributes(
      scope,
      "PrivateDbZone",
      {
        hostedZoneId: DB_DOMAIN_PRIVATE_HOSTED_ZONE_ID,
        zoneName: DB_DOMAIN,
      }
    );

    this.admin_zone = route53.HostedZone.fromHostedZoneAttributes(
      scope,
      "AdminZone",
      {
        hostedZoneId: ADMIN_DOMAIN_PUBLIC_HOSTED_ZONE_ID,
        zoneName: ADMIN_DOMAIN,
      }
    );

    this.mrcaws_zone = route53.HostedZone.fromHostedZoneAttributes(
      scope,
      "MrcAwsZone",
      {
        hostedZoneId: MRC_DOMAIN_PUBLIC_HOSTED_ZONE_ID,
        zoneName: MRC_DOMAIN,
      }
    );

    this.mrcapi_zone = route53.HostedZone.fromHostedZoneAttributes(
      scope,
      "MrcApiZone",
      {
        hostedZoneId: API_DOMAIN_PUBLIC_HOSTED_ZONE_ID,
        zoneName: API_DOMAIN,
      }
    );
  }

  public get PublicDbZone() {
    return this.db_zone;
  }

  public get PrivateDbZone() {
    return this.private_db_zone;
  }

  public get AdminZone() {
    return this.admin_zone;
  }
  public get MrcAwsZone() {
    return this.mrcaws_zone;
  }
  public get MrcApiZone() {
    return this.mrcapi_zone;
  }

  private db_zone: route53.IPublicHostedZone;
  private private_db_zone: route53.IPrivateHostedZone;
  private admin_zone: route53.IPublicHostedZone;
  private mrcaws_zone: route53.IPublicHostedZone;
  private mrcapi_zone: route53.IPublicHostedZone;
}
