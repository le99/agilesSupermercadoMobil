import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
  zonasInseguras() {
    // let x = [
    //   {row:0, col:0, risk:'very-high'},
    //   {row:0, col:1, risk:'high'},
    //   {row:0, col:2, risk:'med'},
    //
    //   {row:1, col:0, risk:'low'},
    //   {row:1, col:1, risk:'low'},
    //   {row:1, col:2, risk:'low'},
    //   ];

    let x = [
      {row:1, col:0, risk:'low'},
      {row:0, col:0, risk:'very-high'},
      {row:0, col:1, risk:'high'},
      {row:0, col:2, risk:'med'},

      {row:1, col:1, risk:'low'},
      {row:1, col:2, risk:'low'},
      ];

    let groups = _.groupBy(x, function(elem){
      return elem.row;
    });
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
    return groups;
 },

});
