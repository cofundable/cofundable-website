// builtins
const fs = require("fs");
// external dependencies
const upath = require("upath");
const sh = require("shelljs");
// local dependencies
const packageJSON = require("../package.json");

module.exports = function renderScripts() {
  const sourcePath = upath.resolve(upath.dirname(__filename), "../src/js");
  const destPath = upath.resolve(upath.dirname(__filename), "../dist/.");

  sh.cp("-R", sourcePath, destPath);

  const sourcePathScriptsJS = upath.resolve(
    upath.dirname(__filename),
    "../src/js/scripts.js"
  );
  const destPathScriptsJS = upath.resolve(
    upath.dirname(__filename),
    "../dist/js/scripts.js"
  );

  const copyright = `/*!
* Cofundable - ${packageJSON.title} v${packageJSON.version} (${
    packageJSON.homepage
  })
* Copyright 2021-${new Date().getFullYear()} ${packageJSON.author}
* Licensed under ${packageJSON.license} (https://github.com/cofundable/${
    packageJSON.name
  }/blob/master/LICENSE)
*/
`;
  const scriptsJS = fs.readFileSync(sourcePathScriptsJS);

  fs.writeFileSync(destPathScriptsJS, copyright + scriptsJS);
};
