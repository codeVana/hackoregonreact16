//FILE: root/server/email-config.js

Meteor.startup( function() {
    process.env.MAIL_URL = "smtp://postmaster%40codevana.io:zrs-3X5-fw2-RLH@smtp.mailgun.org:587";
});