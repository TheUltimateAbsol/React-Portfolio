import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import ModalVideo from 'react-modal-video'

class App extends Component {
  constructor () {
    super()
    this.state = {
      open:"",
      videoid: "xxxxx"
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal (videoid) {
    this.setState({isOpen: videoid})
 }
  render() {
    return (
      <div className="App">
        {resumeData.portfolio && resumeData.portfolio.map((item)=><ModalVideo channel='youtube' isOpen={this.state.isOpen == item.videoid} videoId={item.videoid} onClose={() => this.setState({isOpen: ""})} />)}
        <Header resumeData={resumeData}/>
        <Portfolio resumeData={resumeData} func={this.openModal}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        {/* <Testimonials resumeData={resumeData}/> */}
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;