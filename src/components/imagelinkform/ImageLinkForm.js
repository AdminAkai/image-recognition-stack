import React, { Component } from 'react'
import FaceRecognition from '../facerecognition/FaceRecognition'
import './ImageLinkForm.css'

const Clarifai = require('clarifai')

const app = new Clarifai.App({
    apiKey: '39944fa1347a4b2bbd081ffed001395f'
   });

export default class ImageLinkForm extends Component {

    state = {
        input: '',
        imageUrl:''
      }

    onTextChange = (event) => {
        const previousData = { ...this.state }
        previousData[event.target.name] = event.target.value
        this.setState(previousData)
    }

    onButtonClick = async (event) => {
        event.preventDefault()
        this.setState({imageUrl: this.state.input}, async () => {
            console.log('click')
            const newDetect = await app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.imageUrl)
            console.log(newDetect.outputs[0].data.regions[0].region_info.bounding_box)
        })
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
                        <input className='f4 w-70 center' type='text' placeholder='Image URL' name="input" onChange={this.onTextChange} value={this.state.url}></input>
                        <input className='w-30 grow f4 link ph2 pv1 dib white bg-light-blue' type='submit' value='Recognize' onClick={this.onButtonClick}></input>
                    </form>
                </div>
                <FaceRecognition imageUrl={this.state.imageUrl}/>
            </div>
        )
    }
}