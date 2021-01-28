# Fraud Detector POC Guide

Amazon Fraud Detector (AFD) is a machine learning service that allows you to build and scale fraud detection models in a quick and effective manner. The content below is designed to help you build out your first models for your given use case and makes assumptions that your data may not yet be in an ideal format for AFD to use.

This repository assumes a base familiarity with the service and if you have not already done so it is recommended that you use the getting-started material below.

## Introduction to Amazon Fraud Detector

If you are not familiar with Amazon Fraud Detector you can learn more about this tool on these pages:

* [Product Page](https://aws.amazon.com/fraud-detector/)
* [GitHub Sample Notebooks](https://github.com/aws-samples/aws-fraud-detector-samples)
* [Product Docs](https://docs.aws.amazon.com/frauddetector/latest/ug/what-is-frauddetector.html)

## Goals 

By the end of this POC, you should have picked up the following skills:

1. How to manioulate and prepare an AFD data set.
1. How to create AFD resources.
1. How to train an AFD model.
1. How to set up detection rules.
1. To deploy models in a programmatic fashion.
1. To obtain results from AFD.

## Completed Example

The notebooks have been scrubbed of all output before usage, however if you'd like to see a fully worked out example of this process, explore the notebooks in the `completed` folder.


## Process:

1. Deploying your working environment [see below]
1. Importing and manipulating the data set - 
`01 - Data Preparation/1_prepare_training_data.ipynb`



## Deploying Your Working Environment

As mentioned above, the first step is to deploy a CloudFormation template that will perform much of the initial setup work for you. In another browser window or tab, login to your AWS account. Once you have done that, open the link below in a new tab to start the process of deploying the items you need via CloudFormation.

[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home#/stacks/new?stackName=FraudDetectorPOC&templateURL=https://heikohotzpartnershare.s3-eu-west-1.amazonaws.com/FraudDetectorPOC.yaml)

Follow along with the screenshots below if you have any questions about deploying the stack.

(If you prefer launching the CloudFormation template in the AWS CLI, use this command:

`aws cloudformation create-stack --stack-name FraudDetectorPOC --template-body https://heikohotzpartnershare.s3-eu-west-1.amazonaws.com/FraudDetectorPOC.yaml --capabilities CAPABILITY_IAM`)

### Cloud Formation Wizard

Start by clicking `Next` at the bottom like this:

![StackWizard](https://github.com/marshmellow77/bot-detector/blob/main/static/images/img1.png?raw=true)

On this page you have a few tasks:

1. Change the Stack name to something relevant like `FraudDetectorPOC`
1. Change the Notebook Name (Optional)
1. Alter the VolumeSize for the SageMaker EBS volume, default is 10GB, if your dataset is expected to be larger, please increase this accordingly.


When you are done click `Next` at the bottom.

![StackWizard2](https://github.com/marshmellow77/bot-detector/blob/main/static/images/img2.png?raw=true)

This page is a bit longer, so scroll to the bottom to click `Next`. All of the defaults should be sufficient to complete the POC, if you have custom requirements, alter as necessary.

![StackWizard3](https://github.com/marshmellow77/bot-detector/blob/main/static/images/img3.png?raw=true)


Again scroll to the bottom, check the box to enable the template to create new IAM resources and then click `Create Stack`.

![StackWizard4](https://github.com/marshmellow77/bot-detector/blob/main/static/images/img4.png?raw=true)

For a few minutes CloudFormation will be creating the resources described above on your behalf. Once it has completed you'll see green text like below indicating that the work has been completed.

Now that your environment has been created go to the service page for SageMaker by clicking `Services` in the top of the console and then searching for `SageMaker` and clicking the service.

![StackWizard4](https://github.com/marshmellow77/bot-detector/blob/main/static/images/img7.png?raw=true)

From the SageMaker console, scroll until you see the green box indicating now many notebooks you have in service and click that.

![StackWizard4](https://github.com/marshmellow77/bot-detector/blob/main/static/images/img8.png?raw=true)

On this page you will see a list of any SageMaker notebooks you have running, simply click the `Open JupyterLab` link on the FraudDetectorPOC notebook you have created

![StackWizard4](https://github.com/marshmellow77/bot-detector/blob/main/static/images/img9.png?raw=true)

This will open the Jupyter environment for your POC; think of it as a web based data science IDE if you are not familiar with it. It should automatically open the `FraudDetectorPOC` folder for you, if not, just click on the folder icon in the browser on the left side of the screen and follow the documentation below to get started with your POC!

## Importing and preparing training data

AFD uses historical data to train a model.

Open `1_prepare_training_data.ipynb` and follow along there.

Once you have completed this, you can move on to imporing metadata.

## Creating a model

To create AFD resources, train a model, and create a detector, follow along this notebook:

Open `2_create detector.ipynb` and follow along there.

Once you have completed this, you can move on to creating and evaluating your first model.

## Evaluating the model

Open `3_model_test.ipynb` and follow along to test the model and see the results.


### Next Steps

Following these notebooks should have left you with a series of working models for your customer. 

## Cleaning Up

_COMING SOON!!_

Finished with the POC? If you want to delete all the resources created in your AWS account while following along with these notebooks, please see the ... notebook. It will help you identify all of the AFD resources deployed in your account and shows you how to delete them.