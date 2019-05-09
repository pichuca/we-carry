const express = require('express');
const router = express.Router();
// var request = require('request');
const soapRequest = require('../modules/soapRequest.js');
const fs = require('fs');
const { ensureAuthenticated } = require('../config/auth');

// Welcome Page
// TODO: should add welcome view if want to re add register option
router.get('/', (req, res) => res.render('login'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => {
//      POST /intranet/ServiciosWeb/ConsultaStock.asmx HTTP/1.1
//      Host: 190.221.30.210
//      Content-Type: text/xml; charset=utf-8
//      Content-Length: length
//      SOAPAction: "http://brainsys.com.ar/obtenerStock"
    let username = 'south';
    let password = 'SO001';
    const url = 'http://190.221.30.210/intranet/ServiciosWeb/ConsultaStock.asmx';
    const headers = {
        'POST': '/intranet/ServiciosWeb/ConsultaStock.asmx HTTP/1.1',
        'Host': '190.221.30.210',
        'Content-Type': 'text/xml; charset=utf-8',
        'usua_password': password,
        'usua_nombre': username,
            //  Content-Length: length
        'SOAPAction': "http://brainsys.com.ar/obtenerStock"
    };
    const xml = fs.readFileSync('xml/getStock.xml', 'utf-8');
    // console.log(xml);
    // Self invoke request
    // const soapRequestBody = (async () => {
    //     const { response } = await soapRequest(url, headers, xml, 1000);
    //     const { body, statusCode } = response;
    //     console.log('SOAP request body:');
    //     console.log(body);
    //     console.log(`Status code: ${statusCode}`)
    //     return response;
    // })();

    // soapRequestBody.then((response) => {
    //     console.log(response);
    // }).catch((err) => {
    //     console.log(err);
    // });

    res.render('dashboard', {
        user: {
            name: req.user.name
        }
    });
});

router.get('/orders', ensureAuthenticated, (req, res) =>
    res.render('orders'));

router.get('/entries', ensureAuthenticated, (req, res) =>
    res.render('entries'));

router.get('/stats', ensureAuthenticated, (req, res) =>
    res.render('stats'));

module.exports = router;
