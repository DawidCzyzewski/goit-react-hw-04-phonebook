import PropTypes from 'prop-types';
import styles from './Contacts.module.css';

export const Contacts = ({ contacts, remove, filter }) => {
  return (
    <>
      <ul className={styles.listContainer}>
        {contacts.map(({ number, name, id }) =>
          name.toLowerCase().includes(filter.toLowerCase()) ? (
            <li className={styles.listElement} key={id}>
              {name}: {number}
              <button
                className={styles.button}
                key={id}
                type="button"
                onClick={() => {
                  remove(id);
                }}
              >
                Delete contact
              </button>
            </li>
          ) : null
        )}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
  remove: PropTypes.func,
  filter: PropTypes.string,
};

// -------------------------func component code-----------------------------------------
// -------------------------UNCOMMENT ABROVE OR UNDER--------------------------
// -------------------------class component code-------------------------------------

// import { Component } from 'react';
// import PropTypes from 'prop-types';
// import styles from './Contacts.module.css';

// export class Contacts extends Component {
//   static propTypes = {
//     contacts: PropTypes.array,
//     remove: PropTypes.func,
//     filter: PropTypes.string,
//   };

//   render() {
//     const { contacts, remove, filter } = this.props;

//     return (
//       <>
//         <ul className={styles.listContainer}>
//           {contacts.map(({ number, name, id }) =>
//             name.toLowerCase().includes(filter.toLowerCase()) ? (
//               <li className={styles.listElement} key={id}>
//                 {name}: {number}
//                 <button
//                   className={styles.button}
//                   key={id}
//                   type="button"
//                   onClick={() => {
//                     remove(id);
//                   }}
//                 >
//                   Delete contact
//                 </button>
//               </li>
//             ) : null
//           )}
//         </ul>
//       </>
//     );
//   }
// }
