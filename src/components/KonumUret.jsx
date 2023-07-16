import React, {useContext} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import KonumContext from "../context/Konum.jsx";

function KonumUret() {
    const {
        kgenislik,
        kyukseklik,
        handleKgenislik,
        handleKyukseklik,
        kareEkle,
    } = useContext(KonumContext);
    return (
        <Form>
            <Row>
                <h3 className="py-2">Konum Üret</h3>
                <Col lg="1">
                    <FormGroup>
                        <Label for="kareYukseklik">Yükseklik</Label>
                        <Input value={kyukseklik} onChange={handleKyukseklik} id="kareYukseklik" name="kareYukseklik"
                               type="number"/>
                    </FormGroup>
                </Col>
                <Col lg="1">
                    <FormGroup>
                        <Label for="kareGenislik">Genişlik</Label>
                        <Input value={kgenislik} onChange={handleKgenislik} id="kareGenislik" name="kareGenislik"
                               type="number"/>
                    </FormGroup>
                </Col>
                <Col lg="2">
                    <Label> </Label>
                    <FormGroup>
                        <Button className="col-lg-3 btn btn-success m-1" onClick={kareEkle}>Kare Ekle</Button>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    );
}

export default KonumUret;