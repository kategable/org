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

   // `${distFolder}/scripts.js`,
  ];

  fs.ensureDirSync('dist/apps/newsletter/web-components');

  await concat(
    files,
    `dist/apps/newsletter/web-components/${webComponentFileName}`
  );
}

async function buildAll() {
  // minified

 await build('./dist/apps/newsletter', 'newsletter-web-components.js');
console.log('build done');
//makeStylesJs('/dist/apps/newsletter/styles.css', '/dist/apps/newsletter/styles.js');
  //fs.copyFileSync( 'src/test-harness/index.html', 'dist/outbox-ui/web-components/index.html');

  // full-size

  // build('./dist/outbox-ui/debug', 'outbox-web-components-debug.js');

  // copyFileSyncWithReplace( 'src/test-harness/index.html', 'dist/outbox-ui/web-components/index-debug.html',

  //                 'outbox-web-components.js', 'outbox-web-components-debug.js');
}

 buildAll();
