import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import { Helmet } from "react-helmet";
import Image from "react-bootstrap/Image";

async function getChapter(endpoint) {
    const response = await fetch(`http://localhost:3568/api/v1/chapter/${endpoint}`);
    const json = await response.json();

    return json.data;
}

export default function ChapterResponse() {
    const { endpoint } = useParams();
    console.log(`http://localhost:3568/api/v1/chapter/${endpoint}`);
    const [chapter, setChapter] = useState({});

    useEffect(() => {
        getChapter(endpoint).then((data) => {
            setChapter(data);
        });
    }, [endpoint]);

    function ChapterImage(data) {
        if (typeof data != "object" || data.length < 1) return data;

        return data.map((item) => (
            <Image src={item} fluid />
        ));
    }

    return (
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
    )
}