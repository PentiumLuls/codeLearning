import React from 'react'

export default class SlidersExample extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        slidersLabels: ["A"],
        sumOfCustomWeights: 0,
        slidersWeights: []
      };
    }
    componentDidMount() {
      const slidersLabels = this.state.slidersLabels;
      const slidersWeights = [];
      for (var i = 0; i < slidersLabels.length; ++i)
        slidersWeights[slidersLabels[i]] = 0;
      this.setState({ slidersWeights });
    }
  
    render() {
      return (
        <div>
          {this.generateSliders()}
        </div>
      );
    }
    generateSliders() {
      const slidersLabels = this.state.slidersLabels;
      var sliders = [];
      for (var i = 0; i < slidersLabels.length; ++i) {
        sliders.push(
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <input
              id={slidersLabels[i]}
              type="range"
              defaultValue={this.props.value}
              min="0"
              max="1"
              className="slider"
              onChange={this.handleSliderChange.bind(this)}
              step="0.1"
            />
          </div>
        );
      }
       return sliders;
    }
    handleSliderChange(event) {
      var id = event.target.id;
      var value = event.target.value;
      this.props.change(value);
      const slidersWeights = this.state.slidersWeights;
      slidersWeights[id] = parseInt(value);
      this.setState({ slidersWeights});
    }
  }
  