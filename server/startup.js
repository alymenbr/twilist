Meteor.startup(function () {

    if( Lists.find().count() === 0 ){

        var twitterService = getTwitterService();

        twitterService.get('lists/ownerships',
            {
                screen_name: 'alymenbr',
            },
            Meteor.bindEnvironment( 
                function(err, data, response) {
                    debugger;

                    for(i = 0; i < data.lists.length; i++){
                        var newList = data.lists[i];
                        newList._id = newList.id;
                        Lists.upsert( {_id: newList._id}, newList );
                    }
                }, 
                function(error) {
                    console.log( error);
                })
        );        

    }

});   


function getTwitterService(){

    var twit = Meteor.npmRequire('twit');

    return new twit({
        consumer_key:         'w0TtlhxFEhYisSu0yWjlzFVk9', // API key
        consumer_secret:      'UHoBcWQxZcX3JewnCklHpiYn4XjxUeus9qImiEAU0mIbx3E0rE', // API secret
        access_token:         '1321178677-qvcDQOooSImkJmZz4F9KmIFhltj1w11kwzGiE3w', 
        access_token_secret:  '8kDCYntfNaD5FomvcBkvd8LaJOEqsl2yZghLNWUNeglpy'
    });
}