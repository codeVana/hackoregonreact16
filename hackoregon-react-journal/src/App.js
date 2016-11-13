import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const ReactJournalHeader = ({name, weeks, addNewWeek}) => {
    let wkt;
    return (
      <div className="ReactJournalHeader">
        <h2>Welcome to {name}:  {weeks.length} Weeks</h2>
           <div>
            <label> New Week Title </label>
              <input ref={node => {
                wkt = node;
              }} />
              <button onClick={() => {
                addNewWeek(wkt.value);
                wkt.value = '';
              }}>
                +
              </button>
            </div>
      </div>
    );
}


const AddToForm = ({addTo, week}) => {
  // Input Tracker
  let inputd;
  let inputl;
  // Return JSX
  return (
    <div>
      <label> Description </label>
      <input ref={node => {
        inputd = node;
      }} />
      <label> Link </label>
      <input ref={node => {
        inputl = node;
      }} />
      <button onClick={() => {
        addTo(week, inputd.value, inputl.value);
        inputd.value = '';
        inputl.value = '';
      }}>
        +
      </button>
    </div>
  );
};

class ReactJournalWeek extends Component {
  render() {
//   console.log('ReactJournalWeek', this.props.week)
   let week = this.props.week;
   let title = week.title;
   let links = week.links;
//   console.log(week);
 
    return (
      <div className="ReactJournalWeek">
        <h3>{title}</h3>
        <ul>
        { 
          links.map(function (link, i) {
             return <li key={i}> <a href={link.url}> {link.description}</a></li>
          })
        }
        </ul>
        <AddToForm addTo={this.props.addTo} week={this.props.week}/>
      </div>
    );
  }
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: 'Hack Oregon React-powered Journal',
        weeks: [ {
                      title: 'Week1: Introduction & Learning',
                      links:[ {
                        description: 'How it feels to Learn JavaScript',
                        url: 'https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.rhpy05bvm'
                      }]
                    },
                 {
                      title: 'Week2: ES6 & Diversity',
                      links:[{
                        description: 'Ranking for Women in Tech 2016',
                        url: 'http://tech.co/dc-is-the-top-city-for-women-in-tech-2016-02'
                      }]},
                 {
                      title: 'Week3: Starting React',
                      links: [ {
                        description: 'Thinking in React',
                        url: 'https://facebook.github.io/react/docs/thinking-in-react.html'
                      }]}]}
  }
  whichWeek(wk) {
    console.log(wk);
  }
  addNewWeek(title) {
    let wks = this.state.weeks;
    // Assemble a week object and add it to weeks
    const weekly = {title: title, links: []}
    wks.push(weekly);
    this.setState({weeks: wks});
  }
  addTo(week, dval, lval){
    // Assemble link 
    const linkly = {description: dval, url: lval}
    console.log(linkly)
    let wk = week;
    let larr = wk.links;
    larr.push(linkly);
//    console.log(larr);
    this.setState({week: wk});
  }
  render() {
     let wks = this.state.weeks;
     const ReactJournalWeekList = wks.map((week, i) => {
             return <ReactJournalWeek week={week}  addTo={this.addTo.bind(this)} />
          });
 //      console.log(ReactJournalWeekList)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ReactJournalHeader name={this.state.title}  weeks={this.state.weeks} addNewWeek={this.addNewWeek.bind(this)}/>         
        </div>
        <div className="App-week">
        
  {  ReactJournalWeekList }
 
        </div>
        <p className="App-intro">
   
          To improve this , edit <code>src/App.js</code> and save to reload.
          and send pull request to <code> codevana </code>
        </p>
      </div>
    );
  }
}

export default App;
