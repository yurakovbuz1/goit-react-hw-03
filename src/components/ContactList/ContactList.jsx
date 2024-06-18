import Contact from "../Contact/Contact";
import css from './ContactList.module.css'

const ContactList = ({ contactList }) => {
    return (
        <>
            <ul className={css.contactList}>
                {contactList.map((contact) => (
                <li key={contact.id} className={css.listItem}>
                    <Contact name={contact.name} number={contact.number} />
                </li>
                ))}
            </ul>
        </>
    );
}

export default ContactList