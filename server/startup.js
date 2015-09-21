  Meteor.startup(function () {

    BrowserPolicy.content.allowOriginForAll("http://meteor.local");
    BrowserPolicy.content.allowOriginForAll("*.twitter.com");
    BrowserPolicy.content.allowOriginForAll("*.googleapis.com");
    BrowserPolicy.content.allowOriginForAll("*");

    BrowserPolicy.content.allowSameOriginForAll();
    BrowserPolicy.content.allowDataUrlForAll();
    
    BrowserPolicy.framing.allowAll();

    BrowserPolicy.content.allowEval();
    BrowserPolicy.content.allowInlineStyles();
    BrowserPolicy.content.allowInlineScripts();

    // code to run on server at startup
/*
    var Twit = Meteor.npmRequire('twit');

    var T = new twit({
        consumer_key:         'w0TtlhxFEhYisSu0yWjlzFVk9', // API key
        consumer_secret:      'UHoBcWQxZcX3JewnCklHpiYn4XjxUeus9qImiEAU0mIbx3E0rE', // API secret
        access_token:         '1321178677-qvcDQOooSImkJmZz4F9KmIFhltj1w11kwzGiE3w', 
        access_token_secret:  '8kDCYntfNaD5FomvcBkvd8LaJOEqsl2yZghLNWUNeglpy'
    });

    T.get('lists/statuses',
        {
            list_id: 197573453, // scrum
            include_entities: true,
            count: 3
            // since_id: 
            //max_id
        },
        function(err, data, response) {
            console.log(data);
        }
    );
*/
  });   