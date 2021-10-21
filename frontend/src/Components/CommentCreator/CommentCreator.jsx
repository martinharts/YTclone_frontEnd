import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class CommentCreator extends Component{
    constructor(props){
        super(props);
        this.state = {
            comment: "",
            name: "",
        }
    }

    addComment = async () => {
        let comment = {
            name: this.state.name,
            comment: this.state.comment,
            videoId: this.props.videoId,
            replyToId: this.props.replyId
        }
        try {
            await axios.post('http://localhost:5000/comments/post', comment);
            this.setState({
                name: '',
                comment: '',
            });
            this.props.refresh();
            if (this.props.hide){
                this.props.hide()
            }
        }
        catch (err) {
            alert(err);
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.addComment();
    }

    render() { 
        return ( 
            <div className="container jumbotron small" style={{maxHeight: '30vh'}}>
                <h3>Comment</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group  controlId="name">
                        <Form.Control type="text" placeholder="Enter your name" name='name' onChange={this.handleChange} value={this.state.name}/>
                    </Form.Group>  
                    <Form.Group controlId="comment">
                        <Form.Control type="text" placeholder="Leave a comment..." name='comment' value={this.state.comment} onChange={this.handleChange}/>
                    </Form.Group>           
                    <Button variant="primary" type="submit">Add Comment</Button>
                </Form>
            </div>
         );
    }
}

export default CommentCreator;