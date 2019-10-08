import React from 'react';
import './Contact.css'

function Contact(props){
    return(
        <div className="Contact">
            <img src={props.avatar} alt={props.name} className="avatar"></img>
            <div>
                <h5 className="name">{props.name}</h5>
                {props.online ? 
                <div className='status'><div className='status-online'></div><p className='status-text'>Online</p></div> :
                <div className='status'><div className='status-offline'></div><p className='status-text'>Offline</p></div> 
                }
            </div>
        </div>
    )
}


export default Contact;