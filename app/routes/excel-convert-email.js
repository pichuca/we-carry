const fs = require('fs');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const XLSX = require('xlsx');
const fileUpload = require('express-fileupload');
const { ensureAuthenticated } = require('../config/auth');

router.use(bodyParser());
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true }));
router.use(fileUpload());

// variables

/**
 * EMAIL service
 */
const getMailOptions = (fileName, filePath) => {
    return {
        from: 'wecarryinfo@gmail.com',
        to: 'info@pichucasystems.com, wecarryinfo@gmail.com', // TODO: add warehouse email address
        subject: 'We Carry solicitud de envio de mercadería',
        text: 'El archivo Excel con los productos a ingresar se encuentra como archivo adjunto. Gracias, el equipo de We Carry.',
        attachments: [{
            fileName: fileName,
            path: filePath,
            contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        }]
    };
};

const getTransporter = () => {
    return nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'wecarryinfo@gmail.com',
            pass: 'magento2'
        }
    });
};

const removeFile = (filePath) => {
    fs.unlink(filePath, (err) => {
        if (err) throw err;
        console.log(filePath + ' Was deleted after sending it via email.')
    });
};

/**
 * 
 * End email service 
 *  
 */

 // Generate file
router.get('/generate', ensureAuthenticated, (req, res) => {
    res.render('generatefile');
});

// Generate and send excel file
router.post('/generatefile', (req, res) => {
        // TODO: make it dynamic if necessry.
        const fileExtension = '.xlsx';
        var filePath = req.body.fileName + fileExtension;

        /**
         * Get excel file.
         */
        XLSX.writeFile(req.body.workbook, filePath);

        // /**
        //  * MAIL with Nodemailer 
        //  */
        var transporter = getTransporter();
        var mailOptions = getMailOptions(filePath, filePath);

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                console.log('Excel file sent via email.');
                res.json({
                    message: 'success'
                });
                // Remove local file after was sent.
                removeFile(filePath);
                req.flash('success_email_msg', 'El archivo a sido enviado al deposito para el ingresa de tu mercadería.');
            }
        });

    }
);

// Upload file
router.get('/upload', ensureAuthenticated, (req, res) => {
    res.render('uploadfile');
});

// Send uploaded
router.post('/fileupload', (req, res) => {
    if (Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    var file = req.files.fileupload;
    var fileName = file.name;
    
    // move into server dir (express-fileupload method)
    file.mv(fileName, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
    });

    // NOTE: fileName is actual file path.

    var transporter = getTransporter();
    var mailOptions = getMailOptions(fileName, fileName);

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.render('fileupload-error');
        } else {
            console.log('Uploaded file sent: ' + info.response);
            removeFile(fileName);
            res.render('fileupload-success', {
                file: {
                    name: fileName
                }
            });
        }
    });

});

module.exports = router;
