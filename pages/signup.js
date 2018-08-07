import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import Layout from '../components/Layout/Layout';
import SignupForm from '../components/SignupForm/SignupForm';
import { SIGNUP_FORM_NAME } from '../constants/redux-form-names';

class Signup extends Component {
    submitHandler = (values) => {
        alert(JSON.stringify(values));
    }

    render() {
        const form = this.props.form || {};
        return (
            <Layout>
                <Container>
                    <SignupForm
                        submitHandler={this.submitHandler}
                        submitMessage={form.message}
                        underSubmission={form.underSubmission}
                    />
                </Container>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    form: state.form[SIGNUP_FORM_NAME]
});

export default connect(mapStateToProps)(Signup);