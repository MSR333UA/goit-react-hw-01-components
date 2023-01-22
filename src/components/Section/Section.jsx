import PropTypes from 'prop-types';
import style from './Section.module.css';

export const Section = ({ children, title }) => {
  return (
    <section className={style.section__stats}>
      {title && <h2 className={style.title}>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
