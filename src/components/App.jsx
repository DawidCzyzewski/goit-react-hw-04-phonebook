import React, { useState, useEffect } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { Notify } from 'notiflix';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    try {
      const contacts = JSON.parse(localStorage.getItem('contacts'));
      if (contacts) {
        setContacts(contacts);
      }
    } catch (error) {
      console.log('Houston! We have a problem with mounting: ', error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } catch (error) {
      console.log('This is problem with add to localstorage: ', error);
    }
  }, [contacts]);

  const handleSubmit = contact => {
    const { id, name, number } = contact;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notify.failure(`Name ${contact.name} is in book.`);
      return;
    } else {
      setContacts(prevContacts => [
        ...prevContacts,
        { id: id, name: name, number: number },
      ]);
    }
  };

  const handleFilterChange = elem => setFilter(elem);

  const handleDelete = obj => {
    const objectToDelete = contacts.find(({ id }) => id === obj).name;
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== obj)
    );
    Notify.success(`Contact "${objectToDelete}" was deleted.`);
  };

  return (
    <>
      <Section title="Add contact">
        <Form contacts={contacts} handleSubmit={handleSubmit} />
      </Section>
      <Section title="Address book">
        <Filter onChange={handleFilterChange} />
        <Contacts contacts={contacts} filter={filter} remove={handleDelete} />
      </Section>
    </>
  );
};

// -------------------------func component code-----------------------------------------
// -------------------------UNCOMMENT ABROVE OR UNDER--------------------------
// -------------------------class component code-------------------------------------

// import { Component } from 'react';
// import { Section } from './Section/Section';
// import { Form } from './Form/Form';
// import { Filter } from './Filter/Filter';
// import { Contacts } from './Contacts/Contacts';
// import { Notify } from 'notiflix';

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   addContactsToStorage = contact => {
//     try {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     } catch (error) {
//       console.log('This is problem with add to localstorage: ', error);
//     }
//   };

//   handleSubmit = contact => {
//     const { id, name, number } = contact;
//     if (
//       this.state.contacts.find(
//         contact => contact.name.toLowerCase() === name.toLowerCase()
//       )
//     ) {
//       Notify.failure(`Name ${contact.name} is in book.`);
//       return;
//     } else {
//       this.setState(prevState => ({
//         contacts: [
//           ...prevState.contacts,
//           { id: id, name: name, number: number },
//         ],
//       }));
//     }
//   };

//   filterSearch = elem => this.setState({ filter: elem });

//   deleteObj = obj => {
//     const objectToDelete = this.state.contacts.find(
//       ({ id }) => id === obj
//     ).name;
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== obj),
//     }));
//     Notify.success(`Contact "${objectToDelete}" was deleted.`);
//   };

//   componentDidMount() {
//     try {
//       const contacts = JSON.parse(localStorage.getItem('contacts'));
//       if (contacts) {
//         this.setState({
//           contacts: contacts,
//         });
//       }
//     } catch (error) {
//       console.log('Houston! We have a problem with mounting: ', error);
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts.length !== this.state.contacts.length) {
//       this.addContactsToStorage();
//     }
//   }

//   render() {
//     const { contacts, filter } = this.state;

//     return (
//       <>
//         <Section title="Add contact">
//           <Form contacts={contacts} handleSubmit={this.handleSubmit}></Form>
//         </Section>
//         <Section title="Address book">
//           <Filter onChange={this.filterSearch}></Filter>
//           <Contacts
//             contacts={contacts}
//             filter={filter}
//             remove={this.deleteObj}
//           ></Contacts>
//         </Section>
//       </>
//     );
//   }
// }
