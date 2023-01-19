import PropTypes from 'prop-types'
import cs from './Statistics.module.css'




export default function Statistics ({ title, stats}) {
    return (
        <section className={cs.statistics}>
            {title && <h2 className={cs.title}>{title}</h2>}

            <ul className={cs.statList}>
                {stats.map(({id,label,percentage}) => (
                    <li className={cs.item} key={id}>
                        <span className={cs.label}>{label}</span>
                        <span className={cs.percentage}>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })),
}