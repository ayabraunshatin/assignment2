import { Component } from "react";

export default class CCQuestion3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 100,
    };
  }
  shrinkMode = (e) => {
    console.log("Shrink Mode");
    this.setState({ width: 50 });
  };

  fullSizeMode = (e) => {
    console.log("Full Screen Mode");
    this.setState({ width: 100 });
  };
  render() {
    return (
      <div
        style={{
          backgroundColor: "grey",
          borderRadius: 10,
        }}
      >
        <div>
          <h3>
            Question 3 - Click Once For 50% Width, Double Click For 100% Width
          </h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <table
            border={1}
            onClick={this.shrinkMode}
            onDoubleClick={this.fullSizeMode}
            style={{ width: this.state.width + "%" }}
          >
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
