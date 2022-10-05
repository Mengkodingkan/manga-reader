import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarComponent() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/favicon.ico"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Manga Reader
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}