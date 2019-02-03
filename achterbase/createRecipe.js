// eslint-disable-next-line import/prefer-default-export
const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

// eslint-disable-next-line import/prefer-default-export
const uuidv4 = require('uuid/v4');

/**
 * TODO: typechecks
 */
module.exports.put = async (event) => {
  newRecipe = JSON.parse(event.body);
  newRecipe.id = uuidv4();

  const params = {
    TableName: process.env.RECIPES_TABLE,
    Item: newRecipe
  };

  await dynamoDb.put(params).promise();
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    }
  };
};
