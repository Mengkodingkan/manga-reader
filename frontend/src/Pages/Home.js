import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

async function getKomik() {
    const response = await fetch('http://localhost:3568/api/v1/home');
    const json = await response.json();

    return json.data.homeLatest;
}

function ImageOnError(e) {
    e.target.onerror = null;

    const base64img = btoa(e.target.src);
    return (e.target.src = 'https://bypass.kato-rest.us/?q=' + base64img);
}

export default function Home() {
    const [komik, setKomik] = useState([]);
    useEffect(() => {
        getKomik().then((data) => {
            setKomik(data);
        });
    }, []);

    useEffect(() => {
        document.title = 'Manga Reader • Home';
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
                            <Card.Img variant='top' src={item.thumb} onError={ImageOnError} />
                            <Card.Body>
                                <Card.Title className='text-center'>{item.name}</Card.Title>
                                {/* detail button */}
                                <div className='d-grid gap-2'>
                                    <Link to={`${item.endpoint}`} className='btn btn-secondary'>Detail</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}