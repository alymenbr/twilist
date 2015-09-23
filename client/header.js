Template.header.events({
  'click #btnRefresh': function(e) {
    e.preventDefault();
    Meteor.call('updateAllLists');
  }
});

Meteor.methods({
    'updateAllLists': function(){
    }
});