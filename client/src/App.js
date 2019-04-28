import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { saveAs } from 'file-saver';
import firebase, { auth, provider } from './firebase.js';



class App extends Component {
  constructor() {
    super();
    this.state = { 
      name: '',
      profession: '',
      age: 0,
      contact: '',
      email:'',
      objectives:'',
      eduschool:'',
      educollege:'',
      edufurther:'',
      workexp1:'',
      workexp2:'',
      workexpduration1:'',
      workexpduration2:'',
      schoolduration:'',
      collegeduration:'',
      furtherduration:'',
      user: null 
   }
   this.handleChange = this.handleChange.bind(this);
   this.createAndDownloadPdf1 = this.createAndDownloadPdf1.bind(this);
   this.createAndDownloadPdf2 = this.createAndDownloadPdf2.bind(this);
   this.login = this.login.bind(this);
   this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
    });}
  logout() {
    // we will add the code for this in a moment, but need to add the method now or the bind will throw an error
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
  }
  login() {
    auth.signInWithPopup(provider) 
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }
  createAndDownloadPdf1 = () => {
    axios.post('/create-pdf', this.state).then(() => axios.get('/fetch-pdf', { responseType: 'blob' }))
    .then((res) => {const pdfBlob = new Blob([res.data], { type: 'application/pdf' });saveAs(pdfBlob, 'generatedDocument.pdf')})
  }
  createAndDownloadPdf2 = () => {
    axios.post('/create-pdf-1', this.state).then(() => axios.get('/fetch-pdf', { responseType: 'blob' }))
    .then((res) => {const pdfBlob = new Blob([res.data], { type: 'application/pdf' });saveAs(pdfBlob, 'generatedDocument.pdf')})
  }
  handleChange = ({ target: { value, name } }) => this.setState({ [name]: value });
  render() {
    return (
      <div className="App">
      {this.state.user ?
        <button className="btn btn-primary authentication-btn" onClick={this.logout}>Log Out</button>                
        :
        <button  className="btn btn-primary authentication-btn" onClick={this.login}>Log In</button>              
      }
      {this.state.user ?
        <div className="form">
        <input type="text" placeholder="Name" name="name" onChange ={this.handleChange}/>
        <input type="text" placeholder="Profession" name="profession" onChange ={this.handleChange}/>
          <input type="number" placeholder="Age" name="age"    onChange={this.handleChange}/>
          <input type="text" placeholder="Contact" name="contact" onChange={this.handleChange}/>
          <input type="text" placeholder="Email" name="email" onChange={this.handleChange}/>
          <input type="text" className="big-input" placeholder="Objectives" name="objectives" onChange ={this.handleChange}/>
          <input type="text" placeholder="Education school" name="eduschool" onChange ={this.handleChange}/>
          <input type="text" placeholder="School Duration" name="schoolduration" onChange ={this.handleChange}/>
          <input type="text" placeholder="Education college" name="educollege" onChange ={this.handleChange}/>
          <input type="text" placeholder="College Duration" name="collegeduration" onChange ={this.handleChange}/>
          <input type="text" placeholder="Education-further" name="edufurther" onChange ={this.handleChange}/>
          <input type="text" placeholder="Duration for this" name="furtherduration" onChange ={this.handleChange}/>
          <input type="text" className="big-input" placeholder="Work Experience 1" name="workexp1" onChange ={this.handleChange}/>
          <input type="text" placeholder="Work Experience Duration 1" name="workexpduration1" onChange ={this.handleChange}/>
          <input type="text" className="big-input" placeholder="Work Experience 2" name="workexp2" onChange ={this.handleChange}/><br/>
          <input type="text" placeholder="Work Experience Duration 2" name="workexpduration2" onChange ={this.handleChange}/><br />
          <button onClick={this.createAndDownloadPdf1}>Download PDF</button>
        </div>              
        :
        <p>Please log in</p>              
      }
   
   </div>
    );
  }
}

export default App;
