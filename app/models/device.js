var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DeviceSchema = new Schema({
  house: {type: Schema.ObjectId, ref: 'House'},
  map: {type: Schema.ObjectId, ref: 'Map'},
  pos_x: {type: Number, default: 0},
  pos_y: {type: Number, default: 0},
  status: {type: Number, default: 0},
  name: {type: String, default: '', trim: true},
  type: {type: String, default: '', trim: true},
  value: {type: Number, default: 0},
  is_failure: {type: Boolean, default: false},
  createdAt: {type: Date, default: Date.now}
});

mongoose.model('Device', DeviceSchema);