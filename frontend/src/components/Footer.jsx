import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row className='align-items-center'>
          <Col md={6} className='text-center text-md-start py-2'>
            <p style={{ margin: 0 }}>ProShop &copy; {currentYear}</p>
          </Col>
          <Col md={6} className='text-center text-md-end py-2'>
            <a href='https://github.com/' target='_blank' rel='noopener noreferrer' aria-label='GitHub'><FaGithub size={24} /></a>
            <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer' aria-label='Twitter'><FaTwitter size={24} /></a>
            <a href='https://linkedin.com/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'><FaLinkedin size={24} /></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
