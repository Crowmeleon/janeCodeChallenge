import React, {Component} from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class addNotes extends Component{
    constructor(props){
        super(props);

        this.state = {
            Title: '',
            Author: '',
            Description: ''
        }

    }
    submitNote(){
        let {Title, Author, Description} = this.state;
        console.log({Title, Author, Description}, this.props);
        this.props.postNote({Title, Author, Description}, () => {
            this.props.history.push('/view/notes');
        });
    }

    onInputChange(e){
        let tag = e.target.getAttribute('tag');
        this.setState({
            [tag]: e.target.value
        });
    }

    render(){
        return(
            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={600}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={200}
                transitionName={'loadList'}
            >
            <div className="row">
            <h3 className="center">Add a New Note</h3>
                <div className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input value={this.state.Title} onChange={e => this.onInputChange(e)} tag="Title" type="text"/>
                            <label>Title</label>
                        </div>
                        <div className="input-field col s6">
                            <input value={this.state.Author} onChange={e => this.onInputChange(e)} tag="Author" type="text"/>
                            <label>Author</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea value={this.state.Description} onChange={e => this.onInputChange(e)} id="description" tag="Description" className="materialize-textarea"/>
                            <label>Description</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button onClick={this.submitNote.bind(this)} className="waves-effect waves-light btn-small">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            </ReactCSSTransitionGroup>
        );
    }
}

export default connect(null, actions)(addNotes);