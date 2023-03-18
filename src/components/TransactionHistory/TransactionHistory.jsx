import PropTypes from 'prop-types';

import css from './TransactionHistory.module.css';

export function TransactionHistory({ transactions }) {
  return (
  <table className={css.table}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {transactions.map(({id, type, amount, currency}) => {
        return (
          <tr key={id}>
            <td className={css.type}>{type}</td>
            <td className={css.amount}>{amount}</td>
            <td className={css.currency}>{currency}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
  )
}


TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  }))
}