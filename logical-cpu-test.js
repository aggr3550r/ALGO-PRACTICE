'use strict'

require('dotenv').config()
const OS = require('os')

process.env.UV_THREADPOOL_SIZE = OS.cpus().length;

console.log(`Logical count = ${OS.cpus().length}`)
console.log(OS.cpus())