Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('login', {path: '/'}),
  this.route('list', {path: '/list'}),  
  this.route('page1', {path: '/page1'}),
  this.route('page2', {path: '/page2'})
});