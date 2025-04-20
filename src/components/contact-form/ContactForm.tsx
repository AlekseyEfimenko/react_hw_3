import React, { useId } from "react";
import { ContactItem } from "../../types";
import { Formik, Field, Form, FormikHelpers, ErrorMessage  } from "formik";
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import * as Yup from "yup";

type Props = {
  onAdd: (item: ContactItem) => void;
}

const initValues = {
  id: "",
  name: "",
  number: "",
}

const contactShema = Yup.object().shape({
  name: Yup.string().min(2, "Minimum 2 symbols").max(20, "Maximum 20 symbols").trim().required(),
  number: Yup.number().moreThan(6, "Minimum 7 numbers").required().positive().integer()
})

const ContactForm: React.FC<Props> = (props) => {
  const nameField = useId();
  const numberField = useId();
  const { onAdd } = props;

  const sendForm = (value: ContactItem, actions: FormikHelpers<ContactItem>) => {
    value.id = nanoid();
    onAdd(value);
    actions.resetForm();
  }

  return (
    <Formik initialValues={initValues} onSubmit={sendForm} validationSchema={contactShema}>
      <Form className={css.container}>
        <label htmlFor={nameField}>Name</label>
        <Field type="text" name="name" id={nameField} className={css.input}></Field>
        <ErrorMessage name="name" component="span" className={css.error} />

        <label htmlFor={numberField}>Phone number</label>
        <Field type="text" name="number" id={numberField} className={css.input}></Field>
        <ErrorMessage name="number" component="span" className={css.error} />

        <button type="submit" className={css.formButton}>Add contact</button>
      </Form>

    </Formik>
  )
}

export default ContactForm;