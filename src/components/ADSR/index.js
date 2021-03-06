import React, { Component } from 'react';
import Knob from '../Knob';
import './ADSR.css';

class ADSR extends Component {
	render() {
		return(
			<div>
				<h4>VOLUME ENVELOPE</h4>
				<div className="adsr-grid">
					<div className="controller">
						<Knob
							patchState={this.props.patch.adsr.attack}
							sendDispatch={this.props.sendDispatch}
							type="adsr"
							property="attack"
							min={0}
							max={3000}
							step={10}
							/>
						<label htmlFor="adsr-control">ATTACK</label>
					</div>

					<div className="controller">
						<Knob
							patchState={this.props.patch.adsr.decay}
							sendDispatch={this.props.sendDispatch}
							type="adsr"
							property="decay"
							min={0}
							max={1000}
							step={0.1}
							/>
						<label htmlFor="adsr-control">DECAY</label>
					</div>

					<div className="controller">
						<Knob
							patchState={this.props.patch.adsr.sustain}
							sendDispatch={this.props.sendDispatch}
							type="adsr"
							property="sustain"
							min={0}
							max={1}
							step={0.1}
							/>
						<label htmlFor="adsr-control">SUSTAIN</label>
					</div>

					<div className="controller">
						<Knob
							patchState={this.props.patch.adsr.release}
							sendDispatch={this.props.sendDispatch}
							type="adsr"
							property="release"
							min={0}
							max={3000}
							step={10}
							/>
						<label htmlFor="adsr-control">RELEASE</label>
					</div>
				</div>
				<hr/>
			</div>
		);
	}
}

export default ADSR;
