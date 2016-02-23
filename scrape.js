var _ = require('lodash');
var fbSleep = require('fb-sleep');
var userService = require('./src/server/services/user');
var TEN_MINUTES = 1000 * 60 * 10;

function getRandomDelay() {
    var delay = _.random(TEN_MINUTES * 0.9, TEN_MINUTES);
    return delay;
}

function getAndSaveUsers(config, since) {
    fbSleep.getRecentlyActiveUsers(config, since)
        .then(function(users) {
            console.log(new Date().toLocaleString(), ' - ', users.length, 'active users');
            return userService.saveUsers(users);
        })
        .catch(function(err) {
            console.error('A error occured while scraping. Please check to make sure your development.json config is correct');
            console.error(new Date().toLocaleString(),
                ' - Could not get users:', err.message, err.statusCode);
        })
        .then(function() {
            var since = Date.now();
            setTimeout(getAndSaveUsers, getRandomDelay(), config, since);
        })
        .done();
}

getAndSaveUsers({c_user: process.env.C_USER, xs: process.env.XS}, Date.now() - TEN_MINUTES);
