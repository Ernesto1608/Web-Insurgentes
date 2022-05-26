import React, { useState } from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const axios = require("axios");


function CreateRecord({showCreate, setShowCreate}) {
    const [date, setDate] = useState(new Date());

    const disperse = async (e) => {
        e.preventDefault();
        let body = {
            fecha: date,
            lugar: e.target.elements.lugar.value,
            link: e.target.elements.link.value
        }
        let response = await axios({
            url: `https://web-insurgentes-api.herokuapp.com/eventos`,
            method: "POST",
            data: body
        });
        console.log(response);
        setShowCreate(!showCreate);
    };

    return(
        <Modal className="prefacture-modals" onHide={() => {}} show={showCreate} centered>
            <Modal.Body>
                <Form onSubmit={disperse} autoComplete={"off"}>
                    <Modal.Header style={{"justifyContent":"center"}}>
                        <p style={{"fontSize":"large", "fontWeight":"bolder"}}>Crear Evento</p>
                    </Modal.Header>
                    <Form.Group style={{"marginBottom": "10px", "marginTop":"10px"}}>
                        <DatePicker showTimeSelect dateFormat="MMMM d, yyyy h:mmaa" selected={date} onChange={date => setDate(date)} />
                    </Form.Group>

                    <Form.Group controlId="lugar" style={{"marginBottom": "10px"}}>
                        <Form.Control type="text"
                        onInput = {(e) =>{
                            e.target.value = e.target.value.toString();
                        }}
                        placeholder={"Lugar"} required/>
                    </Form.Group>

                    <Form.Group controlId="link" style={{"marginBottom": "10px"}}>
                        <Form.Control type="text"
                        onInput = {(e) =>{
                            e.target.value = e.target.value.toString();
                        }}
                        placeholder={"Link"} required/>
                    </Form.Group>

                    <Button style={{"margin":"20px", "marginLeft":"120px"}} variant="primary" type="submit">
                        Confirmar
                    </Button> 

                    <Button style={{"margin":"20px"}} variant="danger" onClick={() => setShowCreate(!showCreate)}>
                        Cancelar
                    </Button>             
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default CreateRecord;