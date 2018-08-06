import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout/Layout';

class About extends Component {
    render() {
        return (
            <Layout>
                Welcome to About.
            </Layout>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(About);