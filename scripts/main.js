// Add your Javascript code.
be = be || {};
be.widgets = be.widgets || {};
be.widgets['${widget.name}'] = {
    init: function (widgetInstance) {
        console.log(widgetInstance.name);
    }
};