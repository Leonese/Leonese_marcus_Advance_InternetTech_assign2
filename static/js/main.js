(function (document, window, $, Backbone, _){
	

	UTT.Routers.AppRouter = Backbone.Router.extend({

		routes: {
			"" 	: "home",
			"createuser" : "registeruser",
			"editprofile" : "editprofile"
		},

		initialize : function(){
			console.log("initialize");					

		},

		home : function(){	
				
			this.home = new UTT.Views.Index();			
			$("#content").html(this.home.el);
						
		},

		registeruser : function(){	
				
			this.registeruser = new UTT.Views.CreateUser();				
			$("#content").html(this.registeruser.el);
							
		}
		editprofile : function(){	

				
			this.editprofile = new UTT.Views.EditProfile();			
			$("#content").html(this.editprofile.el);
			
		},

	});

	UTT.templateLoader.load(["Home", "Restaurant","CreateUser","UserNames","EditProfile"],function () {      
		$(document).ready(function(){
			app = new UTT.Routers.AppRouter();
			Backbone.history.start();
		});
	});


}(document, this, jQuery, Backbone, _));
