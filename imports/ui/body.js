import { Meteor } from 'meteor/meteor';

import { Template } from 'meteor/templating';

import { ProductosEnRiesgo } from '../api/productosriesgo.js';

import './body.html';


Template.body.helpers({
  productosEnRiesgo() {

  // ZonasInseguras.update({row:0, col:0}, {risk:'high'}, {upsert:'true'});
  // let w = ZonasInseguras.findOne({row:0, col:0});
  // console.log("W: " + w);
  // if(!w){
  //   ZonasInseguras.insert({row:0, col:0, risk:'low'});
  // }
  // ZonasInseguras.update(w._id, { $set:{risk:'high'}}, {upsert:'true'});

    // ZonasInseguras.insert({row:0, col:0, risk:'low'});
    // let x = [
    //   {row:0, col:0, risk:'very-high'},
    //   {row:0, col:1, risk:'high'},
    //   {row:0, col:2, risk:'med'},
    //
    //   {row:1, col:0, risk:'low'},
    //   {row:1, col:1, risk:'low'},
    //   {row:1, col:2, risk:'low'},
    //   ];

    let y = ProductosEnRiesgo.find({}).fetch();
    console.log(y);
    let x = [
      {id: 3, tipo:'Televisor', valor: 100000, prob_robo:20},
      {id: 1, tipo:'Queso', valor: 10000, prob_robo:90},
      {id: 3, tipo:'Televisor', valor: 100000, prob_robo:30}
      ];

    let groups = _.sortBy(y, function(elem){
      return -elem.prob_robo;
    });
    return groups;
 },

});
