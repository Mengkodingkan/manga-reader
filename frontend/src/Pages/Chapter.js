import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import { Helmet } from "react-helmet";
import Image from "react-bootstrap/Image";

async function getChapter(endpoint) {
    const response = await fetch(`http://localhost:3568/api/v1/komikindo/chapter/${endpoint}`);
    const json = await response.json();

    return json.data;
}

function ImageOnError(e) {
    e.target.onerror = null;

    let src = e.target.src;
    if (src.includes("i2.wp.com")) src = src.replace("i2.wp.com", "cdn.statically.io/img");
    const base64img = btoa(src);

    return (e.target.src = 'https://bypass.kato-rest.us/?q=' + base64img);
}

function ChapterImage(data) {
    if (typeof data != "object" || data.length < 1) return data;

    return data.map((item) => (
        <Image src={item} onError={ImageOnError} fluid />
    ));
}


export default function ChapterResponse() {
    const { endpoint } = useParams();
    const [chapter, setChapter] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getChapter(endpoint).then((data) => {
            setChapter(data);
            setLoading(false);
        });
    }, [endpoint]);


    return (
        <>
            {loading ? (
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
                        <title>{`Manga Reader • ${chapter.title}`}</title>
                    </Helmet>

                    <Row className="mt-4">
                        <h2> {chapter.title} </h2>
                    </Row>

                    <hr />

                    <Row className="mt-4">
                        {ChapterImage(chapter.images)}
                    </Row>
                </>
            )}
        </>
    )
}