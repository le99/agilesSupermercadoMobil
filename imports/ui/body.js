import { Meteor } from 'meteor/meteor';

import { Template } from 'meteor/templating';

import { ZonasInseguras } from '../api/zonasinseguras.js';

import './body.html';


// Cron
// Meteor.setInterval(function(){
//   ZonasInseguras.update({row:0, col:0}, {risk:'high'}, {upsert:'true'});
// }, 1000*5);

Template.body.helpers({
  zonasInseguras() {

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

    let y = ZonasInseguras.find({}).fetch();
    console.log(y);
    let x = [
      {row:1, col:0, risk:'low'},
      {row:0, col:0, risk:'very-high'},
      {row:0, col:1, risk:'high'},
      {row:0, col:2, risk:'med'},

      {row:1, col:1, risk:'low'},
      {row:1, col:2, risk:'low'},
      ];

    let groups = _.groupBy(y, function(elem){
      return elem.row;
    });
    console.log("Groups: " + groups);
    groups = _.map(groups, function(elem, key){
      let row = _.map(elem, function(e){
        e.risk_low = (e.risk === 'low');
        e.risk_med = (e.risk === 'med');
        e.risk_high = (e.risk === 'high');
        e.risk_very_high = (e.risk === 'very-high');
        return e;
      });

      row = _.sortBy(row, function(e){
        return e.col;
      });
      return row;
    });
    groups = _.sortBy(groups, function(elem){
      return elem.row;
    });
    console.log(groups);
    // console.log("Y: " + y);
    return groups;
 },

});
