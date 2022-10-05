import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

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
            <Row className='mt-4 justify-content-center'>
                <Col>
                    <h1 className="text-center">Home</h1>
                </Col>
            </Row>
            <hr />

            <Row>
                <h3 className="text-center"> Newest Manga </h3>

                {komik.map((item) => (
                    <Col md={3}>
                        <Card style={{ width: 'auto' }}>
                            <Card.Img variant='top' src={item.thumb} />
                            <Card.Body>
                                <Card.Title className='text-center'>{item.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}