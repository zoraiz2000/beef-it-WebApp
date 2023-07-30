import React from 'react';
import styles from './filterNav.module.css';
import * as data from './links.json';
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
  label: string;
  href: string;
};

const FilterNav: React.FC = () => {
  return (
    <nav className={styles.filternavbar}>
      <div className={styles['logo-container']}>MUSCLE</div>
      <div className={styles['links-container']}>
        {links.map((link: Link) => {
          return (
            <div key={link.href} className={styles['links']}>
              <a href={link.href} className={styles['individual-links']}>
                {link.label}
              </a>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default FilterNav;
