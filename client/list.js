Template.list.helpers({
	lists: function () {
		var lists = Lists.find().fetch();

    lists.forEach( function(list) {
			list.tweets = Tweets.find( {list_id: list.id} );
		});

		return lists;
	}
});
