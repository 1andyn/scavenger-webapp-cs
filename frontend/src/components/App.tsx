import React, { useEffect, useState } from 'react';
import { Button, Col, FormGroup, Input, InputGroup, Row, Spinner, Alert, Fade } from 'reactstrap';
import text from '../datasource/rawdata.txt'
import '../css/main.css';

// Components (Spring Based for Nice Appearances)
import Gallery from './Gallery'
import TextBlock from './TextBlock'
import Loader from './Loader'

const appearanceDelaySlow = 2000
const alertDisplay = 3500
const App = () => {

  const [initialized, setInitialized] = useState<boolean>(false)
  const [showInterim, setShowInterim] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [stepCount, setStepCount] = useState<number>(0)
  const [hideButtons, setHidebuttons] = useState<boolean>(false)

  const [showGallery, setShowGallery] = useState<boolean>(false)
  const [showButton, setShowButton] = useState<boolean>(false)
  const [badAnswer, setBadAnswer] = useState<boolean>(false)

  let testImages = [
    'https://dl.dropboxusercontent.com/s/hu56wv0v1rglu6f/t1.jpg',
    'https://dl.dropboxusercontent.com/s/izvhx8q1se29znb/t2.jpg',
    'https://dl.dropboxusercontent.com/s/du03z2peh0pbkkn/t3.jpg'
  ]

  const [stepData, setStepData] = useState<{
    prompt: string,
    images: string[],
    answer: string,
    intermission: string,
    interImages: string[]
  }[]>([])

  const [imageSource, setImageSource] = useState<string[]>(testImages);
  const [imageQueue, setImageQueue] = useState<string[]>([]);
  const [textQueue, setTextQueue] = useState<string>('There is nothing in the queue...');
  const [textBlock, setTextBlock] = useState<string>('Welcome to the Scavenger Hunt, click continue to Start!');
  const [answer, setAnswer] = useState<string>('')

  const timeout = (delay: number) => {
    return new Promise(res => setTimeout(res, delay));
  }

  const initialize = () => {
    if (typeof stepData != 'undefined') {
      setTextQueue(stepData[stepCount].prompt)
      setImageQueue(stepData[stepCount].images)
    }
  }

  const clickContinue = async () => {
    setIsLoading(true)
    setShowGallery(false)
    setShowButton(false)

    window.setTimeout(()=>{
      setTextBlock(textQueue); //Set text to be the next prompt
      setImageSource(imageQueue);
      setShowInterim(false); //Hide interim logic
    },appearanceDelaySlow)

    window.setTimeout(()=>{
      setShowGallery(true)
      setShowButton(true)
      setIsLoading(false)
    },appearanceDelaySlow)

    setTextQueue(stepData[stepCount].intermission)
    setImageQueue(stepData[stepCount].interImages)
  }

  const checkAnswer = async () => {
    setIsLoading(true)

    if (answer === stepData[stepCount].answer) {
      setShowGallery(false)
      setShowButton(false)

      window.setTimeout(()=>{
        setTextBlock(textQueue) //this should be showing intermission
        setImageSource(imageQueue) //this is the intermission images
      },appearanceDelaySlow)

      if (stepCount + 1 === stepData.length) {
        setHidebuttons(true)
      } else {
        setTextQueue(stepData[stepCount + 1].prompt)
        setImageQueue(stepData[stepCount + 1].images)
        setStepCount(stepCount + 1)
        setAnswer('')
        setShowInterim(true)
      }

      window.setTimeout(()=>{
        setShowGallery(true)
        setShowButton(true)
        setIsLoading(false)
      },appearanceDelaySlow)

    } else {
      setAnswer('')
      showBadAnswer()
      window.setTimeout(()=>{
        setIsLoading(false)
      },appearanceDelaySlow)
    }

  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      checkAnswer()
    }
  }

  /* Run Once Initialization */
  useEffect(() => {
    if (!initialized) {
      setInitialized(true)
      Loader(text).then(async (data) => {
        setStepData(data)
        setShowGallery(true)
        await timeout(appearanceDelaySlow)
        setShowButton(true)
      })
    }
  }, [initialized]);

  useEffect(() => {
    if (stepData.length !== 0) {
      initialize()
      setIsLoading(false)
    }
  }, [stepData]);

  const showBadAnswer = () => {
    setBadAnswer(true)
    window.setTimeout(()=>{
      setBadAnswer(false)
    },alertDisplay)
  }

  return (
    <div className="d-flex align-items-center min-vh-100">
      <div className="container">
        <Row>
          <Fade id='alertFade' in={badAnswer}>
            <Alert color="danger alertText">
              <div className="text-center">The answer entered is incorrect! Try again!</div>
            </Alert>
          </Fade>
        </Row>
        <Row>
          <Col className='m-4' id='imageBox'>
            <Fade in={showGallery}>{Gallery(imageSource)}</Fade>
          </Col>
          <Col className='m-4' id='textBox'>
            <Fade in={showGallery} className='text-box-center'>{TextBlock(textBlock)}</Fade>
          </Col>
        </Row>
        <Fade in={showButton}>
        {hideButtons ? null :
          isLoading ? (<div className='d-flex justify-content-center'><Spinner>Loading...</Spinner></div>) :
            showInterim ? (
              <Row>
                <div className="d-flex justify-content-center"><Button className='continueButton dropShadowBtn' onClick={() => clickContinue()}>Continue</Button></div>
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
                        onKeyDown={handleKeyDown}
                        onChange={(e) => setAnswer(e.target.value)}
                      />
                      <Button disabled={answer === ''} onClick={() => checkAnswer()}>{'>'}</Button></InputGroup>
                  </FormGroup>
                </div>
              </Row>
            )
        }
        </Fade>

      </div>
    </div>
  );
}

export default App;
