import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Notes extends Component{
    componentDidMount(){
        this.props.fetchNotes();
    }

    onDeleteNote(id){
        this.props.deleteNote(id);
        
    }

    renderNotes(){
        return this.props.notes.map(note => {
            return (
                <li key={note._id} className="collection-item">
                    <i onClick={e => this.onDeleteNote(note._id, e)} className="material-icons delete">delete</i>
                    <h5>{note.Title}</h5>
                    <h6>{note.Author}</h6>
                    <p>{note.Description}</p>
                </li>
            );
        })
    }

    render(){
        if(this.props.notes){

        }
        return(
            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={400}
                transitionEnterTimeout={400}
                transitionLeaveTimeout={200}
                transitionName={'loadComponent'}
            >
            <div>
                <h3 className="center">View Notes</h3>
                <ul className="collection">
                    {this.renderNotes()}
                </ul>
            </div>
            </ReactCSSTransitionGroup>
        );
    }
}

function mapStateToProps({notes}){
    return {notes}
}

export default connect(mapStateToProps, actions)(Notes);