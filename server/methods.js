Meteor.methods({

    'updateAllLists': function(){
		var lists = Lists.find().fetch();

		for(i = 0; i < lists.length; i++){
			var listId = lists[i]._id;
			updateSingleList( listId, 5 );
		}
    }

});


function updateSingleList(listId, listCount){

	var twitterService = getTwitterService();

    twitterService.get('lists/statuses',
    {
        list_id: listId,
        include_entities: false,
        count: listCount
    },
    Meteor.bindEnvironment( 
        function(err, data, response) {

            for(i = 0; i < data.length; i++){
                var newTweet = data[i];

                newTweet._id = newTweet.id;
                newTweet.list_id = listId;
                Tweets.upsert( {_id: newTweet._id}, newTweet );
            }
        }, 
        function(error) {
            console.log( error);
        })
    );
}


function getTwitterService(){

    var twit = Meteor.npmRequire('twit');

    return new twit({
        consumer_key:         'w0TtlhxFEhYisSu0yWjlzFVk9', // API key
        consumer_secret:      'UHoBcWQxZcX3JewnCklHpiYn4XjxUeus9qImiEAU0mIbx3E0rE', // API secret
        access_token:         '1321178677-qvcDQOooSImkJmZz4F9KmIFhltj1w11kwzGiE3w', 
        access_token_secret:  '8kDCYntfNaD5FomvcBkvd8LaJOEqsl2yZghLNWUNeglpy'
    });
}