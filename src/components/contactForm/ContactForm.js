import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit} >
      <label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder='Contact Name'
        />
      </label>
      <br />
      <label>
        <input
          type='tel'
          name='phone'
          value={phone}
          placeholder='Contact Phone (###-###-###)'
          onChange={(e) => setPhone(e.target.value)}
          pattern="^\+?(6\d{2}|7[1-9]\d{1})\d{6}$"
          required
        />
      </label>
      <br />
      <label>
        <input
          type='email'
          name='email'
          value={email}
          placeholder='Contact Email'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <input type='submit' value='Add Contact' />
    </form>
  );
};
