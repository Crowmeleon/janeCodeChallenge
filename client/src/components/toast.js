import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Toast = ({visible}) => {
    return(
        <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={400}
                transitionEnterTimeout={400}
                transitionLeaveTimeout={200}
                transitionName={'loadToast'}
            >
            {visible === true ?
            <div className="toast-container">
                <div className="toast-inner-container">
                    <div className="toast-content">
                        <h4 className="center toast-title">Are you still there?</h4>
                        <p className="center">Someone grab a mirror, check if they're breathing!</p>
                    </div>
                </div>
            </div>
            : <div></div>}
        </ReactCSSTransitionGroup>
    );
}

export default Toast;