import React from 'react';
import generalized from '../generalized_styles.js';

const styles = {
    aboutContainer : generalized.siteBody,
    mainview : {
        display: 'flex',        // ensure that cmps in sitebody can expand
        flexDirection: 'row'    // arrange cmps in sitebody horizontally
    }
};

const AboutView = (props) => (
    <section style={styles.aboutContainer} >
        <h2>About rochong.space</h2>
    </section>
);

export default AboutView;
