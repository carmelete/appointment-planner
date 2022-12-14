import React, { useEffect, useState } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicates, setDuplicates] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if(!duplicates) {
    addContact(name, phone, email);
    setName('');
    setPhone('');
    setEmail('');
   }
  };

  /*
  Using hooks, check for contact name in the
  contacts array variable in props
  */
  useEffect(() => {
    const nameIsDuplicate = () => {
      const found = contacts.find((contact) => contact.name === name);
      if (found !== undefined) {
        return true;
      }
      return false;
    };

    if (nameIsDuplicate()) {
      setDuplicates(true);
    } else {
      setDuplicates(false);
    }
  }, [name, contacts, duplicates]);


  return (
    <div>
      <section>
        <h2>
          Add Contact
          {duplicates ? " - Name Already Exists" : ""}
        </h2>
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
