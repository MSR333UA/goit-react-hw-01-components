import PropTypes from 'prop-types';
import { Section } from 'components/Section/Section';
import style from './Statistics.module.css';
import { clsx } from 'clsx';

export const Statistics = ({ title, stats }) => {
  // console.log(title);
  return (
    <Section title={title}>
      {/* <h2 className="title">Upload stats</h2> */}
      <ul className={style.stat}>
        {stats.map(el => (
          <li
            className={clsx(style.stat__list, {
              [style.pdf]: el.label === '.pdf',
              [style.mp3]: el.label === '.mp3',
              [style.docx]: el.label === '.docx',
              [style.psd]: el.label === '.psd',
            })}
            key={el.id}
          >
            <span className="label">{el.label}</span>
            <span className="percentage">{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  //stats: PropTypes.array.isRequired // якщо МАСИВ
  // stats: PropTypes.arrayOf(PropTypes.object).isRequired // якщо ОБ'ЄКТ
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired, //якщо ВКЛАДЕНИЙ ОБ'ЄКТ
};
