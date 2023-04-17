import { Component } from 'react';
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export class Filter extends Component {
  static propTypes = {
    onChange: PropTypes.func,
  };

  searchContact = e => {
    this.props.onChange(e.target.value);
  };
  render() {
    return (
      <div className={styles.container}>
        <h3 className={styles.title}>Search in your contacts</h3>
        <DebounceInput
          className={styles.input}
          debounceTimeout={300}
          type="text"
          name="filter"
          title="filter"
          onChange={this.searchContact}
        />
      </div>
    );
  }
}

// --------------------------------------Clear code up------------------------------
// --------------------------------------Uncomment one side-------------------------
// --------------------------------------Code with coments under and tests----------

// import { Component } from 'react';
// import { DebounceInput } from 'react-debounce-input';
// import PropTypes from 'prop-types';

// export class Filter extends Component {
//   static propTypes = {
//     onChange: PropTypes.func,
//   };

//   searchContact = e => {
//     // console.log(e.target.value);
//     this.props.onChange(e.target.value);
//   };
//   render() {
//     return (
//       <>
//         <h3>Search in your contacts</h3>
//         <DebounceInput
//           debounceTimeout={300}
//           type="text"
//           name="filter"
//           title="filter"
//           onChange={this.searchContact}
//         />
//       </>
//     );
//   }
// }
