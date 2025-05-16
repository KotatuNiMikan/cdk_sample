import * as cdk from "aws-cdk-lib";
import { Case } from "change-case-all";
import { Construct, Node } from "constructs";

export class StackHelper {
  node: Node;
  constructor(node: Node) {
    this.node = node;
  }
  createStackName(category: StackCategory): string {
    return `${Case.kebab(process.env.npm_package_name ?? "")}-${this.node.getContext("Stage")}-${
      StackCategory[category]
    }`;
  }
}

export enum StackCategory {
  Lambda,
}
