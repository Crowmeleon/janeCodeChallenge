import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Landing = () => {
    return(
        <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={400}
                transitionEnterTimeout={400}
                transitionLeaveTimeout={200}
                transitionName={'loadComponent'}
            >
        <div className="landing-container">
            <h3 className="center">Note taking application</h3>
            <ul className="collection">
                <li className="collection-item"><i className="material-icons check">check</i>Create a React app and create a git repo and do an initial commit. (might be useful to start with create-react-app)</li>
                <li className="collection-item"><i className="material-icons check">check</i>Add a header and a footer; make the footer sticky to the bottom of the page.</li>
                <li className="collection-item"><i className="material-icons check">check</i>Add 2 items to the header, a "View" and the "Edit". These two items will be pages, and when you are on either it should be clear which one you are on. The URL should also reflect this.</li>
                <li className="collection-item"><i className="material-icons check">check</i>Add a form to the Edit page, that allows you to submit items. These items should be persisted somewhere that other pages in this app could access them. Feel free to do this however you feel is appropriate (Redux, localstorage, mongodb, etc).</li>
                <li className="collection-item"><i className="material-icons check">check</i>On the View page, enumerate the items that have been added.</li>
                <li className="collection-item"><i className="material-icons check">check</i>Add a way to remove items.</li>
                <li className="collection-item"><i className="material-icons check">check</i>Publish the site somewhere it could be accessed.</li>
                <li className="collection-item"><i className="material-icons check">check</i>Pretty things up, add an animation</li>
                <li className="collection-item"><i className="material-icons check">check</i>Find a way to track if the user is inactive for more than 30 seconds. If the user is inactive, display a message. Once the user is active again, remove that message.</li>
            </ul>
        </div>
        </ReactCSSTransitionGroup>
    );
}

export default Landing;