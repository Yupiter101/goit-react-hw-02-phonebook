
import { ContactItem } from "components/ContactItem/ContactItem";
import "./ContactList.css";


export function ContactList ({onFilterContacts, onDelete}) {
 
  return(
    <ul className="ContactList">
      {onFilterContacts.map(contact=> {
        return <ContactItem key={contact.id} contactItem={contact} onDeleteItem={onDelete}/>
      })}
    </ul>
  )
}

