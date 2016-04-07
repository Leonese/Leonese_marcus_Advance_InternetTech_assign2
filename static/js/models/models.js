(function (document, window, $, Backbone, _){

	window.UTT = {
		Routers			: {},
		Views 			: {},
		Models			: {},
		Collections		: {},
		templateLoader 	: {}
	};

	UTT.Models.RestaurantModel = Backbone.Model.extend({		

		urlRoot : '/restaurants',

		initialize: function(){	
			console.log('sending data to:' + this.urlRoot);		
		},

		defaults: {			
			"id": null, 
			"restaurant_address": null, 
			"restaurant_image": null,
			"restaurant_name": null
	    }
	});
	UTT.Models.UserModel = Backbone.Model.extend({		

		urlRoot : '/createuser',

		initialize: function(){	
			console.log('sending data to:' + this.urlRoot);		
		},

		defaults: {			
			"emailaddress": null, 
			"password": null, 
			"image": null
	    }
	});
		UTT.Models.RequestModel = Backbone.Model.extend({		

		urlRoot : '/restaurants',

		initialize: function(){	
			console.log('sending data to:' + this.urlRoot);		
		},

		defaults: {			
			"id": null,
            "meal type": null,
            "location": null,
            "latitude": null,
            "longitude": null,
            "meal time": null,
            "filled": null
	    }
	});
		UTT.Models.ProposalModel = Backbone.Model.extend({		

		urlRoot : '/restaurants',

		initialize: function(){	
			console.log('sending data to:' + this.urlRoot);		
		},

		defaults: {			
			"id": null,
            "user proposed to": null,
            "user proposed from": null,
            "request id": null,
            "filled": null
	    }
	});
			UTT.Models.MealDateModel = Backbone.Model.extend({		

		urlRoot : '/restaurants',

		initialize: function(){	
			console.log('sending data to:' + this.urlRoot);		
		},

		defaults: {			
		"id": null,
            "user 1": null,
            "user 2": null,
            "restaurant_name":  null,
            "restaurant_address": null,
            "restaurant_picture": null,
            "meal time": null
	    }
	});
	
	UTT.Collections.RestaurantCollection = Backbone.Collection.extend({
		model 	: UTT.Models.RestaurantModel,
		url 	: '/restaurants'
	});
	UTT.Collections.UserCollection = Backbone.Collection.extend({
		model 	: UTT.Models.UserModel,
		url 	: '/createuser'
	});

	UTT.Collections.RequestCollection = Backbone.Collection.extend({
		model 	: UTT.Models.RequestModel,
		url 	: '/restaurants'
	});
	
	UTT.Collections.ProposalCollection = Backbone.Collection.extend({
		model 	: UTT.Models.ProposalModel,
		url 	: '/restaurants'
	});
	UTT.Collections.MealDateCollection = Backbone.Collection.extend({
		model 	: UTT.Models.MealDateModel,
		url 	: '/restaurants'
	});
	

}(document, this, jQuery, Backbone, _));