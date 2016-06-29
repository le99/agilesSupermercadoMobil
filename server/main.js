import { Meteor } from 'meteor/meteor';
import { ZonasInseguras } from '../imports/api/zonasinseguras.js';



const fillWithRandomData = function(){
  const n_rows = 10;
  const n_cols = 8;

  for(let r = 0 ; r < n_rows; r++){
    for(let c = 0 ; c < n_cols; c++){

      let rand = Math.random();
      let randRisk;
      if(rand < 0.5){
        randRisk = 'low';
      }
      else if(rand < 0.75){
        randRisk = 'med';
      }
      else if(rand < 0.90){
        randRisk = 'high';
      }
      else{
        randRisk = 'very-high';
      }
      ZonasInseguras.update({row: r, col: c}, { $set:{risk: randRisk}}, {upsert:'true'});

    }
  }

};

Meteor.startup(() => {
  // code to run on server at startup
  fillWithRandomData();
});

// Cron
Meteor.setInterval(function(){
  // ZonasInseguras.update({row:0, col:0}, { $set:{risk:'high'}}, {upsert:'true'});
  fillWithRandomData();
  console.log("Update data");

}, 1000*5);
