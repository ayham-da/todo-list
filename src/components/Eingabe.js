import React from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap'




function Eingabe({ titel, sendToList }) {

    const [setCom, addSetCom] = React.useState('')

    const addHandler = (e) =>{
        addSetCom(e.target.value)
    }

    const buttonTrigger = async (e) =>{
        sendToList(setCom)
        addSetCom('')

        try {
            let url     = `/say?message=${setCom}`
            let request = await fetch(url)
            let data    = await request.json() 
            console.log(data)
            

        } catch (error) {
            console.log(error)
        }

    }


    return (
        <>
            <InputGroup>
                <Form.Control type="text" placeholder="Type text" value={setCom} onChange={addHandler} />
                <InputGroup.Append>
                    <Button variant="dark" onClick={buttonTrigger} >{titel}</Button>
                </InputGroup.Append>
            </InputGroup>
        </>
    );
}

export default Eingabe;
