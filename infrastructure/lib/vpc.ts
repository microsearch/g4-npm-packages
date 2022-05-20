import { Construct } from "constructs";
import { aws_ec2, Fn } from "aws-cdk-lib";

export function AppsVpc(scope: Construct): aws_ec2.IVpc {
  const SUBNET_COUNT = 3;
  return aws_ec2.Vpc.fromVpcAttributes(scope, "VPC", {
    vpcId: Fn.importValue("mrc-apps-vpcid"),
    availabilityZones: ["us-east-1a", "us-east-1b", "us-east-1c"],
    publicSubnetIds: Fn.importListValue(
      "mrc-apps-public-subnets",
      SUBNET_COUNT,
      ","
    ),
    privateSubnetIds: Fn.importListValue(
      "mrc-apps-private-subnets",
      SUBNET_COUNT,
      ","
    ),
    isolatedSubnetIds: Fn.importListValue(
      "mrc-apps-isolated-subnets",
      SUBNET_COUNT,
      ","
    ),
    publicSubnetRouteTableIds: Fn.importListValue(
      "mrc-apps-public-route-tables",
      SUBNET_COUNT,
      ","
    ),
    privateSubnetRouteTableIds: Fn.importListValue(
      "mrc-apps-private-route-tables",
      SUBNET_COUNT,
      ","
    ),
    isolatedSubnetRouteTableIds: Fn.importListValue(
      "mrc-apps-isolated-route-tables",
      SUBNET_COUNT,
      ","
    ),
  });
}
