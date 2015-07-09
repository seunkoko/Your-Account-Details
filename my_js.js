
//variables declared to hold the data set gotten from https://api.github.com/users/seunkoko
    var avatar_url_use;
    var public_repos_use;
    var public_gists_use;
    var followers_use;
    var following_use;

//var xhr declares your xmlhttprequest for https://api.github.com/users/seunkoko
//function done is for succesful execution
//function fail is to handle failed execution
//function always is for waiting till the request is complete
var xhr = $.get( "https://api.github.com/users/seunkoko", function() {
  //alert( "getting from https://api.github.com/users/seunkoko );
})
  .done(function(data) {
    //console.log(data)
    for(var o in data)
    {
        console.log(data.avatar_url);
        console.log(data.public_repos);
        console.log(data.public_gists);
        console.log(data.followers);
        console.log(data.following);

        //assigning the variables to the desired outputs
        avatar_url_use = data.avatar_url;
        public_repos_use = data.public_repos;
        public_gists_use = data.public_gists;
        following_use = data.following;
        followers_use = data.followers;
    } 

    //manipulating the outputed values in html
    $('#avatar_url').html("<img src=" + avatar_url_use + " style = 'height:40px;width:40px'></img>");
    $('#public_repos').html("public repos: " + public_repos_use);
    $('#public_gists').html("public gists: " + public_gists_use);
    $('#followers').html("followers " + followers_use);
    $('#following').html("following " + following_use);
    })
      .fail(function() {
        //alert( "error" );
      })
        .always(function() {
          //alert( "finished" );
  });
 


