import React, { useEffect, useState } from 'react';
import { Button, Col, FormGroup, Input, InputGroup, Row, Spinner } from 'reactstrap';
import image from '../placeholder/image.jpg'
import image2 from '../placeholder/image2.jpg'
import image3 from '../placeholder/image3.jpg'
import text from '../datasource/rawdata.txt'
import '../css/main.css';

// Components (Spring Based for Nice Appearances)
import Gallery from './Gallery'
import TextBlock from './TextBlock'
import Loader from './Loader'

const App = () => {

  const [initialized, setInitialized] = useState<boolean>(false)

  const [showInterim, setShowInterim] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [stepData, setStepData] = useState<any[]>()
  const [next, setNext] = useState<string[]>();
  const [stepCount, setStepCounter] = useState<number>(0)

  let testImages = [
    image,
    image2,
    image3
  ]

  const [imageSource, setImageSource] = useState<string[]>(testImages);
  const [textQueue, setTextQueue] = useState<string>('There is nothing in the queue...');
  const [textBlock, setTextBlock] = useState<string>('Welcome to the Scavenger Hunt, click continue to Start!');

  /* Run Once Initialization */
  useEffect(() => {
    if(!initialized) {
      setInitialized(true)
      var data = Loader(text)
      setStepData(data)
      setIsLoading(false)
      console.log('The hook has run!')
    }
  }, [initialized]);

  const clickContinue = () => {
    setTextBlock(textQueue); //Set text to be the next prompt
    setShowInterim(false); //Hide interim logic

  }

  const checkAnswer = (text : string) => {

  }


  return (
    <div className="d-flex align-items-center min-vh-100">
      <div className="container">
        <Row>
          <Col className='m-4' id='imageBox'>
            { Gallery(imageSource) }
          </Col>
          <Col className='m-4' id='textBox'>
              { TextBlock(textBlock) }
          </Col>
        </Row>
        {
          isLoading ? (<div className='d-flex justify-content-center'><Spinner>Loading...</Spinner></div>) :
            showInterim ? (
              <Row>
                <div className="d-flex justify-content-center"><Button className ='continueButton dropShadowBtn' onClick={ ()=> clickContinue()}>Continue</Button></div>
              </Row>
            ) : (
              <Row>
                <div className='d-flex justify-content-center'>
                  <FormGroup>
                    <InputGroup className="continueButton">
                    <Input
                      id="inputPassword"
                      name="password"
                      placeholder="answer"
                      type="password"
                    />
                    <Button>{'>'}</Button></InputGroup>
                  </FormGroup>
                </div>
              </Row>
            )
        }

      </div>
    </div>
  );
}

export default App;
