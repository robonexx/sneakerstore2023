import styles from './Nav.module.scss';

const Nav = ({ as: Nav = 'nav', children, onClick = () => {} }) => {
  return (
    <Nav onClick={onClick} className={styles.nav}>
      {children}
    </Nav>
  );
};

export default Nav;
