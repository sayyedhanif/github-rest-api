const joi = require('joi');
const test = {
    path: '/api/v1/test',
    method: 'GET',
    config: {
      description: 'TEST Api',
      tags: ['api', 'test'],
      
      handler(request, h) {
          console.log('inside test api')
          return { success: true, message :'api inegrated!' };
      },
    },
  };


  module.exports = [
      test
  ]