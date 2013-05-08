		  window.fbAsyncInit = function() {
		    FB.init({
		      appId      : '527684577295821', // App ID
		      channelUrl : '//csci5125-geocaching.azurewebsites.net//channel.html', // Channel File
		      status     : true, // check login status
		      cookie     : true, // enable cookies to allow the server to access the session
		      xfbml      : true  // parse XFBML
		    });
		
		    FB.Event.subscribe('auth.statusChange', handleStatusChange);
		  };
		
		  // Load the SDK Asynchronously
		  (function(d){
		     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
		     if (d.getElementById(id)) {return;}
		     js = d.createElement('script'); js.id = id; js.async = true;
		     js.src = "//connect.facebook.net/en_US/all.js";
		     ref.parentNode.insertBefore(js, ref);
		   }(document));
		  
		  //Handle the things to do right after login
		  function handleStatusChange(response) {
		      document.body.className = response.authResponse ? 'connected' : 'not_connected';
		      if (response.authResponse) {
		        console.log(response);
		
		        updateUserInfo(response);
		      };
		  };
		  
		  function updateUserInfo(response) {
			  FB.api('/me', function(response) {
			       document.getElementById('user-name').innerHTML = response.name;
			     });
		  };
		  
		  function publishStory(){
			  FB.ui({
				    method: 'feed',
				    name: 'I\'m building a social mobile web app!',
				    caption: 'This web app is going to be awesome.',
				    description: 'Check out Facebook\'s developer site to start building.',
				    link: 'https://developers.facebook.com/mobile',
				    picture: 'http://www.facebookmobileweb.com/getting-started/img/facebook_icon_large.png'
				  }, 
				  function(response) {
				    console.log('publishStory response: ', response);
				  });
				  return false;
		  };
		  
