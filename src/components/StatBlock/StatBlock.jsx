import PropTypes from 'prop-types';

import css from './StatBlock.module.css';


export function StatBlock ({label, percentage}) {
  return (
    <div className={css.wrapper}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </div>
  );
};


StatBlock.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}