var fs = require('fs');
var glob = require('glob');


module.exports.baseCompressor = function (compressFunction, options, extension, workdirs) {
    if (!workdirs) {
        try {
            workdirs = JSON.parse(process.env.dirs)
        } catch {
            workdirs = ['dist/']
        }
    }
    console.log('Сжатие файлов '+extension+' в директориях:');
    console.log(workdirs);

    workdirs.forEach(workdir => {
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
