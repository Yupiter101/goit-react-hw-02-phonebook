
import "./ContactItem.css";


export function ContactItem({contactItem, onDeleteItem}) {
  const {id, name, number} = contactItem;
  return (
    <li className="ContactItem">
        {name}: 
        <span>{number}</span>
        <button 
          type="button"
          onClick={()=> onDeleteItem(id)}
        >button</button>
    </li>
  )
}

