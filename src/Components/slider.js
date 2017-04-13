import React, {Component} from 'react';
import Slider from 'material-ui/Slider';

/**
 * The slider bar can have a set minimum and maximum, and the value can be
 * obtained through the value parameter fired on an onChange event.
 */
export default class MySlider extends Component {


    state = {
        secondSlider: 0,
    };


    handleSecondSlider = (event, value) => {
        this.setState({secondSlider: value});
        this.props.priceFilter(value);
    };

    render() {
        return (
            <div>
                <Slider
                    min={0}
                    max={200}
                    step={25}
                    defaultValue={0}
                    onChange={this.handleSecondSlider}
                />
                <p>
                </p>

            </div>
        );
    }
}

