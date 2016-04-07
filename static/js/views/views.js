(function (document, window, $, Backbone, _){


	UTT.Views.Index = Backbone.View.extend({

		className : "row",

		initialize : function(){
			this.render();
		},

		collection : new UTT.Collections.UserCollection(),

		render : function(){		
			$(this.el).html(this.template());				
			userInfoBody = this.$el.find("#reviewBody")
			this.collection.fetch({
				success : function(model, response){
					console.log(response)
					$.each(response.curuser, function(index, data){
						$(userInfoBody).append(new UTT.Views.UserNames({model:data}).el);
					})
				},
				error: function(model, response){
					console.log(response);
				}
			});
			return this;
		},

		events : {			
			"submit #index-form"	: "userLogin"			
		},

		userLogin : function(){
			var data =  this.getFormData(),
			that = this,
			curuser = new UTT.Models.UserModel();
			console.log(data);
			if(!_.isEmpty(data)){
				resturant.save(data,{
					success:function(model, response){							
						that.collection.add(response);
					  	that.render();
					},
					error : function(model, response){						
						window.aelrt("Error Processing")								
					}
				});	
			}else{
				window.alert("Empty form");
			}
			return false;
		},

		getFormData : function(){			
			var data = {},
			form = this.$el.find("#index-form"),
			viewArr = form.serializeArray(),
			valid = true;			

			$.each(viewArr, function(i,d){
				data[viewArr[i].name] = viewArr[i].value;
				if(viewArr[i].value === "") valid = false;
			});		
			if(valid){
				return data;
			}else{
				return {};
			}
		}

	});

UTT.Views.CreateUser = Backbone.View.extend({

		className : "row",

		initialize : function(){
			this.render();
		},

		collection : new UTT.Collections.UserCollection(),

		render : function(){		
			$(this.el).html(this.template());				
			userBody = this.$el.find("#reviewBody")
			this.collection.fetch({
				success : function(model, response){
					console.log(response)
					$.each(response.users, function(index, data){
						$(userBody).append(new UTT.Views.UserNames({model:data}).el);
					})
				},
				error: function(model, response){
					console.log(response);
				}
			});
			return this;
		},

		events : {			
			"submit #user-form"	: "addUser"			
		},

		addUser : function(){
			var data =  this.getFormData(),
			that = this,
			user = new UTT.Models.UserModel();
			console.log(data);
			if(!_.isEmpty(data)){
				user.save(data,{
					success:function(model, response){							
						that.collection.add(response);
					  	that.render();
					},
					error : function(model, response){						
						window.aelrt("Error Processing")								
					}
				});	
			}else{
				window.alert("Empty form");
			}
			return false;
		},

		getFormData : function(){			
			var data = {},
			form = this.$el.find("#user-form"),
			viewArr = form.serializeArray(),
			valid = true;			

			$.each(viewArr, function(i,d){
				data[viewArr[i].name] = viewArr[i].value;
				if(viewArr[i].value === "") valid = false;
			});		
			if(valid){
				return data;
			}else{
				return {};
			}
		}

	});
UTT.Views.Home = Backbone.View.extend({

		className : "row",

		initialize : function(){
			this.render();
		},

		collection : new UTT.Collections.RestaurantCollection(),

		render : function(){		
			$(this.el).html(this.template());				
			restaurantBody = this.$el.find("#reviewBody")
			this.collection.fetch({
				success : function(model, response){
					console.log(response)
					$.each(response.restaurants, function(home, data){
						$(restaurantBody).append(new UTT.Views.Restaurant({model:data}).el);
					})
				},
				error: function(model, response){
					console.log(response);
				}
			});
			return this;
		},

		events : {			
			"submit #resturant-form"	: "addRestaurant"
			"submit #request-form"		: "addRequest"
		},

		addRestaurant : function(){
			var data =  this.getFormData(),
			that = this,
			resturant = new UTT.Models.RestaurantModel();
			console.log(data);
			if(!_.isEmpty(data)){
				resturant.save(data,{
					success:function(model, response){							
						that.collection.add(response);
					  	that.render();
					},
					error : function(model, response){						
						window.aelrt("Error Processing")								
					}
				});	
			}else{
				window.alert("Empty form");
			}
			return false;
		},

		getFormData : function(){			
			var data = {},
			form = this.$el.find("#resturant-form"),
			viewArr = form.serializeArray(),
			valid = true;			

			$.each(viewArr, function(i,d){
				data[viewArr[i].name] = viewArr[i].value;
				if(viewArr[i].value === "") valid = false;
			});		
			if(valid){
				return data;
			}else{
				return {};
			}
		}

	});
	addRequest : function(){
			var data =  this.getFormData(),
			that = this,
			request = new UTT.Models.RequestModel();
			console.log(data);
			if(!_.isEmpty(data)){
				request.save(data,{
					success:function(model, response){							
						that.collection.add(response);
					  	that.render();
					},
					error : function(model, response){						
						window.aelrt("Error Processing")								
					}
				});	
			}else{
				window.alert("Empty form");
			}
			return false;
		},

		getFormData : function(){			
			var data = {},
			form = this.$el.find("#request-form"),
			viewArr = form.serializeArray(),
			valid = true;			

			$.each(viewArr, function(i,d){
				data[viewArr[i].name] = viewArr[i].value;
				if(viewArr[i].value === "") valid = false;
			});		
			if(valid){
				return data;
			}else{
				return {};
			}
		}

	});
	UTT.Views.EditProfile = Backbone.View.extend({

		className : "row",

		initialize : function(){
			this.render();
		},

		collection : new UTT.Collections.UserCollection(),

		render : function(){		
			$(this.el).html(this.template());				
			editBody = this.$el.find("#reviewBody")
			this.collection.fetch({
				success : function(model, response){
					console.log(response)
					$.each(response.edituser, function(index, data){
						$(userBody).append(new UTT.Views.EditProfile({model:data}).el);
					})
				},
				error: function(model, response){
					console.log(response);
				}
			});
			return this;
		},

		events : {			
			"submit #user-form"	: "editBody"			
		},

		editBody : function(){
			var data =  this.getFormData(),
			that = this,
			user = new UTT.Models.UserModel();
			console.log(data);
			if(!_.isEmpty(data)){
				user.save(data,{
					success:function(model, response){							
						that.collection.add(response);
					  	that.render();
					},
					error : function(model, response){						
						window.aelrt("Error Processing")								
					}
				});	
			}else{
				window.alert("Empty form");
			}
			return false;
		},

		getFormData : function(){			
			var data = {},
			form = this.$el.find("#edit-form"),
			viewArr = form.serializeArray(),
			valid = true;			

			$.each(viewArr, function(i,d){
				data[viewArr[i].name] = viewArr[i].value;
				if(viewArr[i].value === "") valid = false;
			});		
			if(valid){
				return data;
			}else{
				return {};
			}
		}

	});

	UTT.Views.Restaurant = Backbone.View.extend({

		className : "row restaurantBody",

		initialize : function(){
			this.render();
		},

		render : function(){		
			$(this.el).html(this.template(this.model));	
			return this;
		}

	});
UTT.Views.UserNames = Backbone.View.extend({

		className : "row userBody",

		initialize : function(){
			this.render();
		},

		render : function(){		
			$(this.el).html(this.template(this.model));	
			return this;
		}

	});
	UTT.Views.EditProfile = Backbone.View.extend({

		className : "row editBody",

		initialize : function(){
			this.render();
		},

		render : function(){		
			$(this.el).html(this.template(this.model));	
			return this;
		}

	});


	
}(document, this, jQuery, Backbone, _));