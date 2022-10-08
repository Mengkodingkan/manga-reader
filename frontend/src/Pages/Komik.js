import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";
import Helmet from "react-helmet";

async function getKomik(endpoint) {
    const response = await fetch(`http://localhost:3568/api/v1/komik/${endpoint}`);
    const json = await response.json();

    return json.data;
}

function ImageOnError(e) {
    e.target.onerror = null;
    const base64img = btoa(e.target.src);

    return (e.target.src = `https://bypass.kato-rest.us/?q=${base64img}`);
}

export default function KomikResponse() {
    const { endpoint } = useParams();
    const [komik, setKomik] = useState([]);

    useEffect(() => {
        getKomik(endpoint).then((data) => {
            setKomik(data);
        });

    }, [endpoint]);

    function ArrComasList(data) {
        if (typeof data != "object" || data.length < 1) return data;

        return data.join(", ");
    }

    function ChapterList(data) {
        if (typeof data != "object" || data.length < 1) return data;

        return data.map((item) => (
            <tr>
                <td>{item.name}</td>
                <td>
                    <div className='d-grid gap-2'>
                        <Link to={`/chapter/${item.endpoint}`} className="btn btn-secondary">Baca Komik</Link>
                    </div>
                </td>
            </tr>
        ));
    }

    return (
        <>
            <Helmet>
                <title>{`Manga Reader • ${komik.title}`}</title>
            </Helmet>

            <Row className="mt-4 justify-content-center">
                <Col>
                    <h1>{komik.title}</h1>
                </Col>
            </Row>

            <hr />
            <Row className="mt-4">
                <Col md={4}>
                    <Image src={komik.thumb} onError={ImageOnError} fluid />
                </Col>

                <Col md={8}>
                    <ListGroup>
                        <ListGroup.Item><b>Judul:</b> {komik.title}</ListGroup.Item>
                        <ListGroup.Item><b>Alternatif:</b> {ArrComasList(komik.alter)}</ListGroup.Item>
                        <ListGroup.Item><b>Status:</b> {komik.status}</ListGroup.Item>
                        <ListGroup.Item><b>Author:</b> {komik.author}</ListGroup.Item>
                        <ListGroup.Item><b>Illustrator:</b> {komik.illustrator} </ListGroup.Item>
                        <ListGroup.Item><b>Genre:</b> {ArrComasList(komik.genre)}</ListGroup.Item>
                        <ListGroup.Item><b>Sinopsis:</b>
                            <br />
                            <p>
                                {komik.synopsis}
                            </p>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>

            <Row className="mt-4 justify-content-center">
                <Col>
                    <h1>Chapter List</h1>
                </Col>
            </Row>
            <hr />

            <Row>
                <Col sm={12} style={{ overflowY: 'scroll', 'height': '400px' }}>
                    <Table striped cellSpacing={0}>
                        <tbody>
                            {ChapterList(komik.chapters)}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </>
    )
}