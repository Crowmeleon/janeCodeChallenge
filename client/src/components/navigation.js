import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navigation = withRouter(props => {
    const {location: {pathname}} = props;
    return(
        <nav className="navigation-container">
            <div className="nav-wrapper">
                <Link className="brand-logo" to="/">Jane Challenge</Link>
                <ul className="right">
                    <li className={pathname === '/view/notes'? 'active' : ''}><Link to="/view/notes">View</Link></li>
                    <li className={pathname === '/add/note'? 'active' : ''}><Link to="/add/note">Add Note</Link></li>
                </ul>
            </div>
        </nav>
    );
});

export default Navigation;