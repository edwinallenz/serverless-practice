const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function ls() {
    console.info("Executing function")
    const { stdout, stderr } = await exec('serverless invoke local -f hello');
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
}
ls();
