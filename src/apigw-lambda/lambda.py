import json
import boto3
from datetime import datetime
import uuid

from botocore.exceptions import ClientError

def lambda_handler(event, context):
    print(boto3.__version__)
    dateTimeObj = datetime.now()
    timestampStr = dateTimeObj.strftime("%Y-%m-%dT%H:%M:%SZ")
    record = event
    print(event)

    eventId = uuid.uuid1()
    afd = boto3.client('frauddetector')
    res = afd.get_event_prediction(detectorId = 'sample_detector',
                                   detectorVersionId='1',
                                   eventId = str(eventId),
                                   eventTypeName = 'sample_registration',
                                   eventTimestamp = timestampStr,
                                   entities = [{'entityType':'sample_customer', 'entityId':str(eventId.int)}],
                                   eventVariables = record)

    record["score"]   = res['modelScores'][0]['scores']['sample_fraud_detection_model_insightscore']
    record["outcomes"]= res['ruleResults'][0]['outcomes']

    print (record)
    return {
        'statusCode': 200,
        'body': record
    }
    