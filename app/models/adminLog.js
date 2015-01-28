var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdminLogSchema = new Schema({
  admin: {type: Schema.ObjectId, ref: 'Admin'},
  user: {type: Schema.ObjectId, ref: 'User'},
  action: {type: String, default: '', trim: true},
  message: {type: String, default: '', trim: true},
  createdAt: {type: Date, default: Date.now}
});

mongoose.model('AdminLog', AdminLogSchema);