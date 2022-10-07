import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({
    good = 0,
    neutral = 0,
    bad = 0,
    total = 0,
    positivePercentage = 0,
}) => {
    return (
        <ul className={css.list}>
            <li className={css.item}>Good: <span className={css.span}>{good}</span></li>
            <li className={css.item}>Neutral: <span className={css.span}>{neutral}</span></li>
            <li className={css.item}>Bed: <span className={css.span}>{bad}</span></li>
            <li className={css.item}>Total: <span className={css.span}>{total}</span></li>
            <li className={css.item}>Positive feedback: <span className={css.span}>{positivePercentage}%</span></li>
        </ul>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}