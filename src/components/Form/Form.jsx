import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

export class Form extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    name: PropTypes.string,
    number: PropTypes.number,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  onSubmit = event => {
    event.preventDefault();

    const { handleSubmit } = this.props;

    const contact = {
      name: this.state.name,
      id: nanoid(),
      number: this.state.number,
    };

    handleSubmit(contact);
  };

  render() {
    const { name } = this.props;

    return (
      <>
        <form className={styles.form} onSubmit={this.onSubmit}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChange}
            value={name}
            className={styles.input}
            required
          />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleChange}
            value={this.state.number}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}

// --------------------------------------Clear code up------------------------------
// --------------------------------------Uncomment one side-------------------------
// --------------------------------------Code with coments under and tests----------

// import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

// // import { Notify } from 'notiflix';
// // import { DebounceInput } from 'react-debounce-input';

// export class Form extends Component {
//   static propTypes = {
//     handleSubmit: PropTypes.func.isRequired,
//     name: PropTypes.string,
//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   // Function to catch every change
//   handleChange = event => {
//     // console.log(event.target.value);
//     const { name, value } = event.target;
//     // console.log(event.target.value);
//     // console.log(event.target.name);

//     this.setState({
//       [name]: value,
//     });
//   };

//   // Function to submit change to storage
//   onSubmit = event => {
//     event.preventDefault();
//     // console.log(event);

//     const { handleSubmit } = this.props;

//     // console.log(this.state);

//     const contact = {
//       name: this.state.name,
//       id: nanoid(),
//       number: this.state.number,
//     };

//     handleSubmit(contact);
//   };

//   render() {
//     const { name } = this.props;

//     // const { name, contacts } = this.props;
//     // console.log(contacts);

//     // contacts.forEach(contact => {
//     //   // console.log(contact.name);
//     //   // console.log(this.state.name);
//     //   if (this.state.name) {
//     //     if (
//     //       contact.name.toLowerCase() === this.state.name.toLowerCase() &&
//     //       contact.number !== this.state.number
//     //     ) {
//     //       Notify.failure(
//     //         `Contact "${contact.name}" is found but number is not.`
//     //       );
//     //     } else if (
//     //       contact.name.toLowerCase() === this.state.name.toLowerCase() &&
//     //       contact.number !== this.state.number
//     //     ) {
//     //       Notify.failure(`Contact with number "${contact.number}" is in book.`);
//     //     } else if (
//     //       contact.name.toLowerCase() === this.state.name.toLowerCase() &&
//     //       contact.number === this.state.number
//     //     ) {
//     //       Notify.success(`Contact "${contact.name}" is in book.`);
//     //     }
//     //   } else if (!this.state.name) {
//     //     Notify.info(`Please enter name`);
//     //   }
//     // });

//     return (
//       <>
//         <form className={styles.form}>
//           {/* <DebounceInput
//             debounceTimeout={300} */}

//           <input
// className={styles.input}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             onChange={this.handleChange}
//             value={name}
//             required
//           />
//           {/* <DebounceInput
//             debounceTimeout={300} */}
//           <input
//             type="num"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             onChange={this.handleChange}
//             value={this.state.number}
// className={styles.input}
//             required
//           />
//           <button type="submit" onClick={this.onSubmit} className={styles.button}>
//             Add contact
//           </button>
//         </form>
//       </>
//     );
//   }
// }
