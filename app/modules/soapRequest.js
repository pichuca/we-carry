const axios = require('axios');

/**
 * @author Caleb Lemoine
 * @param {string} url endpoint URL
 * @param {string} headers  HTTP headers, can be string or object
 * @param {string} xml SOAP envelope, can be read from file or passed as string
 * @param {int} timeout Milliseconds before timing out request
 * @promise response
 * @reject {error}
 * @fulfill {body,statusCode}
 * @returns {Promise.response{body,statusCode}}
 */
module.exports = function soapRequest(url, headers, xml, timeout = 1000) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url,
      headers,
      data: xml,
      timeout,
    }).then((response) => {
      resolve({
        response: {
          body: response.data,
          statusCode: response.status,
        },
      });
    }).catch((error) => {
      if (error.response) {
        console.log(`SOAP FAIL: ${error}`);
        reject(error.response.data);
      } else {
        console.log(`SOAP FAIL: ${error}`);
        reject(error);
      }
    });
  });
};
