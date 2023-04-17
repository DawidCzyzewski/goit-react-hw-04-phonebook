import PropTypes from 'prop-types';

export const DeleteContact = ({ key, removeItem }) => {
  return (
    <>
      <button
        key={key}
        type="button"
        onClick={() => {
          removeItem(key);
        }}
      >
        Delete contact
      </button>
    </>
  );
};

DeleteContact.propTypes = {
  key: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
};

// -------------------------func component code-----------------------------------------
// -------------------------UNCOMMENT ABROVE OR UNDER--------------------------
// -------------------------class component code-------------------------------------

// import { Component } from 'react';
// import PropTypes from 'prop-types';

// export class DeleteContact extends Component {
//   static propTypes = {
//     key: PropTypes.number.isRequired,
//     removeItem: PropTypes.func.isRequired,
//   };
//   render() {
//     const { key, removeItem } = this.props;
//     console.log('key in DeleteContact: ', key);
//     return (
//       <>
//         <button
//           key={key}
//           type="button"
//           onClick={() => {
//             console.log('key in DeleteContact in return: ', key);
//             removeItem(key);
//           }}
//         >
//           Delete contact
//         </button>
//       </>
//     );
//   }
// }
