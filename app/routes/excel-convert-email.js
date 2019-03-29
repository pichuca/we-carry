const fs = require('fs');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const XLSX = require('xlsx');


router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/generatefile', (req, res) => {
        // TODO: make it dynamic if necessry.
        const fileExtension = '.xlsx';
        let filePath = req.body.fileName + fileExtension;

        /**
         * Get excel file.
         */
        XLSX.writeFile(req.body.workbook, filePath);

        /**
         * MAIL with Nodemailer 
         */
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 's.roibon@gmail.com',
              pass: 's4lv4d0r82'
            }
        });
        
        var mailOptions = {
            from: 'html2excel@gmail.com',
            to: 's.roibon@gmail.com',
            subject: 'Sending Email using Node.js',
            text: 'That was easy!',
            attachments: [{
                fileName: filePath,
                path: filePath,
                contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            }]
        };
        
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
                fs.unlink(filePath, (err) => {
                    if (err) throw err;
                    console.log(filePath + ' Was deleted after sending it via email.')
                });
                req.flash('success_email_msg', 'El archivo a sido enviado al deposito para el ingresa de tu mercadería.');
            }
        });

    }
);

module.exports = router;
