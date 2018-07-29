const mongoose = require('mongoose');
const Note = mongoose.model('Note');
const path = require('path');

module.exports = app => {

    app.post('/api/add/note', (req, res) => {
        let {Title, Author, Description} = req.body;
        new Note({Title, Author, Description}).save()
        .then(note => {
            res.send(note).status(200);
        }).catch(err => {
            res.send(err).status(500);
        });
    });

    app.delete('/api/delete/note/:id', (req, res) => {
        let {id} = req.params;
        Note.findById({_id: id}).remove()
        .then(() => {
            res.send({id: id}).status(200);
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
    });

    app.get('*', (res, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
      });
}; 