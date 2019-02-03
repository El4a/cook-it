// eslint-disable-next-line import/prefer-default-export
const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.get = async () => {

  const params = {TableName: process.env.RECIPES_TABLE};

  let result = await dynamoDb.scan(params).promise();
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(result.Items)
  };
};
