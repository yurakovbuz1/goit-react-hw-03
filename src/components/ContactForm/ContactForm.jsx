import { Field, Form, Formik } from "formik";
import css from './ContactForm.module.css'

const ContactForm = () => {
    return (
        <>
            <Formik
                initialValues={{ name: '', number: '', }}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                }}
            >
                <Form className={css.container}>
                    <div className={css.label}>
                        <p>Name</p>
                        <Field name='name' className={css.inputField}></Field>
                    </div>
                    <div className={css.label}>
                        <p>Number</p>
                        <Field name='number' className={css.inputField}></Field>
                    </div>
                    <button type='submit' className={css.addContact}>Add Contact</button>
                </Form>
            </Formik>
        </>
    );
}

export default ContactForm