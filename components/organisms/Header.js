import React from 'react';
import SearchBar from '../molecules/SearchBar';
import styles from '../../styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.logo}>Logo</h2>
      <div className={styles.search__bar}>
        <SearchBar styles={styles} />
      </div>
    </div>
  );
};

export default Header;
