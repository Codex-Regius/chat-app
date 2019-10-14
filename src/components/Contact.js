import React from 'react';
import './Contact.css'

class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      online : props.online
    }
  }

  onlineOffline = () => {
    const newOnline = !(this.state.online);
    this.setState({online : newOnline})
  }


  render(){
  return(
    <div className="Contact">
      <img src={this.props.avatar} alt={this.props.name} className="avatar"></img>
      <div>
        <h5 className="name">{this.props.name}</h5>
        {this.state.online ? 
        <div className='status'><div className='status-online'></div><p className='status-text' onClick={this.onlineOffline}>Online</p></div> :
        <div className='status'><div className='status-offline'></div><p className='status-text' onClick={this.onlineOffline}>Offline</p></div> 
        }

        <p></p>
      </div>
    </div>
  )}
}


export default Contact;