import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  onLeaveFeedback = event => {
    this.setState(prevState => {
      return {
        [event.target.name]: prevState[event.target.name] + 1
      };
    });
    };

  countTotalFeedback = () => {
    return Number(this.state.good + this.state.neutral + this.state.bad);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((Number(this.state.good) / this.countTotalFeedback()) * 100);
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

        {this.countTotalFeedback() ? (
        <Section title='Statistics'>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics> 
          </Section>) : (
          <Notification message="There is no feedback" />
          )
        }
      </>
    )
  }
};
