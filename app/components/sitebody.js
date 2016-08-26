console.log("loading site body");

import React from 'react';
import generic from '../generic_styles.js'

const styles = {
    sitebody : {
        flexGrow: 1,
    },
};

const SiteBody = (props) => (
    <section style={Object.assign({}, styles.sitebody, generic.dev)} >
        Body text here.
    </section>
);

export default SiteBody;
