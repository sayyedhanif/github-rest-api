const joi = require('joi');
var request = require('request');


const test = {
    path: '/api/v1/user',
    method: 'GET',
    config: {
      description: 'User Api',
      tags: ['api', 'user'],
      
      handler(req, h) {
          console.log('inside test api')

          return new Promise(async (resolve, reject) => {
            request({
                // method: 'GET',
                url: 'https://api.github.com/user',
                auth : {
                    user: 'sayyedhanif',
                    pass: '4e84f6e74353e220701cea9790ef830832ca8552'
                },
                headers: {
                    "Accept" : "application/vnd.github.inertia-preview+json",
                    "Content-Type": 'application/json',
                    'user-agent': 'node.js'
                }
               
                
              },
              function (error, response, body) {
                if (error) {
                  console.log(' request failed:', error);
                  reject({ success: false, message :error , data: {}});
                }
                console.log('request successful!  Server responded with:', body);
                if (body && typeof body === 'string'){
                    try {
                        body = JSON.parse(body)
                    } catch (err) {
                      reject({ success: false, message :'Internal server error!' , data: {}});
                    }
                }
                resolve({ success: true, message :'user data return successfully!' , data: body});
              })

          })
          

          
      },
    },
  };


  module.exports = [
      test
  ]