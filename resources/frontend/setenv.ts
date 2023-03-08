const { writeFile } = require('fs');
const { argv } = require('yargs');

// read environment variables from .env file
require('dotenv').config({path:__dirname+'/../../.env'});
// read the command line arguments passed with yargs
const environment = argv.environment;
console.log(argv.environment);
const isProduction = environment === 'prod';

const targetPath = isProduction
    ? `/src/environments/environment.ts`
    : `/src/environments/environment.development.ts`;

// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   apiUrl: "${process.env['APP_URL']}",
};
`;

// write the content to the respective file
writeFile(__dirname+targetPath, environmentFileContent, function (err: any) {
    if (err) {
        console.log(err);
    }

    console.log(`Wrote variables to ${targetPath}`);
});
