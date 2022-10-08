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
    const { good, neutral, bad } = this.state;
    return Number(good + neutral + bad);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((Number(this.state.good) / this.countTotalFeedback()) * 100);
  };
  
  render() {
   
    const { state, onLeaveFeedback, countTotalFeedback, countPositiveFeedbackPercentage } = this;
    const { good, neutral, bad } = state;
    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();
    
    return (
      <>
        <Section title='Please leave feedback'>
        <FeedbackOptions
              options={state}
              onLeaveFeedback={onLeaveFeedback}
        />
        </Section>

        {positivePercentage ? (
        <Section title='Statistics'>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
          ></Statistics> 
          </Section>) : (
          <Notification message="There is no feedback" />
          )
        }
      </>
    )
  }
};
