import React from "react";
import { Container,Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import  "../../Style/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return  (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3'md='4'sm ='6'> 
            <div className="footer__logo text-start">
            <img src={logo} alt="logo" />
              <h5> Tasty Treat </h5>
              <p>Ăn mà ngại là chỉ có hại cho bao tử mà thôi.</p>
            </div>
          </Col>

          <Col lg='3'md='4'sm ='6'>
            <h5>Delivery Time</h5>
            <ListGroup>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Monday - Saturday</span>
                <p>7:00am - 9:00pm</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0"> 
                <span>Sunday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='3'md='4'sm ='6'>
          <h5>Contact</h5>
            <ListGroup>
            <ListGroupItem className="delivery__time-item border-0 ps-0">
                <p>Location: Kp1 Long Bình Tân, Biên Hòa - Đồng Nai</p>
               
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone: 0792691511</span>
               
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0"> 
                <span>Email: nvcuong1502@gmail.com</span>
                
              </ListGroupItem>
            </ListGroup> 
            </Col>
          
          <Col lg='3'md='4'sm ='6'> 
          <h5>Newsletter</h5>
            <p>Subscrible for newsletter</p>
              <div className="newsletter">
                 <input type="email" placeholder="Enter your email" />
                    <span> 
                      <i class="ri-send-plane-line"></i> 
                    </span>
              </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg='6' md='6' >
            <p className="copyright__text">
              Copyright - 2023, website make by Cuong dev
            </p>
          </Col>
          <Col lg='6' md='6' >
            <div className="social__links d-flex align-item-center gap-3 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                <Link to = 'https://www.facebook.com/shipganhanh'>
                <i class="ri-facebook-box-fill "  ></i>
                </Link>
              </span>
              <span>
                <Link to = 'https://github.com/CuongNguyen97'>
                <i class="ri-github-line"></i>
                </Link>
              </span>
              <span>
                <Link to = 'https://www.youtube.com/watch?v=lnY5hOGqJZE'>
                <i class="ri-youtube-fill"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;