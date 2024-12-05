import { Component } from "react";

export default class CCQuestion02 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: "",
      firstName: "",
      psychometricScore: "",
      lastNameMessage: "",
      firstNameMessage: "",
      psychometricScoreMessage: "",
      psychometricResultMessage: "",
    };
  }

  handleFocus = (field) => {
    this.setState({
      [`${field}Message`]: `Please fill in your ${
        field === "lastName"
          ? "last name"
          : field === "firstName"
          ? "first name"
          : "psychometric score"
      }`,
    });
  };

  handleBlur = (field) => {
    this.setState({ [`${field}Message`]: "" });

    if (field === "psychometricScore") {
      const score = parseInt(this.state.psychometricScore, 10);
      if (!isNaN(score)) {
        if (score > 555) {
          this.setState({
            psychometricResultMessage: "You are eligible for admission.",
          });
        } else {
          this.setState({
            psychometricResultMessage: "You should try again next year.",
          });
        }
      } else {
        this.setState({
          psychometricResultMessage: "",
        });
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
          backgroundColor: "white",
          padding: "20px",
          textAlign: "center",
          minHeight: "200px",
          border: "1px solid #ddd",
          color: "gray",
        }}
      >
        <h3>Question 2 - Fill out a form</h3>
        <form>
          <div>
            {this.state.lastNameMessage && (
              <p style={{ color: "red" }}>{this.state.lastNameMessage}</p>
            )}
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onFocus={() => this.handleFocus("lastName")}
              onBlur={() => this.handleBlur("lastName")}
              onChange={this.handleChange}
              style={{ margin: "10px" }}
              placeholder="Last Name"
            />
            <label>Enter your last name</label>
          </div>

          <div>
            {this.state.firstNameMessage && (
              <p style={{ color: "red" }}>{this.state.firstNameMessage}</p>
            )}
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onFocus={() => this.handleFocus("firstName")}
              onBlur={() => this.handleBlur("firstName")}
              onChange={this.handleChange}
              style={{ margin: "10px" }}
              placeholder="First Name"
            />
            <label>Enter your first name</label>
          </div>

          <div>
            {this.state.psychometricScoreMessage && (
              <p style={{ color: "red" }}>
                {this.state.psychometricScoreMessage}
              </p>
            )}
            <input
              type="text"
              name="psychometricScore"
              value={this.state.psychometricScore}
              onFocus={() => this.handleFocus("psychometricScore")}
              onBlur={() => this.handleBlur("psychometricScore")}
              onChange={this.handleChange}
              style={{ margin: "10px" }}
              placeholder="Psychometric Score"
            />
            <label>Enter your psychometric score</label>
          </div>
        </form>
        {/* Bolded message at the bottom for grade check */}
        {this.state.psychometricResultMessage && (
          <p style={{ marginTop: "20px", fontWeight: "bold" }}>
            {this.state.psychometricResultMessage}
          </p>
        )}
      </div>
    );
  }
}
