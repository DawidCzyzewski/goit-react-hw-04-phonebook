import { Component } from 'react';
import PropTypes from 'prop-types';

export class DeleteContact extends Component {
  static propTypes = {
    key: PropTypes.number.isRequired,
    removeItem: PropTypes.func.isRequired,
  };
  render() {
    const { key, removeItem } = this.props;
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
  }
}

// --------------------------------------Clear code up------------------------------
// --------------------------------------Uncomment one side-------------------------
// --------------------------------------Code with coments under and tests----------

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
