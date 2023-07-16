import React, {useContext} from 'react';
import KonumContext from "../context/Konum.jsx";
import {Col, Row} from "reactstrap";

function KonumAlan() {
    const {allowDrop, drag, drop, kareler} = useContext(KonumContext);

    return (
        <div>
            <Row>
                <Col lg="2" className="surukleBirak">
                    <h3 className="py-2">Sürükle Bırak</h3>
                    {kareler.map(konumKare =>
                        <canvas
                            className="rect"
                            key={konumKare.id}
                            id={konumKare.id}
                            width={konumKare.kgenislik}
                            height={konumKare.kyukseklik}
                            draggable={true}
                            onDragStart={drag}>
                        </canvas>
                    )}
                    {/*{cizgiler.map(konumCizgi =>*/}
                    {/*    <canvas*/}
                    {/*        className="line"*/}
                    {/*        ref={canvasRef}*/}
                    {/*        key={konumCizgi.id}*/}
                    {/*        id={konumCizgi.id}*/}
                    {/*        width={konumCizgi.uzunluk}*/}
                    {/*        height={2}*/}
                    {/*        draggable={true}*/}
                    {/*        onDragStart={drag}>*/}
                    {/*    </canvas>*/}
                    {/*)}*/}
                </Col>
                <Col lg="10"
                     id="div1"
                     onDrop={drop}
                     onDragOver={allowDrop}>
                </Col>
            </Row>
        </div>
    );
}

export default KonumAlan;