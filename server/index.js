const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const pdfTemplate1 = require('./documents/index');
const pdfTemplate2 = require('./documents/index1');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate1(req.body), {}).toFile('rezultati.pdf', (err) => {
      if(err) {
          return console.log('error');
      }
  res.send(Promise.resolve())
    });
  })
  app.post('/create-pdf-1', (req, res) => {
    pdf.create(pdfTemplate2(req.body), {}).toFile('rezultati.pdf', (err) => {
      if(err) {
          return console.log('error');
      }
  res.send(Promise.resolve())
    });
  })

  app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/rezultati.pdf`);
  });


app.listen(port, () => console.log(`Listening on port ${port}`));