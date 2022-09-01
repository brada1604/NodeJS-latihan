const yargs = require("yargs");

const fs = require("fs");

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        file: {
            describe: "File name",
            type: "string",
        },
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string",
        },
    },
    handler: function (argv) {
        const book = {
            title: argv.title,
            body: argv.body,
        };
        const bookJSON = JSON.stringify(book);
        fs.writeFileSync(argv.file + ".json", bookJSON);
        console.log("Note has been saved as " + argv.file + ".json");
        console.log("Read note with read command");
    },
});

yargs.command({
    command: "read",
    describe: "Read saved note data",
    builder: {
        file: {
            describe: "File name",
            demandOption: true,
            type: "string",
        },
    },
    handler: function (argv) {
        let readJSON = fs.readFileSync(argv.file + ".json");
        let noteRead = JSON.parse(readJSON);
        console.log("Title : " + noteRead.title);
        console.log("Body : " + noteRead.body);
    },
});

console.log(yargs.argv);