const mongoose = require('mongoose');
const Note = mongoose.model('Note');

module.exports = app => {
    app.get('/', (req, res) => {
        // new Note({Title: "This is test", Author: "Peter Martinez", Description: "This is a new note"}).save();
        res.send('This is the Jane Api');
    });

    app.post('/api/add/note', (req, res) => {
        let {Title, Author, Description} = req.body;
        new Note({Title, Author, Description}).save()
        .then(note => {
            res.send(note).status(200);
        }).catch(err => {
            res.send(err).status(500);
        });
    });

    app.delete('/api/delete/note', (req, res) => {
        Note.findById({_id: req.body.id}).remove()
        .then(note => {
            res.send("Note Deleted").status(200);
        })
        .catch(err => {
            res.send(err).status(500);
        });
    });

    app.get('/api/notes', (req, res) => {
        Note.find()
        .then(notes => {
            res.send(notes).status(200);
        })
        .catch(err => {
            res.send(err).status(500);
        });
    })
}; 