import { Component } from 'react';

export default class CCQuestion01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'white',
    };
  }

  changeBackgroundColor = (color) => {
    this.setState({ backgroundColor: color });
  };

  render() {
    const colors = [
      '#FFB3BA',
      '#FFDFBA', 
      '#FFFFBA', 
      '#BAFFC9', 
      '#BAE1FF',
      '#D5BAFF',
      '#FFC7BA', 
      '#FFABE1', 
    ];

    return (
      <div
        style={{
          backgroundColor: this.state.backgroundColor,
          padding: '20px',
          textAlign: 'center',
          minHeight: '200px',
          border: '1px solid #ddd',
          color:'gray'
        }}
      >
        <h3>Question 1- Click a button to change the background color</h3>
        {colors.map((color, index) => (
          <button
            key={index} 
            onClick={() => this.changeBackgroundColor(color)} 
            style={{
              margin: '5px',
              padding: '10px 20px',
              backgroundColor: color,
              border: 'none',
              cursor: 'pointer',
              borderRadius: '10px',
              outline: 'none',
              color:'gray'


            }}
          >
            {color}
          </button>
        ))}
      </div>
    );
  }
}
