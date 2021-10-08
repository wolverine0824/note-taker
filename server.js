// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
const notes = require("./db/db.json")
const cuid = require("cuid")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"))

// currentID = notes.length;

// Routes

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "public/index.html")));


app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "/public/notes.html")));

app.get("/api/notes", (req, res) => res.json(note));

app.get("/api/notes", (req, res) => {
 const newNote = req.body;
 nowNote.id = cuid()
 note.push(newNote);
 res.json(newNote);
});

app.delete("/api/notes", (req, res) => {
const myID = req.params.id;

for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === myID) {
        note.splice([i], 1);
    }
}
res.end
});


//     res.send('Got a DELETE request at /api/notes/:id')

//     var id = req.params.id;

//     var idLess = notes.filter(function (less) {
//         return less.id < id;
//     });

//     var idGreater = notes.filter(function (greater) {
//         return greater.id > id;
//     });

//     notes = idLess.concat(idGreater);

//     rewriteNotes();
// })

// // Access files in "public" folder

// app.use(express.static("public"));

// // HTML Routes

// app.get("/notes", function (req, res) {
//     res.sendFile(path.join(__dirname, "public/notes.html"));
// });

// app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "public/index.html"));
// });

// // Listen

// app.listen(PORT, function () {
//     console.log("App listening on PORT " + PORT);
// });

// // Functions

// function rewriteNotes() {
//     fs.writeFile("db/db.json", JSON.stringify(notes), function (err) {
//         if (err) {
//             console.log("error")
//             return console.log(err);
//         }

//         console.log("Success!");
//     });
// }
