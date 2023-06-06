import React from "react";
import PropTypes from 'prop-types';
import "./ContactForm.css";


export class ContactForm extends React.Component {

  state = {
    name: '',
    number: '',
  }


  newContact = (event) => {
    event.preventDefault();
    const {onAddContact, onCheckName} = this.props;
    const {name, number} = event.target.elements;
    
    if(onCheckName(name.value)) {
      alert(`${name.value} is already in contacs`);
      return
    }
    else {
      onAddContact(name.value, number.value);
      event.target.reset();
    }
  }




  render() {

    return (
      <form onSubmit={this.newContact} className="FormContact">
          <label className="LabelContact"> Name
            <input
              className="InputContact"
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces."
              required
            />
          </label>
         
          <label className="LabelContact">Number
            <input
              className="InputContact"
              type="tel"
              name="number"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button className="BtnContact" type="submit">Add contact</button>
        </form>
    )
  }
}


ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  onCheckName: PropTypes.func.isRequired
}



// import React from "react";
// import "./ContactForm.css";


// export class ContactForm extends React.Component {

//   // state = {
//   //   name: '',
//   //   number: '',
//   // }






//   render() {
//     const {onAddContact} = this.props;

//     return (
//       <form onSubmit={onAddContact}>
//           <label> Name
//             <input
//               type="text"
//               name="name"
//               // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces."
//                required
//             />
//           </label>
         
//           <label>Number
//             <input
//               type="tel"
//               name="number"
//               // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </label>

//           <br/>
//           <button type="submit">Add contact</button>
//         </form>
//     )
//   }
// }