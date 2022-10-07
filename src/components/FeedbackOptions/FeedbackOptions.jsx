import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <div className={"btn-list"}>
        {Object.keys(options).map((option) => (
            <button 
                key={option}
                className={"btn"}
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
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
