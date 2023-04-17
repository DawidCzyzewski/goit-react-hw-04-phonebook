import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Contacts.module.css';

export class Contacts extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    remove: PropTypes.func,
    filter: PropTypes.string,
  };

  render() {
    const { contacts, remove, filter } = this.props;

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
  }
}

// --------------------------------------Clear code up------------------------------
// --------------------------------------Uncomment one side-------------------------
// --------------------------------------Code with coments under and tests----------

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
//     // console.log(this.props);
//     const { contacts, remove, filter } = this.props;

//     // return (
//     //   <>
//     //     <ul className={styles.listContainer}>
//     //       {contacts.forEach(({ number, name, id }) => {
//     //         if (name.toLowerCase().includes(filter.toLowerCase())) {
//     //           return (
//     //             <li className={styles.listElement}
//     //               key={id}>
//     //                 {name}: {number}
//     //               </key=>
//     //               <button className={styles.button}
//     //                 key={id}
//     //                 type="button"
//     //                 onClick={() => {
//     //                   //   console.log(contact.id);
//     //                   remove(id);
//     //                 }}
//     //               >
//     //                 Delete contact
//     //               </button>
//     //             </li>
//     //           );
//     //         }
//     //       })}
//     //     </ul>
//     //   </>
//     // );

//     return (
//       <>
//         <ul>
//           {contacts.map(({ number, name, id }) =>
//             name.toLowerCase().includes(filter.toLowerCase()) ? (
//               <li key={id}>
//                 {name}: {number}
//                 <button
//                   key={id}
//                   type="button"
//                   onClick={() => {
//                     console.log('Contacts, id: ', id);
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
