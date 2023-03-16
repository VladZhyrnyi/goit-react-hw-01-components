import PropTypes from 'prop-types';
import { StatBlock } from '../StatBlock/StatBlock';

import css from './Statistics.module.css';


export const Statistics = ({title, stats}) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      

      <ul className={css['stat-list']}>
        {stats.map(stat => (
          <StatBlock key={stat.id} label={stat.label} percentage={stat.percentage}/>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }))
}
