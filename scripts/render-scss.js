// builtins
const fs = require("fs");
// external packages
const autoprefixer = require("autoprefixer");
const upath = require("upath");
const postcss = require("postcss");
const sass = require("sass");
const sh = require("shelljs");
// local packages
const packageJSON = require("../package.json");

const stylesPath = "../src/scss/styles.scss";
const destPath = upath.resolve(
  upath.dirname(__filename),
  "../dist/css/styles.css"
);

const entryPoint = `/*!
* Cofundable - ${packageJSON.title} v${packageJSON.version} (${
  packageJSON.homepage
})
* Copyright 2021-${new Date().getFullYear()} ${packageJSON.author}
* Licensed under ${packageJSON.license} (https://github.com/Cofundable/${
  packageJSON.name
}/blob/main/LICENSE)
*/
@import "${stylesPath}"
`;

module.exports = function renderSCSS() {
  const results = sass.renderSync({
    data: entryPoint,
    includePaths: [upath.resolve(upath.dirname(__filename), "../node_modules")],
  });

  const destPathDirname = upath.dirname(destPath);
  if (!sh.test("-e", destPathDirname)) {
    sh.mkdir("-p", destPathDirname);
  }

  postcss([autoprefixer])
    .process(results.css, { from: "styles.css", to: "styles.css" })
    .then((result) => {
      result.warnings().forEach((warn) => {
        /* eslint no-console: "off" */
        console.warn(warn.toString());
      });
      fs.writeFileSync(destPath, result.css.toString());
    });
};
