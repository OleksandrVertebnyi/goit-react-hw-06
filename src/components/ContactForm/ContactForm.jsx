import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const Schema = Yup.object({
  name: Yup.string().min(3).max(50).required('Required'),
  number: Yup.string().min(3).max(50).required('Required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={Schema}
      onSubmit={(values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          Name
          <Field name="name" className={styles.input} />
          <ErrorMessage name="name" component="span" className={styles.error} />
        </label>

        <label className={styles.label}>
          Number
          <Field name="number" className={styles.input} />
          <ErrorMessage
            name="number"
            component="span"
            className={styles.error}
          />
        </label>

        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
