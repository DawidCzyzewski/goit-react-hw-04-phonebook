import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

export class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
  };
  render() {
    const { title, children } = this.props;
    // console.log('title, children in Section: ', title, children);
    return (
      <section className={styles.section}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.children}>{children}</div>
      </section>
    );
  }
}
