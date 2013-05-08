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
		  }
		  
