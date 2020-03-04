#!/usr/bin/env node

"use strict";

const argv = require("yargs")
    .option("language", {alias: "l", describe: "Please provide the language code that you wish to set as the base language."})
    .option("yes", {describe: "Reply 'yes' to all automated prompts."})
    .option("output", {describe: "If set elm-make will be called to compile a localized version of your app which will be placed in the given directory."})
    .option("src", {default: "src", describe: "The location of your elm code base. Only relevant if output is set."})
    .option("elmFile", {default: "Main.elm", describe: "File to be compiled by elm-make. Only relevant if output is set."})
    .option("rootModule", {default: "Translation", describe: "The name of the root module containing all localization modules."})
    .help()
    .demand(["language"])
    .argv;
const fs = require("fs-extra");
const path = require("path");

const currentDir = process.cwd();

// baseDir is the location of the translation root module as referenced in your elm app
const baseDir = path.join(currentDir, argv.src, argv.rootModule);

// check if language exists
const languageDir = path.join(currentDir, argv.src, argv.rootModule);

if (!fs.existsSync(languageDir)) {
    console.error("Language module not found", languageDir);
    process.exit(1);
}

main();

/**
 * main - Copies/symlinks the language into place
 */
function main() {
		if (argv.output) {
				build(argv.output);
		}
}


/**
 * build - Builds the elm app with the current language.
 *
 * @param  {type} outputDir The directory to which the elm build should be written.
 *                          Files will be named according to the current language
 */
function build(outputDir) {
    let exec = require("child_process").exec;
    let elmFile = path.join(argv.src, argv.elmFile);
    let cmd = "elm-make " + elmFile + " --yes --output " + argv.output + "/" + argv.language + ".js";
    console.log(cmd);
    exec(cmd, (err, stdout, stderr) => {
        if(err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });
}
