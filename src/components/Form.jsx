import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export class FormComponent extends Component {
    state = {
        todo: ""
    };
    handleChange = e => {
        this.setState({ todo: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();

        if (this.state.todo) {
            this.props.setTodo(this.state.todo);
        }

        this.setState({ todo: "" });
    };
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="add-todo">
                    <Form.Label>Add Todo</Form.Label>
                    <Form.Control
                        placeholder="Add Your todo..."
                        value={this.state.todo}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        );
    }
}

export default FormComponent;
