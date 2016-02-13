## GitHub User Page for Gregg Strohkorb

Welcome to my GitHub user page!  I developed this while taking the [Front-End Web Developer Nandegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001) at Udacity.  This online program is absolutely amazing and has opened up the world of web development and data science to me.

The purpose of this web site is to show you my applications and give you an idea of how I use technology to solve and visualize data science problems.

To get started, check out the repository to inspect the code and check out the deployed application on gh-pages:

* [Github code repository](https://github.com/gstroh/gstroh.github.io)
* [Deployed application on gh-pages](http://gstroh.github.io/dist/)

### Projects

Be sure to click on the image of Minard's map of the campaign of Napolean's army in Russia to get an explanation of the map.  This is a fantastic example of data visualization.

#### - Compass Projects

The Compass is a model for stock selection and market risk I developed over the past 10 years.  It is based on vector math on a map that has a market multiple or valuation on the y axis and stock return on the x axis.  Stocks may travel on this map in any direction.  But, the question I wanted to answer was: does the path and distance travelled on this map have any effect on future stock returns?  The answer to this question is clearly, "YES".  Check out my Compass app to see why and how. 

#### - Curve Projects

The Curve model was a pre-cursor to the Compass.  It attempts to answer the question: how can I identify stocks that are undervalued by the market and are attractive on a risk-adjusted basis?  This model involves some basic math to define undervalued stocks and identify those that are most attractive to a long-term investor.

#### - Udacity Projects

These projects represent class work performed while taking a variety of programs at Udacity.  They are tools used to built a skillset for effective front-end web development applied to model and data visualization.

### Project file structure

The following directories were used for source and production code and files: src and dist, respectively.  I also have a dev directory which I used for intermediary files from grunt-uncss.  The gh-pages application uses the dist directory for running the application.

### Grunt packages needed to run grunt for this application.

The following grunt plugins were used to automatically perform optimizations, minification, pushing changes to Github, remove unused CSS, copy files and create images of multiple sizes and quality.

* grunt
* grunt-responsive-images
* grunt-contrib-cssmin
* grunt-contrib-htmlmin
* grunt-contrib-imagemin
* grunt-contrib-uglify
* grunt-uncss
* grunt-gh-pages
* grunt-contrib-copy

Gruntfile.js and package.json are included in the project's base directory.

### Procedure used to deploy application.

The following commands were used in the terminal application (Mac) in the application base directory:

1. grunt
1. git commit -a
1. git push origin master
1. grunt gh-pages

Explanation of commands:

1. Use grunt to automate resizing of images, optimization of images, copying files and minification of html, css and js.
1. Commit the current changes to git.
1. Push the changes to Github.
1. Use grunt-gh-pages to deploy the application to gh-pages.
