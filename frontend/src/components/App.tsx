import React, { useEffect, useState } from 'react';
import { Button, Col, FormGroup, Input, Row, Spinner } from 'reactstrap';
import image from '../placeholder/image.jpg'
import '../css/app.css';

const App = () => {

  const [initialized, setInitialized] = useState<boolean>(false)

  const [showInterim, setShowInterim] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [next, setNext] = useState<string>('');

  const [imageSource, setImageSource] = useState<string>(image);
  const [textQueue, setTextQueue] = useState<string>('There is nothing in the queue...');
  const [textBlock, setTextBlock] = useState<string>('Welcome to the Scavenger, click continue to Start!');

  /* Run Once Initialization */
  useEffect(() => {
    if(!initialized) {
      setInitialized(true)
      console.log('The hook has run!')
    }
  }, [initialized]);

  const clickContinue = () => {
    setTextBlock(textQueue); //Set text to be the next prompt
    setShowInterim(false); //Hide interim logic

  }


  return (
    <div className="d-flex align-items-center min-vh-100">
      <div className="container">
        <Row>
          <Col className='m-4' id='imageBox'>
            <div className='d-flex justify-content-center'><img className='p-4 imageBlock' src={imageSource} /></div>
          </Col>
          <Col className='m-4' id='textBox'>
              <span className='p-4 align-middle'>{textBlock}</span>
          </Col>
        </Row>
        {
          isLoading ? (<div className='d-flex justify-content-center'><Spinner>Loading...</Spinner></div>) :
            showInterim ? (
              <Row>
                <Col lg={5}/>
                <Col lg={2}><Button onClick={ ()=> clickContinue()}>Continue</Button></Col>
                <Col lg={5}/>
              </Row>
            ) : (
              <Row>
                <div className='d-flex justify-content-center'>
                  <FormGroup>
                    <Input
                      id="inputPassword"
                      name="password"
                      placeholder="answer"
                      type="password"
                    />
                    <Button>Submit</Button>
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
