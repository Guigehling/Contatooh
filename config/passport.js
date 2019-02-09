var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

module.exports = function () {

    passport.use(
        new GitHubStrategy({
            clientID: '215598211b0cdb87e1e2',
            clientSecret: '6bdc9c06ee8aec9882d559d7250a805a5dd9a6f8',
            callbackURL: 'http://localhost:3000/auth/github/callback'
        }, function (accessToken, refreshToken, profile, done) {

        })
    );

};
