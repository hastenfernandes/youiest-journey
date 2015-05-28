// publication
// Meteor.publish("users",function(userId){
//   return Meteor.users.find(userId);
// });


Meteor.methods({
	"resetWI" : function(){
		console.log("Marks collection removed");
		WI.remove({});	
	}
});