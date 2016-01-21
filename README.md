# react-meteor-tutorial-I
This it the first two parts of  of a 10 part series of tutorials and the magic that is Meteor.JS with the sleekness that is React.JS.


Making Basic React.js Components in Meteor
 React.JS +Meteor.JS +Bootstrap 3
 
 
 
1.    Start a new Meteor project
 
Navigate to the file directory in which you would like to start your project in the terminal. Once you are there, create a new Meteor project using the following command.
 
“meteor create react-meteor”
 
This will set you up with the bare minimum file structure and files for a basic Meteor app. If you navigate to the directory via your desktop rather than the terminal, you should see this:
 
 
 
 
Meteor sets you up with the bare minimum, the 3 files that it needs to function (so nice of you, Meteor!).
 
In order to see your work, you’ll want to start up the Meteor production server.
 
Meteor tells user how to start up the server in the terminal after you create a new project (by getting to the meteor-react file directory in your terminal and typing meteor again):
 
 
Once you type meteor into the project directory, your app will be up, running and ready!
 
 
 
 
 
 
Navigate to localhost:3000 in your web browser and you should see this!
 
 
 
 
 
                    	You have created a Meteor app (even if it is lame)!
 
 

 
2.     Setting up the Meteor file structure!
 
Delete the 3 files that meteor generated 
 
meteor-react.css
meteor-react.html
meteor-react.js
 
Replace those 3 files with 3 main folders in the meteor-react directory.  
 
client: any code that’s placed within a folder named “client” will only run on the client.
 
server:  any code that’s placed within a folder named “server” will only run on the server.
                    	
lib: a place to put your pictures, fonts and other assets. This code will be loaded first
 
In the client folder, we will make 2 sub-folders:
 
one called components and one called stylesheets

 
 
        	Components will house our React components!
 
Stylesheets will house the CSS files or the design attributes of each	component
 
and one html file (head.html).
 
 
 
And  your file structure for our tutorial is complete! On to some packages. WOO.
 
 
We will need to install 5 packages
 
  react

kadira:react-layout

kadira:flow-router – handles urls or routing

fourseven:scss 

reywood:bootstrap3-sass


 
Run the “meteor add” command in the terminal to make this happen very quickly
 
meteor add react kadira:flow-router kadira:react-layout fourseven:scss
reywood:bootstrap3-sass
 
 
 
*Another way to add packages to your Meteor project is by navigating to the “packages” file in your project (you can find 
it in the local folder which is in the “.meteor” folder).  When you add a new package, it will automatically appear in this 
file along with the list of pre-baked packages that meteor comes with.
 
 
 
You can enter the package name manually if you’d like. If you chose to enter them through the terminal, your packages file 
should look like this:
 
 
If your packages folder looks like this, you are in good shape.
 
 
 
Add bootstrap resources to the project so that our project can be pretty. Create a main.scss file in your stylesheets folder 
and add this code to the top:
 
@import '{reywood:bootstrap3-sass}/bootstrap';
 
This line of code will make the Bootstrap 3 framework available to your project. You can see all that bootstrap has to offer here.

 
3.     Set up FlowRouter
 
Create a new jsx file called Routes.jsx in the lib folder. This is where we are setting up our routing or URL conventions using 
FlowRouter.
 
FlowRouter deals strictly with routing and was made to make the process simpler. There are several technologies that work with 
meteor that will handle this. FLow Router is the most simple to use;cd
 
This piece of code tells the program that when the url route is “/”, to render a React Layout called “Home”.
 
FlowRouter.route('/', {
  name: 'Home',
  action(params) {
    ReactLayout.render(Home);
  },
});
 
If we go back to the web browser and check out the state of our project…
 
 
If you check out the console, you can see that we are getting a Reference Error: Home is not defined. This is because we did not 
create our “Home” component yet. Now it’s time to start writing in React.JS.
 

4.     Crafting React.JS Components
 
Our project is now to the point where we can create our very first React.JS Component. First, create a new file called “Home.jsx” 
in the components folder.
 
In the newly created “Home.jsx” file, we will create a basic react component called Home:
 
        	

 
AND tah-dah!
 
 
 
This is it. It may seem a little underwhelming but we are at the very beginning.
 
Let’s add some bootstrap to make this project a little easier on the eyes.
We will wrap the html heading in a bootstrap jumbotron component. Bootstrap’s convention is that all elements that are of a component 
class must also be of a container class:
                    	
    	<div class="jumbotron">
    	 <div class="container">
           	// HTML goes here
    	 </div>
       </div>
 
