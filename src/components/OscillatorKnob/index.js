import React, { Component } from 'react';
import KnobComp from 'react-canvas-knob';

class Knob extends Component {
  constructor(props) {
    super(props);
    this.state = {
			value: this.props.patchState
		};
		this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (newValue) => {
		this.props.sendDispatch(this.props.type, this.props.property, newValue, this.props.id);
    this.setState({
			value: newValue
		});
  };

  handleChangeEnd(event) {
  };

  render() {
    return (
      <KnobComp
        value={this.state.value}
        onChange={this.handleChange}
        onChangeEnd={this.handleChangeEnd}
        thickness={0.5}
        width={50}
        height={50}
        stopper={true}
        angleArc={270}
        angleOffset={-135}
        disableMouseWheel={true}
        fgColor="#94E4C2"
        bgColor=""
        inputColor="#94E4C2"
        min={this.props.min}
        max={this.props.max}
        step={this.props.step}
      />
    );
  }
}

export default Knob;
