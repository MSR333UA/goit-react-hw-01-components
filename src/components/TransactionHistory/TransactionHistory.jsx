import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={style.transaction}>
      <thead>
        <tr>
          <th className={style.transaction__item}>Type</th>
          <th className={style.transaction__item}>Amount</th>
          <th className={style.transaction__item}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ amount, currency, id, type }) => (
          <tr className={style.transaction__list} key={id}>
            <td className={style.list}>{type}</td>
            <td className={style.list}>{amount}</td>
            <td className={style.list}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propType = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      amount: PropTypes.number,
      currency: PropTypes.string,
      id: PropTypes.string,
      type: PropTypes.string,
    })
  ).isRequired,
};
