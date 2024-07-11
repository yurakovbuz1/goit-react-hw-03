import Contact from "../Contact/Contact";
import css from './ContactList.module.css'

const ContactList = ({ contactList, handleDelete }) => {
    return (
        <>
            <ul className={css.contactList}>
                {contactList.map((contact) => (
                <li key={contact.id} className={css.listItem}>
                    <Contact id={contact.id} name={contact.name} number={contact.number} onDelete={handleDelete} />
                </li>
                ))}
            </ul>
        </>
    );
}

export default ContactList