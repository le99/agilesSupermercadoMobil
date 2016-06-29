import { Meteor } from 'meteor/meteor';
import { ProductosEnRiesgo } from '../imports/api/productosriesgo.js';


const fillWithRandomData = function(){
  const n_prod = 10;

  for(let n = 0 ; n < n_prod; n++){
    let rand = Math.random()*100;
    ProductosEnRiesgo.update({id: n, tipo: "Tipo " + n, valor: 1000*(n+1)}, { $set:{prob_robo: rand}}, {upsert:'true'});
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
