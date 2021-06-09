import React, { Component } from 'react';

export default class Cell extends Component {
    
    state = {
        color: this.props.value
    }
    
    backgroundColorChange = () => {
        this.setState({ color: '#333' })
    }

    render() {
        // console.log(this.props.value)
        return <div className='cell' style={{backgroundColor: this.state.color}} onClick={this.backgroundColorChange}></div>
    }
}