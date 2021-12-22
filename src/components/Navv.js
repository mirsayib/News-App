import { Navbar, Container, NavDropdown, Form, Nav, FormControl, Button } from "react-bootstrap"
import { Icon } from "semantic-ui-react"

const Navv = ({setCountry, setSource, setQuery, query, setUrl}) => {
    const handleClick1 = (e) => {
        setCountry(e.currentTarget.getAttribute('value'))
        setSource('')

    }
    const handleClick2 = (e) => {
        setSource(e.currentTarget.getAttribute('value'))
    }

    const handleClick = () => {
        setUrl(`https://newsapi.org/v2/top-headlines?q=${query}&apiKey=0ff0b42ee9954d06803c3e6a809bcc38`)
        setQuery('')
    }

    
    return (
     
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#"><Icon name='world' />News App</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />


            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <NavDropdown title="Country" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3" value = 'in' onClick = {handleClick1}>India</NavDropdown.Item>
                        <NavDropdown.Item href="#action4" value = 'us' onClick = {handleClick1}>USA</NavDropdown.Item>
                        <NavDropdown.Item href="#action5" value = 'ca' onClick = {handleClick1}>Canada</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Source" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3" value='abc-news' onClick={handleClick2}>ABC News</NavDropdown.Item>
                            <NavDropdown.Item href="#action4" value='ary-news' onClick={handleClick2}>ARY News</NavDropdown.Item>
                            <NavDropdown.Item href="#action5" value='bbc-news' onClick={handleClick2}>BBC News</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        value={query}
                        onChange={(e)=>{setQuery(e.target.value)}}
                    />
                    <Button onClick={handleClick} variant="secondary">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
     );
}
 
export default Navv;