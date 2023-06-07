#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SelBackendStack } from '../lib/sel-backend-stack';

const app = new cdk.App();
new SelBackendStack(app, 'SelBackendStack', {
  stackName: 'SEL-skyinnk',
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
