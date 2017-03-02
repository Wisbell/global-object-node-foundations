#!/usr/bin/env node

// chmod +x direct-exec.js

'use strict';

let {node, v8} = process.versions

// console.log(node)
// console.log(v8)

process.stdout.write(`Node.js version: ${node}\nV8 version: ${v8}\n`)
// process.stdout.write(`V8 version: ${v8}\n`)
