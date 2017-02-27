'use strict';

// import /models/burgers.js
var burger = require('../models/burger.js');

// export module routes
module.exports = function(app) {

  //get route
  app.get('/', function(req, res) {

    //get data
    burger.Burger.findAll().then(function(results) {
      var burgers = [];
      for (var i = 0; i < results.length; i++) { 
        burgers.push(results[i].dataValues);
      };

      //display data
      res.render('index', {burgers: burgers});
    });
  });

  //post route
  app.post('/', function(req, res) {
    burger.Burger.create({
      burger_name: req.body.burger_name
    }).then(function(results) {
      res.redirect('/');
    });
  });

  //put route
  app.put('/', function(req, res) {
    burger.Burger.update({
      devoured: true
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(results) {
      res.redirect('/');
    });
  });
};


