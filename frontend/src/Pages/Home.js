import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function getKomik() {
    return fetch('http://localhost:3568/api/v1/home')
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson.data.homeLatest;
        })
        .catch((error) => {
            console.error(error);
        });
}

export default function Home() {
    const [komik, setKomik] = useState([]);
    useEffect(() => {
        getKomik().then((data) => {
            setKomik(data);
        });
    }, []);

    return (
        <>
            <div className="row mt-4 justify-content-center">
                <div className="col">
                    <h1 className="text-center">Home</h1>
                </div>
            </div>
            <hr />
            <div className="row">
                <h3 className="text-center"> Newest Manga </h3>

                {komik.map((item) => (
                    <div className="col-md-3">
                        <div className="card-mb-3" style={{ width: 'auto' }}>
                            <img src={item.thumb} class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title text-center">
                                    {item.name}
                                </h5>
                                <button class="btn btn-dark btn-sm btn-block see-detail" href="#" data-toggle="modal"
                                    data-source="komikindo" data-endpoint={item.endpoint}
                                    data-target="#exampleModal">Detail</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}