import React from 'react';
import { Redirect } from 'react-router';
import styles from '../css/styles';

class List extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      contactCardStyle: {
        backgroundColor: '#eaeaea',
        borderRadius: 5,
        padding: 5,
        fontFamily: 'Geneva, sans-serif',
        fontSize: '18px',
        textAlign: 'center',
        margin: 'auto',
        marginTop: 5,
        width: 300,
      },
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(receiver) {
    this.props.setActiveContact(receiver);
    this.props.history.push('/lotes');
  }

  render() {
    return (
      <div className="newContactForm">
        { !this.props.contacts ? <p>No Contacts Yet!</p>
          : this.props.contacts.map((contact, index) => {
            return (
              <div 
                style={ this.state.contactCardStyle } 
                key={ index } 
                onClick={ () => this.handleClick(contact.receiver) }>
                { contact.receiver.display ? contact.receiver.display : contact.receiver.email }
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default List;
