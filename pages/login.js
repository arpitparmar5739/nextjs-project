import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout/Layout';

class Login extends Component {
    render() {
        return (
            <Layout>
                Welcome to Login.
            </Layout>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Login);