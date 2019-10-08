import React from 'react';
import Contact from './Contact';

let list = [
  {
    name: "Julie Holt",
    avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
    isonline: true
  },
  {
    name: "Johanne Sutton",
    avatar: 'https://randomuser.me/api/portraits/women/64.jpg',
    isonline: true
  },
  {
    name: "Devon Herrera",
    avatar: 'https://randomuser.me/api/portraits/men/59.jpg',
    isonline: true
  },
  {
    name: "Albert Reid",
    avatar: 'https://randomuser.me/api/portraits/men/73.jpg',
    isonline : true
  },
  {
    name: "Nicole Cook",
    avatar: 'https://randomuser.me/api/portraits/women/15.jpg',
    isonline : true
  },
];

const ContactList = () => {
  return(
    list.map((contact) => {
      return(
        <div>
          <Contact 
          name={contact.name}
          avatar={contact.avatar}
          online={contact.isonline}
          />
        </div>
      )
    })
  )
}





export default ContactList;