

import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import './validation.js';

let component;

const rememeder = () => {
  const email = document.querySelector('[name="emailAddress"]').value;
  console.log("Email at client is "+email);
  Meteor.call("sendContactMail", email, "CodeVana MeMail");
};

const validate = () => {
  console.log(component.memeForm);
  $(component.memeForm).validate({
    rules: {
      emailAddress: {
        required: true,
        email: true,
      }
    },
    messages: {
      emailAddress: {
        required: 'Need an email address here.',
        email: 'Is this email address legit?',
      },
    },
    submitHandler() { rememeder(); },
  });
};

export default function handleRememeder(options) {
  component = options.component;
  console.log("handleRememeder here")
  validate();
}