import * as React from 'react';


export const EmailTemplate = ({
  firstname,
  lastname,
  email,
  phonenumber,
  message
}) => (
  <div>
    <h1>Name, {firstname} {lastname}!</h1>
    <h1>Email, {email}!</h1>
    <h1>Phone Number, {phonenumber}!</h1>
    <h1>message, {message}!</h1>
  </div>
);
