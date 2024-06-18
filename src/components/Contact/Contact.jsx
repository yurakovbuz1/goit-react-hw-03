import css from './Contact.module.css'

const Contact = ({ name, number }) => {
    return (
        <>
            <div className={css.container}>
                <div className={css.description}>
                    <p>{name}</p>
                    <p>{number}</p>
                </div>
                <button type='button'>Delete</button>
            </div>
            
        </>
    );
}

export default Contact