Template.list.helpers({
	lists: function () {
		var lists = Lists.find().fetch();

    lists.forEach( function(list) {
			list.tweets = Tweets.find( {list_id: list.id} );
		});

		return lists;
	}
});

Template.list.rendered = function() {
  // hack: these third party header animation scripts must be inserted at the bottom of body
   tweetParser('.tweet');

	 // hack: these third party header animation scripts must be inserted at the bottom of body
   $('body').append('<script type="text/javascript" src="scripts/custom.js"></script>');
};
