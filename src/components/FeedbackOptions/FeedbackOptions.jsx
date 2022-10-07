import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <div className={css['btn-list']}>
        {Object.keys(options).map((option) => (
            <button 
                key={option}
                className={css.btn}
                type="button"
                name={option}
                onClick={onLeaveFeedback}>
                {option}
            </button>
        ))}
    </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
