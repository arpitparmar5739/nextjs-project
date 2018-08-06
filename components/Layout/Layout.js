import React, { Fragment } from 'react';
import Navbar from '../UI/Navbar/Navbar';

const Layout = (props) => {
    return (
        <Fragment>
            <Navbar />
            <div style={{ margin: "70px 0 0 0" }}>
                {props.children}
            </div>
        </Fragment>
    );
};

export default Layout;