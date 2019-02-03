// eslint-disable-next-line import/prefer-default-export
const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.put = async (event) => {
  const params = {
    TableName: process.env.RECIPES_TABLE,
    Item: JSON.parse(event.body)
  };

  //try {
    await dynamoDb.put(params).promise();
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      }
    };
  //} 
  // catch (e) {
  //     return {
  //       statusCode: 500,
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //         'Access-Control-Allow-Credentials': true,
  //       },
  //       body: e
  //     } 
  //   }
};
