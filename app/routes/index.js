const fs = require('fs');
const express = require('express');
const router = express.Router();
const axios = require('axios');
// const request = require('request');
const storage = require('node-persist');
const soapRequest = require('easy-soap-request');
const parseString = require('xml2js').parseString;
const { ensureAuthenticated } = require('../config/auth');

// Welcome Page
// TODO: should add welcome view if want to re add register option
router.get('/', (req, res) => res.render('login'));

router.get('/welcome', ensureAuthenticated, (req, res) => {
    res.render('welcome', {
        user: {
            name: req.user.name
        }
    });
});

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('dashboard', {
        user: {
            name: req.user.name
        }
    });
});

router.get('/dashboard/getStock', ensureAuthenticated, (req, res) => {
        // Get stock function
        const getStock = () => {
            console.log(`Get stock function called`);
            const requestData = {
                url: 'http://190.221.30.210/intranet/ServiciosWeb/consultaStock.asmx',
                headers: {
                    'Content-Type': 'text/xml;charset=UTF-8',
                    'soapAction': 'http://brainsys.com.ar/obtenerStock',
                },
                xml: fs.readFileSync('xml/brainsys-services/ConsultaStockRequest.xml'),
            };
        
            (async () => {
                try {
                    const { response } = await soapRequest(requestData.url, requestData.headers, requestData.xml, 100000); // Stock needs bigger timeouts
                    const { body, statusCode } = response;
                    console.log(`Request finished with status code: ${statusCode}`);
                    console.log('Stock fetched as XML...');
                    parseString(body, function (err, result) {
                        if (err) {
                            console.log(`Error on parsing XML response for authentication: ${err}`);
                        } else {
                            console.log('XML converted to JSON:');
                            console.log(result['soap:Envelope']['soap:Body'][0].obtenerStockResponse[0].obtenerStockResult[0].Stock);
                            let stockArray = result['soap:Envelope']['soap:Body'][0].obtenerStockResponse[0].obtenerStockResult[0].Stock;
                            console.log(`Stock array length: ${stockArray.length}`);
                            res.send(stockArray);
                        }
                    });
                } catch(err) {
                    console.log(`SOAP ERROR on async function: ${err}`);
                }
            })();
        };
        // SOAP Authentication
        /**
         * SOAP data
         */
        const soapAuthenticationData = {
            url: 'http://190.221.30.210/intranet/ServiciosWeb/autenticacion.asmx',
            headers: {
                'Content-Type': 'text/xml;charset=UTF-8',
                'soapAction': 'http://brainsys.com.ar/autenticar',
            },
            xml: fs.readFileSync('xml/brainsys-services/AutenticacionRequest.xml', 'utf-8'),
        };
        /**
         * End SOAP data
         */
        (async () => {
            try {
                const { response } = await soapRequest(soapAuthenticationData.url, soapAuthenticationData.headers, soapAuthenticationData.xml, 10000); // Optional timeout parameter(milliseconds)
                const { body, statusCode } = response;
                console.log(body);
                console.log(statusCode);
                if (!body) {
                    console.warn('No body for session object');
                } else {
                    console.log('Fetching stock');
                    getStock(body);
                }
            } catch(err) {
                console.log(`SOAP ERROR on async Auth function: ${err}`);
            }
        })();
});

router.get('/orders', ensureAuthenticated, (req, res) =>
    res.render('orders'));

router.get('/entries', ensureAuthenticated, (req, res) =>
    res.render('entries'));

router.get('/stats', ensureAuthenticated, (req, res) =>
    res.render('stats'));

module.exports = router;
