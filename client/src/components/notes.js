import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Notes extends Component{
    componentDidMount(){
        this.props.fetchNotes();
    }

    onDeleteNote(id){
        console.log(id);
        this.props.deleteNote(id);
    }

    renderNotes(){
        console.log(this.props);
        return this.props.notes.map(note => {
            return (
                <li key={note._id} className="collection-item">
                    <i onClick={() => this.onDeleteNote(note._id)} className="material-icons delete">delete</i>
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
            <div>
                <h3 className="center">View Notes</h3>
                <ul className="collection">
                    {this.renderNotes()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({notes}){
    return {notes}
}

export default connect(mapStateToProps, actions)(Notes);