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

  const [showInterim, setShowInterim] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [stepCount, setStepCount] = useState<number>(0)
  const [hideButtons, setHidebuttons] = useState<boolean>(false)

  let testImages = [
    image,
    image2,
    image3
  ]
  
  const [stepData, setStepData] = useState<{
    prompt: string, 
    images: string[],
    answer: string,
    intermission: string}[]>([])

  const [imageSource, setImageSource] = useState<string[]>(testImages);
  const [imageQueue, setImageQueue] = useState<string[]>([]);
  const [textQueue, setTextQueue] = useState<string>('There is nothing in the queue...');
  const [textBlock, setTextBlock] = useState<string>('Welcome to the Scavenger Hunt, click continue to Start!');

  const [answer, setAnswer] = useState<string>()

  /* Run Once Initialization */
  useEffect(() => {
    if(!initialized) {
      setInitialized(true)
      Loader(text).then( data => {
        setStepData(data)
      })
    }
  }, [initialized]);

  useEffect(() => {
    if(stepData.length !== 0) {
      initialize()
      setIsLoading(false)
    }
  }, [stepData]);

  const timeout = (delay: number) => {
    return new Promise( res => setTimeout(res, delay) );
  }

  const initialize = () => {
    if(typeof stepData != 'undefined') {
      setTextQueue(stepData[stepCount].prompt)
      setImageQueue(stepData[stepCount].images)
    }
  }

  const clickContinue = async () => {
    setIsLoading(true)
    await timeout(500)
    setIsLoading(false)
    setTextBlock(textQueue); //Set text to be the next prompt
    setImageSource(imageQueue);
    setShowInterim(false); //Hide interim logic
    setTextQueue(stepData[stepCount].intermission)
  }

  const checkAnswer = () => {
    if (answer === stepData[stepCount].answer) {
      setTextBlock(textQueue) //this should be showing intermission
      if(stepCount+1 == stepData.length) {
        setHidebuttons(true)
      } else {
        setTextQueue(stepData[stepCount+1].prompt)
        setImageQueue(stepData[stepCount+1].images)
        setStepCount(stepCount+1)
        setAnswer('')
        setShowInterim(true)
      }
    } else {
      alert("You guessed wrong nerd!")
    }
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
        { hideButtons ? null :
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
                      value={answer}
                      onChange={ (e) => setAnswer(e.target.value)}
                    />
                    <Button onClick={ () => checkAnswer() }>{'>'}</Button></InputGroup>
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
