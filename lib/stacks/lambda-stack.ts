import { PythonFunction } from "@aws-cdk/aws-lambda-python-alpha";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { StackCategory, StackHelper } from "../stack-helper";

export class LambdaStack extends cdk.Stack {
  constructor(app: cdk.App, helper: StackHelper) {
    super(app, helper.createStackName(StackCategory.Lambda));
    new PythonFunction(this, "api", {
      entry: "lambda",
      runtime: cdk.aws_lambda.Runtime.PYTHON_3_13,
      bundling: {
        // translates to `rsync --exclude='.venv'`
        assetExcludes: [".venv", ".pytest_cache", ".ruff_cache", "**/test/*", "**/conftest.py", "__pycache__"],
        buildArgs: {
          "POETRY_VERSION": "2.1.3",
        },
      },
    });
  }
}
