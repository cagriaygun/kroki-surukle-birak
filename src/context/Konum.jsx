import {createContext, useState} from "react";

const KonumContext = createContext();

function Provider({children}) {
    const [data, setData] = useState('');
    const [kgenislik, setKgenislik] = useState('');
    const [kyukseklik, setKyukseklik] = useState('');
    const [kareler, setKareler] = useState([]);

    const handleKgenislik = (event) => {
        setKgenislik(event.target.value);
    }
    const handleKyukseklik = (event) => {
        setKyukseklik(event.target.value);
    }

    const kareEkle = (event) => {
        event.preventDefault();
        if (
            kgenislik.trim().length !== 0 &&
            kyukseklik.trim().length !== 0
        ) {
            kareOlustur(kgenislik, kyukseklik);
            setKgenislik('');
            setKyukseklik('');
        } else {
            alert("Lütfen Boş Alanları Doldurunuz!");
        }
    };

    const kareOlustur = (kgenislik, kyukseklik) => {
        const kareAlani = [...kareler, {
            id: Math.round(Math.random() * 999999),
            kgenislik,
            kyukseklik
        }];
        setKareler(kareAlani);
    };


    const allowDrop = (event) => {
        event.preventDefault();
    }
    const drag = (event) => {
        event.dataTransfer.setData("text", event.target.id);
    }
    const drop = (event) => {
        event.preventDefault();
        setData(event.dataTransfer.getData("text"));
        event.target.appendChild(document.getElementById(data));
    }
    const paylasilan = {
        allowDrop,
        drag,
        drop,
        kgenislik,
        kyukseklik,
        handleKgenislik,
        handleKyukseklik,
        kareEkle,
        kareler
    }
    return (
        <KonumContext.Provider value={paylasilan}>
            {children}
        </KonumContext.Provider>
    )
}

export {Provider}
export default KonumContext