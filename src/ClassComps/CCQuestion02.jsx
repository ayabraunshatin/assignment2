import { Component } from 'react';

export default class CCQuestion02 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: '',
      firstName: '',
      psychometricScore: '',
      lastNameMessage: '',
      firstNameMessage: '',
      psychometricMessage: '',
    };
  }

  handleFocus = (field) => {
    this.setState({ [`${field}Message`]: `Please fill in your ${field === 'lastName' ? 'last name' : field === 'firstName' ? 'first name' : 'psychometric score'}` });
  };

  handleBlur = (field) => {
    this.setState({ [`${field}Message`]: '' });

    if (field === 'psychometricScore') {
      if (parseInt(this.state.psychometricScore) > 555) {
        this.setState({ psychometricMessage: 'You are eligible for admission.' });
      } else {
        this.setState({ psychometricMessage: 'You should try again next year.' });
      }
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          textAlign: 'center',
          minHeight: '200px',
          border: '1px solid #ddd',
          color: 'gray',
        }}
      >
        <h3>Question 2- Fill out a form</h3>
        <form>
          <div>
            <label>Last name</label>
            {this.state.lastNameMessage && <p style={{ color: 'red' }}>{this.state.lastNameMessage}</p>}
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onFocus={() => this.handleFocus('lastName')}
              onBlur={() => this.handleBlur('lastName')}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>First name</label>
            {this.state.firstNameMessage && <p style={{ color: 'red' }}>{this.state.firstNameMessage}</p>}
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onFocus={() => this.handleFocus('firstName')}
              onBlur={() => this.handleBlur('firstName')}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Psychometric Score</label>
            {this.state.psychometricMessage && <p>{this.state.psychometricMessage}</p>}
            <input
              type="text"
              name="psychometricScore"
              value={this.state.psychometricScore}
              onFocus={() => this.handleFocus('psychometricScore')}
              onBlur={() => this.handleBlur('psychometricScore')}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
