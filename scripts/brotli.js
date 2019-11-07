var compress = require('./base-compressor.js');
var brotli = require('brotli');

compress.baseCompressor(brotli.compress, {
    mode: 1,
    quality: 11,
    lgwin: 22,
}, '.br');

