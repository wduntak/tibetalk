Meteor.startup(function (){

 // Loading (for testing purposes)

  Router.route('/faq', {
    name: 'faq',
    template: 'faq'
  });

  // Toolbox

  Router.route('/about', {
    name: 'about',
    template: 'about'
  });

});
