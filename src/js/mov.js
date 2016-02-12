// Store all the data for the resume in the Model.

var model = {


};

// The octopus controls the interface between the data and the view on the screen.

var octopus = {

	init: function() {
        // tell the view to initialize
        view.init();
    }

};

// The view displays the data provided by the octopus.

var view = {



	// Initialize the view by declaring DOM variables once and rendering the view.
	init: function() {

		// store pointers to our DOM elements for easy access later


        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {

    	// Get the data for each section of the resume from the octopus.

    }
};

// run the app.
octopus.init();