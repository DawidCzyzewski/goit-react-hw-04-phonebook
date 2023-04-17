import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export const Filter = ({ onChange }) => {
  const searchContact = e => {
    onChange(e.target.value);
  };
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Search in your contacts</h3>
      <DebounceInput
        className={styles.input}
        debounceTimeout={300}
        type="text"
        name="filter"
        title="filter"
        onChange={searchContact}
      />
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};

// -------------------------func component code-----------------------------------------
// -------------------------UNCOMMENT ABROVE OR UNDER--------------------------
// -------------------------class component code-------------------------------------

// import { Component } from 'react';
// import { DebounceInput } from 'react-debounce-input';
// import PropTypes from 'prop-types';
// import styles from './Filter.module.css';

// export class Filter extends Component {
//   static propTypes = {
//     onChange: PropTypes.func,
//   };

//   searchContact = e => {
//     this.props.onChange(e.target.value);
//   };
//   render() {
//     return (
//       <div className={styles.container}>
//         <h3 className={styles.title}>Search in your contacts</h3>
//         <DebounceInput
//           className={styles.input}
//           debounceTimeout={300}
//           type="text"
//           name="filter"
//           title="filter"
//           onChange={this.searchContact}
//         />
//       </div>
//     );
//   }
// }
