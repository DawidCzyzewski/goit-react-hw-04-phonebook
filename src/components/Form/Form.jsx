import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

export const Form = ({ handleSubmit, name, number }) => {
  const [formData, setFormData] = useState({
    name: name || '',
    number: number || '',
  });

  const handleChange = event => {
    const { name, value } = event.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = event => {
    event.preventDefault();

    const contact = {
      name: formData.name,
      id: nanoid(),
      number: formData.number,
    };

    handleSubmit(contact);
    setFormData({
      name: '',
      number: '',
    });
  };

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          value={formData.name}
          className={styles.input}
          required
        />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          value={formData.number}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    </>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string,
  number: PropTypes.number,
};

// -------------------------func component code-----------------------------------------
// -------------------------UNCOMMENT ABROVE OR UNDER--------------------------
// -------------------------class component code-------------------------------------

// import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
// import styles from './Form.module.css';

// export class Form extends Component {
//   static propTypes = {
//     handleSubmit: PropTypes.func.isRequired,
//     name: PropTypes.string,
//     number: PropTypes.number,
//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = event => {
//     const { name, value } = event.target;

//     this.setState({
//       [name]: value,
//     });
//   };

//   onSubmit = event => {
//     event.preventDefault();

//     const { handleSubmit } = this.props;

//     const contact = {
//       name: this.state.name,
//       id: nanoid(),
//       number: this.state.number,
//     };

//     handleSubmit(contact);
//   };

//   render() {
//     const { name } = this.props;

//     return (
//       <>
//         <form className={styles.form} onSubmit={this.onSubmit}>
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             onChange={this.handleChange}
//             value={name}
//             className={styles.input}
//             required
//           />
//           <input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             onChange={this.handleChange}
//             value={this.state.number}
//             className={styles.input}
//             required
//           />
//           <button type="submit" className={styles.button}>
//             Add contact
//           </button>
//         </form>
//       </>
//     );
//   }
// }
