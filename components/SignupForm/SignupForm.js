import React from 'react';
import validator from 'validator';
import { reduxForm, Field } from 'redux-form';
import { SIGNUP_FORM_NAME } from '../../constants/redux-form-names';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback, Alert, Nav, NavItem, NavLink } from 'reactstrap';

const signupFormValidation = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = "Required";
    } else if (!validator.isEmail(values.email)) {
        errors.email = "Please enter a valid email";
    }

    if (!values.firstname) {
        errors.firstname = "Required";
    }

    if (!values.lastname) {
        errors.lastname = "Required";
    }

    if (!values.password) {
        errors.password = "Required";
    } else if (values.password.length < 6) {
        errors.password = "Password should be atleast 6 characters long";
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = "Required"
    } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Passwords does not match"
    }

    return errors;
};

const FormInput = ({ input, meta, label, type }) => {
    return (
        <FormGroup row>
            <Label for={input.name} sm={2}>{label}</Label>
            <Col sm={10}>
                <Input
                    type={type}
                    {...input}
                    invalid={meta.error && meta.touched}
                    valid={meta.valid}
                    id={input.name} />
                <FormFeedback valid={meta.valid}>{meta.error}</FormFeedback>
            </Col>
        </FormGroup>
    );
};

const signupForm = ({ handleSubmit, submitHandler, submitMessage, underSubmission }) => {
    let alert = null;

    if (submitMessage) {
        if (submitMessage.status === "success") {
            alert = (
                <Alert color="success">
                    {submitMessage.message}
                </Alert>
            );
        }

        if (submitMessage.status === "error") {
            alert = (
                <Alert color="danger">
                    {submitMessage.message}
                </Alert>
            );
        }
    }

    return (
        <Col lg={{ size: 8, offset: 3 }}>
            <h1>Signup</h1>
            <hr />
            <Form onSubmit={handleSubmit(submitHandler)}>
                {alert}
                <Field name="firstname" label="First Name" component={FormInput} />
                <Field name="lastname" label="Last Name" component={FormInput} />
                <Field name="email" label="Email" component={FormInput} />
                <Field name="password" label="Password" type="password" component={FormInput} />
                <Field name="confirmPassword" label="Confirm Password" type="password" component={FormInput} />
                <Col sm={{ size: 10, offset: 2 }}>
                    <Button disabled={underSubmission} color="primary">Submit</Button>
                </Col>
            </Form>
        </Col>
    );
}

export default reduxForm({
    form: SIGNUP_FORM_NAME,
    validate: signupFormValidation,
    destroyOnUnmount: false
})(signupForm);