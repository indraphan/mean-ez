'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var ContactModel = mongoose.model('Contact');

exports.index = function (req, res){  
    return ContactModel.find(function (err, contacts) {
        if (!err) {
          res.jsonp(contacts);
        } else {
          console.log(err);
        }
    });
};

exports.addContact = function (req, res) {  
    var contact;
    contact = new ContactModel({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        skype: req.body.skype,
    });

    contact.save(function (err) {
      if (!err) {
        console.log('created');
        res.json(true);
      } else {
        console.log(err);
        res.json(false);
      }
    });

    return res.jsonp(req.body);
    // return res.send(contact);
};

exports.findById = function (req, res) {  
    return ContactModel.findById(req.params.id, function (err, contact) {
      if (!err) {
        res.jsonp(contact);
      } else {
        console.log(err);
      }
    });
};

exports.updateContact = function (req, res) {  
  return ContactModel.findById(req.params.id, function (err, contact) {
    contact.name = req.body.name;
    contact.phone = req.body.phone;
    contact.email = req.body.email;
    contact.facebook = req.body.facebook;
    contact.twitter = req.body.twitter;
    contact.skype = req.body.skype;
    
    contact.save(function (err) {
      if (!err) {
        console.log('updated');
        res.json(true);
      } else {
        console.log(err);
        res.json(false);
      }
      //res.send(contact);
    });
  });
};

exports.deleteContact = function (req, res){  
  return ContactModel.findById(req.params.id, function (err, contact) {
    return contact.remove(function (err) {
      if (!err) {
        console.log('removed');
        res.json(true);
        // return res.send('');
      } else {
        console.log(err);
        res.json(false);
      }
    });
  });
};
