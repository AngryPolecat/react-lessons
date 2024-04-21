import PropTypes from 'prop-types';
import styles from './Information.module.css';

export const InformationLayout = ({ children }) => {
  return <div className={styles.info}>{children}</div>;
};

InformationLayout.propTypes = {
  children: PropTypes.string,
};
