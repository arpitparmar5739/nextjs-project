import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout/Layout';

class Signup extends Component {
    render() {
        return (
            <Layout>
                Welcome to Signup.
            </Layout>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Signup);