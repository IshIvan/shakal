var fs = require('fs');
var glob = require('glob');

const WORKDIRS = typeof process.env.dirs === 'string'
    ? JSON.parse(process.env.dirs)
    : ['dist/'];

module.exports.baseCompressor = function (compressFunction, options, extension) {
    console.log('Сжатие файлов в директориях:');
    console.log(WORKDIRS);

    WORKDIRS.forEach(workdir => {
        glob.sync(workdir + '**/*.?(js|json|html|css)')
            .forEach(filepath => {
                fs.readFile(filepath, (err, buffer) => {
                    const compressedFilePath = filepath + extension;

                    console.log(compressedFilePath);

                    const compressedBuffer = compressFunction(buffer, options);

                    fs.writeFileSync(compressedFilePath, compressedBuffer);
                });
            });
    })
};
