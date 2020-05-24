const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { degrees, PDFDocument, rgb, StandardFonts } = require('pdf-lib');

const run = async ({ pathToPDF, pathToImage }) => {
  const pdfDoc = await PDFDocument.load(fs.readFileSync(pathToPDF));
  const img = await pdfDoc.embedPng(fs.readFileSync(pathToImage))

  const imagePage = pdfDoc.insertPage(0);
  imagePage.drawImage(img, {
    x: 0,
    y: 0,
    width: imagePage.getWidth(),
    height: imagePage.getHeight(),
  });

  const pdfBytes = await pdfDoc.save()
  const newFilePath = `${path.basename(pathToPDF, '.pdf')}-result.pdf`;
  fs.writeFileSync(newFilePath, pdfBytes);
}

const ERRORS = {
  ARGUMENTS: 'Please provide path to the PDF file as a first argument and path to image as the second argument'
};

const pathToPDF = process.argv[2];
assert.notEqual(pathToPDF, null, ERRORS.ARGUMENTS);
const pathToImage = process.argv[3];
assert.notEqual(pathToImage, null, ERRORS.ARGUMENTS);

run({ pathToPDF, pathToImage }).catch(console.error);
