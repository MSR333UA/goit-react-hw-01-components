import PropTypes from 'prop-types'
import cs from './TransactionHistory.module.css'

export default function TransactionHistory({items}) {
    return (
        <table className={cs.transactionHistory}>
            <thead className={cs.thead}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody className={cs.tbody}>
                {items.map(({id, type, amount, currency }) => (
                    <tr className={cs.tr} key={id}>
                        <td className={cs.td}>{type}</td>
                        <td className={cs.td}>{amount}</td>
                        <td className={cs.td}>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired,
    ),
};