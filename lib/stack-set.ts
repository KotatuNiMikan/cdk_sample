import * as cdk from "aws-cdk-lib";
import { StackHelper } from "./stack-helper";
import { LambdaStack } from "./stacks/lambda-stack";

export class StackSet {
  constructor(app: cdk.App) {
    const helper = new StackHelper(app.node);
    new LambdaStack(app, helper);
  }
}
