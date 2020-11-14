import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import classes from './Menu.module.less';


function MenuItem({children, active=false}) {
    const classNames = [classes.menuItem];

    if (active === true) {
        classNames.push(classes.active);
    }

    return <div className={classNames.join(" ")}>
        {children}
    </div>;
}

export default function Menu() {
    const location = useLocation();

    return <div className={classes.container}>
        <div className={classes.logo}>apprun</div>

        <div className={classes.menu}>

            <MenuItem active={location.pathname === "/"}>
                <Link to="/">Dashboard</Link>
            </MenuItem>

            <MenuItem active={location.pathname === "/hosts"}>
                <Link to="/hosts">Hosts</Link>
            </MenuItem>

        </div>
    </div>;
}
