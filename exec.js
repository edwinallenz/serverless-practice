const { spawnSync } = require('child_process');

const child = spawnSync('serverless', ['invoke', 'local', '-f', 'hello'])

// view signal
//console.log('signal:', child.signal)

// view status
//console.log('status:', child.status)

// view buffer
//console.log('buffer:', child.output)

// view output (stdout & stderr combined)
// must convert buffer to string
console.log(child.output.toString('utf8'))

spawnSync
