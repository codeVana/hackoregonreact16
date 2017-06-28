import { Email } from 'meteor/email'; //import the meteor email package
import { Meteor } from 'meteor/meteor'; //import the Meteor object

import GetContactEmail from '/server/email-template'; // new line: import our GetContactEmail function


Meteor.methods({ //setup our Method block

// add our first method, which takes a function
 sendContactMail: function(toEmail, name){
    check(toEmail, String);
    check(name, String);
   console.log("sending email");
   console.log(GetContactEmail);
   let html = GetContactEmail.GetContactEmail();
   // call the Email.send method inside of our sendContactMail Meteor.method
   Email.send({
      to: toEmail,
      from: "rememeder@codevana.io",
      subject: "ReMEMEder",
      html: html // new line: call GetContactEmail() and store restul in template constant variable
    });

  }

});
