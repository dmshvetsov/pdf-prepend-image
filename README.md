# Node.JS script to prepend an image to a PDF file

Prepend an image to a PDF file. Most obvious usage is to add a cover for a PDF.

Tested with Node.JS >=12.4.0.

## Setup

    $ git clone git@github.com:iamdidev/pdf-append-image.git
    
    $ cd pdf-append-image
    
    $ npm install

## Usage

    $ npm start path/to/file.pdf path/to/image.png

A new document with an image on the first page will be created in the current folder.

NOTE: only PNG image are supported.

## Author

[@iamdidev](https://github.com/iamdidev) (Dmitry "iamdi" Shvetsov)
