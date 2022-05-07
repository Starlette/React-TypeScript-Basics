import React from "react";
import { ListGroup } from "react-bootstrap";

export interface IState {}
export interface IProps {
    name: string;
    age: number;
    title: string;
}

export class CustomerClass extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }
    render() {
        let { name, age, title } = this.props;
        return (
            <>
                <h2>Class Component</h2>
                <ListGroup>
                    <ListGroup.Item>Name: {name}</ListGroup.Item>
                    <ListGroup.Item>Age: {age}</ListGroup.Item>
                    <ListGroup.Item>Title: {title}</ListGroup.Item>
                </ListGroup>
            </>
        );
    }
}