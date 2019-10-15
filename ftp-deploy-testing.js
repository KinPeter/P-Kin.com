const FtpDeploy = require('ftp-deploy');
const { username, password, ftpUrl } = require('./ftp-data');
const ftpDeploy = new FtpDeploy();

// colors for console
const reset = '\x1b[0m';
const white = '\x1b[37m';
const green = '\x1b[32m';
const red = '\x1b[31m';

console.log(white + '****');
console.log('[+] Deploying for TESTING...');
console.log('****\n' + reset);

const config = {
    user: username,
    // Password optional, prompted if none given
    password: password,
    host: ftpUrl,
    port: 21,
    localRoot: __dirname + '/dist',
    remoteRoot: '/testing.p-kin.com/',
    // include: ['*', '**/*'],      // this would upload everything except dot files
    include: ['*', '**/*', '.*', '**/.*'],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: ['dist/**/*.map', 'node_modules/**', 'node_modules/**/.*'],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true
};

let total = 0;
let transferred = 0;

ftpDeploy
    .deploy(config)
    .then(res => {
        console.log(white + '----');
        console.log('[+] Finished uploading: ' + green + transferred + ' / ' + total + ' files');
        console.log(white + '----' + reset);
    })
    .catch(err => {
        console.log(red + '[-] DEPLOY ERROR: ');
        console.log(err, reset);
    });

ftpDeploy.on('log', function (data) {
    console.log(white + '[+] ' + data + reset);
});
ftpDeploy.on('uploaded', function (data) {
    console.log(white + '[+] Uploaded: ' + green + data.filename + reset);
    total = data.totalFilesCount;
    transferred++;
});
ftpDeploy.on('upload-error', function (data) {
    console.log(red + '[-] UPLOAD ERROR: ');
    console.log(data.err, reset); // data will also include filename, relativePath, and other goodies
});

// ftpDeploy.on('uploading', function (data) {
//     data.totalFilesCount; // total file count being transferred
//     data.transferredFileCount; // number of files transferred
//     data.filename; // partial path with filename being uploaded
// });
