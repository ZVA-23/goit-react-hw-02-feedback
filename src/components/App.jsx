import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
    onLeaveFeedback = event => {
    this.setState(prevState => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      };
    });
    };
  
  render() {
    return (
      <>
        <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.onLeaveFeedback}
            />
      </>
    )
  }
};
