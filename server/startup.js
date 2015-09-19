  Meteor.startup(function () {
    // code to run on server at startup

    var Twit = Meteor.npmRequire('twit');

    var T = new Twit({
        consumer_key:         'w0TtlhxFEhYisSu0yWjlzFVk9', // API key
        consumer_secret:      'UHoBcWQxZcX3JewnCklHpiYn4XjxUeus9qImiEAU0mIbx3E0rE', // API secret
        access_token:         '1321178677-qvcDQOooSImkJmZz4F9KmIFhltj1w11kwzGiE3w', 
        access_token_secret:  '8kDCYntfNaD5FomvcBkvd8LaJOEqsl2yZghLNWUNeglpy'
    });

    //  search twitter for all tweets containing the word 'banana'
    //  since Nov. 11, 2011
    T.get('search/tweets',
        {
            q: 'banana since:2012-11-11',
            count: 2
        },
        function(err, data, response) {
            console.log(data);
        }
    );

  });