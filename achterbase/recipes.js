// eslint-disable-next-line import/prefer-default-export
const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.get = async () => {

  const params = {TableName: process.env.RECIPES_TABLE};

  try {
    let result = await dynamoDb.scan(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(result.Items)
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: "Did someone drop our table?? " + e
    };
  } 
};
