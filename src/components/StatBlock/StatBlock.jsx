import PropTypes from 'prop-types';

import css from './StatBlock.module.css';


export const StatBlock = ({label, percentage}) => {
  return (
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};


StatBlock.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}