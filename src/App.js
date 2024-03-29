import React, { Component } from "react";
import {
    Jumbotron,
    ListGroup,
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";
import NavBar from "./components/NavBar";
import FormComponent from "./components/Form";

class App extends Component {
    state = {
        todos: [
            { id: 0, title: "This is first todo" },
            { id: 1, title: "This is second todo" }
        ]
    };
    // set todo
    setTodo = todo => {
        // create id for todo
        let id, todoLength;
        todoLength = this.state.todos.length;
        if (todoLength <= 0) {
            id = 0;
        } else {
            id = this.state.todos[todoLength - 1].id + 1;
        }
        const newTodo = {
            id,
            title: todo
        };

        // set new todo to todos
        this.setState({ todos: [...this.state.todos, newTodo] });
    };

    // remove todo
    removeTodo = id => {
        let todos = [...this.state.todos];
        todos = todos.filter(todo => todo.id !== id);
        this.setState({ todos });
    };
    
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col md={5}>
                                <FormComponent setTodo={this.setTodo} />
                            </Col>
                            <Col md={7} style={{ marginTop: "20px" }}>
                                <ListGroup variant="flush">
                                    {this.state.todos.map(todo => (
                                        <ListGroup.Item key={todo.id}>
                                            <Row>
                                                <Col>{todo.title}</Col>
                                                <Col>
                                                    <Button
                                                        onClick={() =>
                                                            this.removeTodo(
                                                                todo.id
                                                            )
                                                        }
                                                        variant="outline-danger"
                                                    >
                                                        Remove
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default App;
