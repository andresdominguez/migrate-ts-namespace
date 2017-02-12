#! /usr/bin/env node

const path = require('path');
const fs = require('fs');
const assert = require('assert');
const pify = require('pify');

const startWithLowerCase = function(id) {
  return id.substring(0, 1).toLowerCase() + id.substring(1);
};

(function() {
  const argv = require('minimist')(process.argv.slice(2));

  const ts = argv.ts;
  const js = argv.js;
  const ns = argv.ns;
  const out = argv.out;

  assert(ts, 'ts flag required - typescript directory replacing namespace');
  assert(js, 'js flag required - javascript file to replace');
  assert(ns, 'ns flag required - closure namespace to replace');

  const jsFilePath = path.resolve(js);
  const outPath = out ? path.resolve(out) : jsFilePath;

  console.log('Replacing', jsFilePath);
  if (out) {
    console.log('Output file', outPath);
  }

  // Generate the new ts namespace based on the file name.
  const tsNs = 'google3.' + ts.replace(/\//g, '.').replace(/\.ts$/, '');

  pify(fs.readFile)(jsFilePath, 'utf8').then(data => {
    // Find the goog require.
    const match = data.match(new RegExp(`(\\w+) = goog.require\\('${ns}'`, 'm'));

    if (!match) {
      return Promise.reject(`${ns} not found`);
    }

    const id = match[1];
    const idLower = startWithLowerCase(id);

    // Is this a module?
    if (id.toLowerCase().endsWith('module')) {
      data = data.replace(`${id}.name`, `${idLower}.${idLower}.name`);
    }

    return data.replace(`${id} = goog.require('${ns}'`, `${idLower} = goog.require('${tsNs}'`)
        .replace(new RegExp(`{!${id}`, 'g'), `{!${idLower}.${id}`)
        .replace(new RegExp(`{${id}`, 'g'), `{${idLower}.${id}`);
  }).then(data => pify(fs.writeFile)(outPath, data));
})();
