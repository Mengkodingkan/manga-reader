import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Helmet } from 'react-helmet';

async function getKomik() {
    const response = await fetch('http://localhost:3568/api/v1/komikindo/home');
    const json = await response.json();

    return json.data;
}

function ImageOnError(e) {
    e.target.onerror = null;

    const base64img = btoa(e.target.src);
    return (e.target.src = 'https://bypass.kato-rest.us/?q=' + base64img);
}

export default function Home() {
    const [komik, setKomik] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getKomik().then((data) => {
            setKomik(data);
            setLoading(false);
        });
    }, []);

    return (
        <>
            {loading ? (
                // loading animation center vertical
                <Row>
                    <div className="d-flex justify-content-center align-items-center" style={{ 'minHeight': '100vh' }}>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </Row>
            ) : (
                <>
                    <Helmet>
                        <title>Manga Reader • Home</title>
                    </Helmet>


                    <Row className='mt-4'>
                        <h4 className="text-center">Komik Terpopuler</h4>
                        <hr />
                        {komik.homePopular.map((item) => (
                            <Col key={item.endpoint} xs={6} md={4} lg={3}>
                                <Card>
                                    <Card.Img
                                        variant="top"
                                        src={item.thumb}
                                        onError={ImageOnError}
                                    />
                                    <Card.Body>
                                        <Card.Title className='text-center'>
                                            <Link to={item.endpoint}>
                                                {item.name}
                                            </Link>
                                        </Card.Title>
                                        <Card.Text>
                                            <div className="d-grid gap-2">
                                                <Link to={item.endpoint} className='btn btn-secondary'>Detail</Link>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <br />
                    <Row>
                        <h4 className="text-center">Komik Terbaru</h4>
                        <hr />
                        {komik.homeLatest.map((item) => (
                            <Col key={item.endpoint} xs={6} md={4} lg={3}>
                                <Card>
                                    <Card.Img
                                        variant="top"
                                        src={item.thumb}
                                        onError={ImageOnError}
                                    />
                                    <Card.Body>
                                        <Card.Title className='text-center'>
                                            <Link to={item.endpoint}>
                                                {item.name}
                                            </Link>
                                        </Card.Title>
                                        <Card.Text>
                                            <div className="d-grid gap-2">
                                                <Link to={item.endpoint} className='btn btn-secondary'>Detail</Link>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </>
            )}
        </>
    );
}

    // return (
    //     <>
    //         <Row className='mt-4 justify-content-center'>
    //             <Col>
    //                 <h1 className="text-center">Home</h1>
    //             </Col>
    //         </Row>
    //         <hr />

    //         <Row>
    //             <h3 className="text-center"> Newest Manga </h3>

    //             {komik.map((item) => (
    //                 <Col md={3}>
    //                     <Card style={{ width: 'auto' }}>
    //                         <Card.Img variant='top' src={item.thumb} onError={ImageOnError} />
    //                         <Card.Body>
    //                             <Card.Title className='text-center'>{item.name}</Card.Title>
    //                             {/* detail button */}
    //                             <div className='d-grid gap-2'>
    //                                 <Link to={`${item.endpoint}`} className='btn btn-secondary'>Detail</Link>
    //                             </div>
    //                         </Card.Body>
    //                     </Card>
    //                 </Col>
    //             ))}
    //         </Row>
    //     </>
    // );