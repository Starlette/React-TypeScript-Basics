import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

export interface IProps {}
export interface IState {
    message: string;
}

let Greetings: React.FC = () => {
    let [ state, setState ] = useState<IState>({
        message: 'Hello'
    });

    let ChangeMessage = ( greeting: string ): void => {
        setState({
            message: greeting
        })
    }

    return (
        <>
            <Card style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Text>
                        { state.message }
                    </Card.Text>
                    <Button 
                        onClick={() => ChangeMessage('Good Morning')} 
                        className="me-2"
                        variant="success">
                        Good Morning
                    </Button>
                    <Button 
                        onClick={() => ChangeMessage('Good Evening')} 
                        variant="primary">
                        Good Evening
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Greetings;