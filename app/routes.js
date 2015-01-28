var houses = require('./controllers/houses');
var users = require('./controllers/users');
var maps = require('./controllers/maps');
var schedules = require('./controllers/schedules');
var devices = require('./controllers/devices');
var admins = require('./controllers/admins');
var usages = require('./controllers/usages');
var adminLogs = require('./controllers/adminLogs');
var complains = require('./controllers/complains');
var notifications = require('./controllers/notifications');

module.exports = function(app) {

    app.param('id', houses.load);
    app.get('/houses', houses.index);
    app.post('/houses', houses.create);
    app.get('/houses/:id', houses.show);
    app.put('/houses/:id', houses.update);
    app.delete('/houses/:id', houses.destroy);

    app.param('id', users.load);
    app.get('/users', users.index);
    app.post('/users', users.create);
    app.get('/users/:id', users.show);
    app.put('/users/:id', users.update);
    app.delete('/users/:id', users.destroy);

    app.param('id', maps.load);
    app.get('/maps', maps.index);
    app.post('/maps', maps.create);
    app.get('/maps/:id', maps.show);
    app.put('/maps/:id', maps.update);
    app.delete('/maps/:id', maps.destroy);

    app.param('id', schedules.load);
    app.get('/schedules', schedules.index);
    app.post('/schedules', schedules.create);
    app.get('/schedules/:id', schedules.show);
    app.put('/schedules/:id', schedules.update);
    app.delete('/schedules/:id', schedules.destroy);

    app.param('id', devices.load);
    app.get('/devices', devices.index);
    app.post('/devices', devices.create);
    app.get('/devices/:id', devices.show);
    app.put('/devices/:id', devices.update);
    app.delete('/devices/:id', devices.destroy);

    app.param('id', admins.load);
    app.get('/admins', admins.index);
    app.post('/admins', admins.create);
    app.get('/admins/:id', admins.show);
    app.put('/admins/:id', admins.update);
    app.delete('/admins/:id', admins.destroy);

    app.param('id', usages.load);
    app.get('/usages', usages.index);
    app.post('/usages', usages.create);
    app.get('/usages/:id', usages.show);
    app.put('/usages/:id', usages.update);
    app.delete('/usages/:id', usages.destroy);

    app.param('id', adminLogs.load);
    app.get('/adminLogs', adminLogs.index);
    app.post('/adminLogs', adminLogs.create);
    app.get('/adminLogs/:id', adminLogs.show);
    app.put('/adminLogs/:id', adminLogs.update);
    app.delete('/adminLogs/:id', adminLogs.destroy);

    app.param('id', complains.load);
    app.get('/complains', complains.index);
    app.post('/complains', complains.create);
    app.get('/complains/:id', complains.show);
    app.put('/complains/:id', complains.update);
    app.delete('/complains/:id', complains.destroy);

    app.param('id', notifications.load);
    app.get('/notifications', notifications.index);
    app.post('/notifications', notifications.create);
    app.get('/notifications/:id', notifications.show);
    app.put('/notifications/:id', notifications.update);
    app.delete('/notifications/:id', notifications.destroy);
};