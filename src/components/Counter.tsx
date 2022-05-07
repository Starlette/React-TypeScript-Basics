import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

export interface IProps {}
export interface IState {
    count: number;
}

let Counter: React.FC<IProps> = () => {
    let [ state, setState ] = useState<IState>({
        count: 0
    });

    let { count } = state;

    let Increment = (): void => {
        setState({
            count: count + 1
        })
    }

    let Decrement = (): void => {
        setState({
            count: count - 1
        })
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{ count }</Card.Title>
                    <Button className="me-2" variant="success" onClick={Increment}>
                        Increment
                    </Button>
                    <Button variant="warning" onClick={Decrement}>
                        Decrement
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Counter;