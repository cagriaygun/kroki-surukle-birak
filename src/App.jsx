import './App.css'
import {Col, Container} from "reactstrap";
import KonumAlan from "./components/KonumAlan.jsx";
import KonumUret from "./components/KonumUret.jsx";

function App() {

    return (
        <>
            <Container fluid>
                <Col lg="12" className="p-4">
                    <KonumUret/>
                </Col>
                <Col lg="12">
                    <KonumAlan/>
                </Col>
            </Container>
        </>
    )
}

export default App
