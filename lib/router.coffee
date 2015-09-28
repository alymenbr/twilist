Router.configure
  layoutTemplate: 'layout'

Router.map ->
  this.route('login', {path: '/'})
  this.route('list', {
    path: '/list'
    })
