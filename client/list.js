Template.list.helpers({
	lists: function () {
		var lists = Lists.find();

    lists.forEach( function(list) {
			lists.tweets = Tweets.find( {list_id: list.id} );
		});

		lists.rewind();

		return lists;
	}
});