When we use Bootstrap 3 with React.js, we use “className” instead of class because “class” is a reserved word in React. Our component 
styled with a jumbotron would look like this:
 
Home = React.createClass({
  render() {
    return (
  	<div className='jumbotron'>
        	   	<div className='container'>
       	<h1> First React Component!</h1>
       	<p>Pretty sweet</p>
    	</div>
  	</div>
  );
  },
});
 

 
-----------------------------------------------------------


Meteor.JS & React II
Create a React Layout for Meteor


If you completed Meteor and React I: Create A Basic Component, you should be ready to begin this exercise. If not, you can find the code here.

Your browser should look like this 


We are going to use kadira:react-layout package to set up this project to build out a Meteor.JS app.


Learn the power of  kadira:react-layout
Set up our project to accommodate for multiple screens or views
Refactor our existing code to prepare for adding more components

Let’s start by creating a folder called layout to hold our components that will be part of the layout.. We can place this folder in the components folder in clients directory that we already created.

	

2. Next we’ll create a file that will hold the basic structure of our layout called MainLayout.JSX
 and add the following code

MainLayout = React.createClass({

  render() {
    return (
      <div>

      </div>
    );
  },
});

This, as we saw in Part I, is all that you need to create a React.JS component.

3. In order to create sections, we will use React.JS props to call upon the components that we will create.
 
MainLayout = React.createClass({
  render() {
    return (
      <div>
		{this.props.header}

		{this.props.content}

		{this.props.footer}


      </div>
    );
  },
});

These three indicate three distinct areas of the app.

4. Add MainLayout to our routes.jsx file so that it will render when called

We do this by creating a renderMainLayoutWith function that takes the argument  component to which we can pass properties named for the three distinct areas of the app, 

function renderMainLayoutWith(component) {
  ReactLayout.render(MainLayout, {
    header: <Header />,
    content: component,
    footer: <Footer />,
  });
}

As you can see, the properties in the routes.jsx file correspond to the properties specified in the MainLayout.jsx file.


5. Time to create some Components. Add two jsx files called “header.jsx”, “footer.jsx”,” to the layout folder in the components folder. 

In each of these, add basic code 




6. Once you have done this, we can add some component code to the header.jsx file.



Header = React.create({
  render() {
    return (
      <div>Header</div>
    );
  },
});


and to the footer.jsx

Footer = React.create({
  render() {
    return (
      <div>Footer</div>
    );
  },
});



7.  Update Flowrouter’s route for “/” or localhoast:3000 to render the components that we created.

Lets update our routes like this.


FlowRouter.route('/', {
  name: 'Home',
  action(params) {
    renderMainLayoutWith(<Home />);
  },


Before saving, we’ll want to move  the renderMainLayoutWith function to the top of the routes.jsx file.


function renderMainLayoutWith(component) {
  ReactLayout.render(MainLayout, {
    header: <Header />,
    content: component,
    footer: <Footer />,
  });
}


FlowRouter.route('/', {
  name: 'Home',
  action(params) {
    renderMainLayoutWith(<Home />);
  },
});





Once you save and head to local host………

Not very sexy! Actually, really weird and ugly. Our Header and  FOoter sure don’t look like a header and footer and our Home component needs to be updated.


Let’s add some Bootstrap to the Header.jsx file and footer.jsx file


Header = React.createClass({
  render() {
    return (
        <div class='page-header'>
          <h1>React.JS Component Header <small>in Meteor.JS</small></h1>
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    );
  },
});











Change the Home JSX file to include this bootstrap. This code will make a neat little bootstrap event item with a spot for a photo, title of the event, time and date button. In later tutorials, we will replaces this static dummy data with meteor data streams.

Home = React.createClass({
  render() {
    return (
      <div className='jumbotron'>
        <div className='container'>
          <div className='col-md-12'><h2>Upcoming Events</h2></div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <div className='col-sm-4'>
              <div className='thumbnail'>
                  <img src='http://www.kappit.com/img/pics/16154375gfabh_sm.jpg' className='img-responsive' alt='a'>
                </img>
              <div className='row'>
                <div className='col-md-3'>
                  <h3><span className='label label-info'>May 24</span></h3>
                </div>
                <div className='col-md-9'>
                  <strong>Business & Entrepreneurs Workshop</strong><br>
                  <em>at Grand Hotel Italia</em>
                  </br>
                  <span className='small'> 10:00 AM - 21:00 PM </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

The above is fugly looking. observe the 6 consecutive divs. We will clean this up in the next step. For now save your work and refresh localhost. 



and here is your first React Layout built.

