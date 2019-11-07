var zlib = require('zlib');
var compress = require('./base-compressor.js');

compress.baseCompressor(zlib.gzipSync, {level: 9}, '.gz');