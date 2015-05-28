
Unionize = {};
WI = new Mongo.Collection("wi");
W = new Mongo.Collection("w");
log = console.log.bind(console);


Unionize.hooks = {};
Unionize.afterhooks = {};

Unionize.getUTC = function(){
  return TimeSync.serverTime();//new Date().getTime();
}
// Unionize.startApp = new Date().getTime();
var WIDataWithoutID = []
Unionize.journey = function(docs){

    // console.log(WIDataWithoutID.length)
    if(!docs._id){
      var item = docs;
      item.date = Unionize.getUTC()
      // console.log(item)
      WIDataWithoutID.push(item)
    }else{
      var update = {};
      var wicount = WI.find().count()
      if(wicount == 0){
          WI.insert({"_id": Meteor.userId()});
      }
      if( WIDataWithoutID.length > 0 ){
        for (var i = 0; i < WIDataWithoutID.length; i++) {
          // console.log(WIDataWithoutID[i])
          update.journey = {"message": WIDataWithoutID[i].title, "date": WIDataWithoutID[i].date};
          WI.update(docs._id,{$push: update});
        };
        while(WIDataWithoutID.length > 0) { WIDataWithoutID.pop(); }
        return;
      }
      update.journey = {"message": docs.title, "date": Unionize.getUTC()};
      WI.update(docs._id,{$push: update});
    }
  
}

WI.after.update(function(userId, doc, fieldNames, modifier, options){
    console.time('WI.after.update')
    try{
      return doc;
    }
    catch(error){
      console.error(error);
    }
    finally{
      console.timeEnd('WI.after.update')
    }
});


WI.before.update(function(userId, doc, fieldNames, modifier, options){
  // what if outox and feed are updated in the same call? -elias
  try{
    console.time('WI.before.update')
    return doc;
  }
  catch(error){
    console.error(error);
  }
  finally{
    console.timeEnd('WI.before.update')
  }
});