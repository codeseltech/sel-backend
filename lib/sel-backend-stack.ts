import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { SPADeploy } from 'cdk-spa-deploy';

export class SelBackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new SPADeploy(this, 'sel-skyinnk').createSiteWithCloudfront({
      indexDoc: 'index.html',
      websiteFolder: '../sel-frontenf/dist/',
    });
  }
}
