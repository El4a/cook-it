// eslint-disable-next-line import/prefer-default-export
export const get = async (event, context) => {
  console.log('event', event);
  console.log('context', context);

  return {
    statusCode: 200,
    body: "Charlie bit ma finger"
  };
  
};
