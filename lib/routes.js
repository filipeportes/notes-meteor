FlowRouter.route('/', {
    name: 'root',
    action() {
        FlowRouter.go("/notes");
    }
});

FlowRouter.route('/notes', {
    name: 'notes',
    action() {
        BlazeLayout.render('Layout', {main: 'notes'});
    }
});

FlowRouter.route('/notes/new', {
    name: 'new note',
    action() {
        BlazeLayout.render('Layout', {main: 'noteForm'});
    }
});

FlowRouter.route('/notes/:id', {
    name: 'edit note',
    action: function(params) {
        BlazeLayout.render('Layout', {main: 'noteForm'});
    }
});