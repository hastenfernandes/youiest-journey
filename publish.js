Meteor.publish(null,function(){
	return WI.find({"_id": this.userId});
});

// no need to subscribe W object
Meteor.publish(null,function(){
	return W.find({});
});