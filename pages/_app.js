import React from 'react';
import '../styles/global.css';

const App = ({ Component, pageProps }) => {
    return (
        <Component {...pageProps} />
    );
};

export default App;

//!NOTE: This is to apply global style for every pages