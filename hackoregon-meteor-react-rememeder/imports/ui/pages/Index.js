import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button, Jumbotron, Image, Carousel} from 'react-bootstrap';
import handleRememeder from '../../modules/rememeder'
const formInstance = (
  <Form inline>
    <FormGroup controlId="formInlineName">
      <ControlLabel>Name</ControlLabel>
      {' '}
      <FormControl type="text" placeholder="Jane Doe" />
    </FormGroup>
    {' '}
    <FormGroup controlId="formInlineEmail">
      <ControlLabel>Email</ControlLabel>
      {' '}
      <FormControl type="email" placeholder="jane.doe@example.com" />
    </FormGroup>
    {' '}
    <Button type="submit">
      Send ReMEMEder
    </Button>
  </Form>
);

//      <Image src="https://media.giphy.com/media/13AK9gO1EHko5q/giphy.gif" circle responsive/>
//      <Image src="http://s2.quickmeme.com/img/df/df414399b34c2356d43c9a9188374f2292ebffa3eb1f2e5122be08aff351d276.jpg" rounded responsive/>

export default class Index extends React.Component {
  componentDidMount() {
    handleRememeder({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div className="Index">   
    <Jumbotron className="text-center">
      <form 
        ref={ form => (this.memeForm = form) }
        className="memeform" 
        onSubmit={ this.handleSubmit }
       >
        <FormGroup controlId="formInlineName">
          <ControlLabel>Name</ControlLabel>
          {' '}
          <FormControl type="text" ref="name" name="name" placeholder="Jane Doe" />
        </FormGroup>
        {' '}
        <FormGroup controlId="formInlineEmail">
          <ControlLabel>Email</ControlLabel>
          {' '}
          <FormControl  type="email"
                  ref="emailAddress"
                  name="emailAddress"
                  placeholder="jane.doe@example.com" />
        </FormGroup>
        {' '}
        <Button type="submit">
          Send ReMEMEder
        </Button>
      </form>

        <Carousel>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://media.giphy.com/media/13AK9gO1EHko5q/giphy.gif"/>
      <Carousel.Caption>
        <h3>Awake</h3>
        <p>You shall</p>
      </Carousel.Caption>
    </Carousel.Item>
    
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="http://66.media.tumblr.com/d05d6c2f4b46133040171a60286461e3/tumblr_nql34zCOlC1uogcqzo3_400.gif" />
      <Carousel.Caption>
        <h3>Meditation: Bend your MIND</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://media.giphy.com/media/3oz8y07PqQ3PGo4fe0/source.gif" />
      <Carousel.Caption>
        <h3>FOCUS: On your breath</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="http://s2.quickmeme.com/img/df/df414399b34c2356d43c9a9188374f2292ebffa3eb1f2e5122be08aff351d276.jpg"/>
      <Carousel.Caption>
        <h3>TIME: You got all day</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

     <h2>ReMEMEder: An Email MeME Reminder </h2>
      <h3>A React-Meteor application</h3>
      <p> Using the starter code base from the Meteor Chef </p>
      <p><a className="btn btn-success" href="https://themeteorchef.com/base" role="button">Read the Documentation</a></p>
      <p style={ { fontSize: '16px', color: '#aaa' } }>Currently at v4.10.0</p>
    </Jumbotron>
  </div>
    );
  }
}

/*
const Index = () => (
  <div className="Index">   
    <Jumbotron className="text-center">
      <Form className="MeMEForm" onSubmit={ this.handleSubmit }>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Name</ControlLabel>
          {' '}
          <FormControl type="text" placeholder="Jane Doe" />
        </FormGroup>
        {' '}
        <FormGroup controlId="formInlineEmail">
          <ControlLabel>Email</ControlLabel>
          {' '}
          <FormControl type="email" placeholder="jane.doe@example.com" />
        </FormGroup>
        {' '}
        <Button type="submit">
          Send ReMEMEder
        </Button>
      </Form>

        <Carousel>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://media.giphy.com/media/13AK9gO1EHko5q/giphy.gif"/>
      <Carousel.Caption>
        <h3>Awake</h3>
        <p>You shall</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="http://s2.quickmeme.com/img/df/df414399b34c2356d43c9a9188374f2292ebffa3eb1f2e5122be08aff351d276.jpg"/>
      <Carousel.Caption>
        <h3>TIME: You got all day</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="http://66.media.tumblr.com/d05d6c2f4b46133040171a60286461e3/tumblr_nql34zCOlC1uogcqzo3_400.gif" />
      <Carousel.Caption>
        <h3>Meditation: Bend your MIND</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://media.giphy.com/media/3oz8y07PqQ3PGo4fe0/source.gif" />
      <Carousel.Caption>
        <h3>FOCUS: On your breath</h3>
      </Carousel.Caption>
    </Carousel.Item>
    
  </Carousel>

     <h2>ReMEMEder: An Email MeME Reminder </h2>
      <h3>A React-Meteor application</h3>
      <p> Using the starter code base from the Meteor Chef </p>
      <p><a className="btn btn-success" href="https://themeteorchef.com/base" role="button">Read the Documentation</a></p>
      <p style={ { fontSize: '16px', color: '#aaa' } }>Currently at v4.10.0</p>
    </Jumbotron>
  </div>
);

export default Index;
*/
