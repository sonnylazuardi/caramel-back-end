var mongoose = require('mongoose');
var Device = mongoose.model('Device');
var extend = require('util')._extend;

exports.load = function (req, res, next, id){
  Device.findOne({_id: id}, function (err, device) {
    if (err) return next(err);
    if (!device) return next(new Error('not found'));
    req.device = device;
    next();
  });
};

exports.index = function (req, res){
  Device.find(function (err, devices) {
    res.json(devices);
  });
};

exports.create = function (req, res) {
  var device = new Device(req.body);
  device.validate(function(err) {
    if (err) res.json(err);
    device.save(function (err, device) {
      res.json(device);
    });
  });
};

exports.show = function (req, res) {
  res.json(req.device);
};

exports.update = function (req, res) {
  var device = req.device;

  device = extend(device, req.body);
  device.validate(function(err) {
    if (err) res.json(err);
    device.save(function (err, device) {
      res.json(device);
    });
  });
};

exports.destroy = function (req, res) {
  var device = req.device;

  device.remove(function (err, device) {
    res.json(device);
  });
};