import {Notes} from '../lib/collections';

Template.notes.helpers({
    notes() {
        return Notes.find({});
    }
});


Template.note.events({
    'click .js-notes-remove'() {
        Notes.remove(this._id);
    },
});