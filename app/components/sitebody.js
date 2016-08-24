console.log("loading site body");

import React from 'react';

const styles = {
    sitebody : {
        flexGrow: 1,
    },
};

const SiteBody = (props) => (
    <section style={styles.sitebody}>
        Body text here.
    </section>
);

export default SiteBody;
