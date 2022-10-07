import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

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
        <Section title='Please leave feedback'>
        <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.onLeaveFeedback}
        />
        </Section>
        <Section title='Statistics'>
        <Statistics
          good={this.good}
          neutral={this.neutral}
          bad={this.bad}
          // total={ }
          // positivePercentage={ }
          ></Statistics>
          </Section>
      </>
    )
  }
};
