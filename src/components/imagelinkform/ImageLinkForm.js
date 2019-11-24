import React, { Component } from 'react'
import './ImageLinkForm.css'

export default class ImageLinkForm extends Component {

    state = {
        url: '',
      }

    onTextChange = (event) => {
        const previousData = { ...this.state }
        previousData[event.target.name] = event.target.value
        this.setState(previousData)
    }

    render() {
        return (
            <div>
                <div>
                    <p className='f3'>
                        {'This will detect faces in your pictures.'}
                    </p>
                </div>
                <div className='image-recognizer'>
                    <form className='form'>
                        <input className='f4 w-70 center' type='text' placeholder='Image URL' name="url" onChange={this.onTextChange} value={this.state.url}></input>
                        <input className='w-30 grow f4 link ph2 pv1 dib white bg-light-blue' type='submit' value='Recognize'></input>
                    </form>
                </div>
            </div>
        )
    }
}