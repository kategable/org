const fs = require('fs-extra');

const concat = require('concat');

const replace = require('buffer-replace');

// dist/outbox-ui/styles.css -> dist/outbox-ui/styles.js

function makeStylesJs(cssName, jsName) {
  const header = `const styleElement = document.createElement('style');styleElement.appendChild(document.createTextNode(\``;

  const footer = `\`));document.getElementsByTagName('head')[0].appendChild(styleElement);\n`;

  fs.writeFileSync(jsName, header);

  const cssContent = replace(fs.readFileSync(cssName), '`', '\\`');

  const cssContent1 = replace(cssContent, '\\', '\\\\');

  fs.appendFileSync(jsName, cssContent1);

  fs.appendFileSync(jsName, footer);
}

// function copyFileSyncWithReplace(srcFile, destFile, replaceFrom, replaceTo) {
//   fs.writeFileSync(
//     destFile,
//     replace(fs.readFileSync(srcFile), replaceFrom, replaceTo)
//   );
// }

async function build(distFolder, webComponentFileName) {
  makeStylesJs(`${distFolder}/styles.css`, `${distFolder}/styles.js`);

  const files = [
    `${distFolder}/styles.js`,
    `${distFolder}/runtime.js`,
    `${distFolder}/polyfills.js`,
    `${distFolder}/main.js`,
  ];

  fs.ensureDirSync('dist/apps/newsletter/web-components');

  await concat(
    files,
    `dist/apps/newsletter/web-components/${webComponentFileName}`
  );
}

async function buildNewsLetterComponent(version) {
  // minified
  const fileName = 'web-components';
  const builtFilePath = 'dist/apps/newsletter/web-components/';
  const builtFile = `${builtFilePath}${fileName}.js`;
  const newscriptPath = `dist/apps/newsletter/web-components/`;
  const newscriptFileName = `${fileName}-v${version}`;
  const newscript = `${newscriptPath}${newscriptFileName}.js`;
  await build('./dist/apps/newsletter', fileName +'.js');
  console.log('build done');

  fs.copyFileSync(
    builtFile,
    newscript
  );
  // fs.copyFileSync(
  //   builtFile,
  //   'apps/newsletter/src/web-components.js'
  // );
  console.log('copy done');

  //todo: figure out where this goes
  // fs.writeFileSync(
  //   'web-components.js',
  //   `<script src="${newscriptFileName}" type="text/javascript"></script>`
  // );
}
const version = '1.0';
buildNewsLetterComponent(version);
