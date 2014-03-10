YUI().use('bookie-model', 'bookie-view', function(Y) {
    var options = new Y.bookie.OptionsModel();
    options.load();
    setTimeout(function() {
        var view = new Y.bookie.OptionsView({
            model: options
        });
        view.render();
    }, 500);
});