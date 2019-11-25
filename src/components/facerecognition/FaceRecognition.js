import React, { Component } from 'react'

export default class FaceRecognition extends Component {

    render() {
        return(
            <div className='center ma'>
                <div className="mt4">
                    <img alt='' src={this.props.imageUrl} width="500px" height="auto"></img>
                </div>
            </div>
        )
    }
}