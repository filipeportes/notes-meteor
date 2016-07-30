import {Notes} from "../lib/collections";

let id;

Template.noteForm.onCreated(() => {
    id = FlowRouter.getParam("id");
});

Template.noteForm.helpers({
    note() {
        if (id) {
            return Notes.findOne(id);
        }
        return {};
    }
});


Template.noteForm.events({
    'submit .js-new-note'(event) {
        event.preventDefault();

        const target = event.target;
        const title = target.title.value;
        const description = target.description.value;

        if (id) {
            // Insert note
            Notes.upsert({_id: id}, {
                $set: {
                    title,
                    description
                }
            });
        } else {
            // Insert note
            Notes.insert({
                title,
                description,
                createdAt: new Date()
            });
        }

        FlowRouter.go("/notes");
    },
});