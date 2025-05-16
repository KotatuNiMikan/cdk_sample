import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { StackCategory, StackHelper } from "../stack-helper";

export class LambdaStack extends cdk.Stack {
  constructor(app: cdk.App, helper: StackHelper) {
    super(app, helper.createStackName(StackCategory.Lambda));
  }
}
