#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { StackSet } from "../lib/stack-set";

const app = new cdk.App();
new StackSet(app);
