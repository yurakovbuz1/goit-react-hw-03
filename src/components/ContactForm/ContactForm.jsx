import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from 'nanoid'
import css from './ContactForm.module.css'

const ContactForm = ({validationSchema, handleFormInput}) => {
    return (
        <>
            <Formik
                initialValues={{ name: '', number: '', }}
                onSubmit={(values, actions) => {
                    handleFormInput({ ...values, id: nanoid() });
                    actions.resetForm();
                }}
                validationSchema={validationSchema}
            >
                <Form className={css.container}>
                    <div className={css.label}>
                        <p>Name</p>
                        <Field name='name' className={css.inputField}></Field>
                        <ErrorMessage name='name' component='p' className={css.errorMessage}/>
                    </div>
                    <div className={css.label}>
                        <p>Number</p>
                        <Field name='number' className={css.inputField}></Field>
                        <ErrorMessage name='number' component='p' className={css.errorMessage}/>
                    </div>
                    <button type='submit' className={css.addContact}>Add Contact</button>
                </Form>
            </Formik>
        </>
    );
}

export default ContactForm