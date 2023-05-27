import React, {useState, useEffect} from "react";

import Helmet from "../components/Helmet/Helmet.js"
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import heroImg from "../assets/images/hero.png"
import "../Style/hero-section.css"
import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category.jsx";
import "../Style/home.css"; 
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";
import products from "../assets/fake-data/products.js";

import foodCategoryImg1 from "../assets/images/hamburger.png";
import foodCategoryImg2 from "../assets/images/pizza.png";
import foodCategoryImg3 from "../assets/images/bread.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png"






const featureData =  [
  {
    title :'Quick Delivery',
    imgUrl : featureImg01,
    desc : "Giao hàng nhanh chóng, mang đồ ăn đến cho mọi nhà trong 1 nốt nhạc"
  },
  {
    title :'Super Dine In',
    imgUrl : featureImg02,
    desc : "Giúp bạn có những bữa tối thật đáng nhớ"
  },
  {
    title :'Easy Pick Up',
    imgUrl : featureImg03,
    desc : "Dễ dàng lựa chọn những thứ mà bạn yêu thích"
  }
]

const Home = () => {

  const [category,setCategory] = useState ('ALL')
  const [allProducts, setAllProducts] = useState (products)

  const [hotPizza, setHotPizza] = useState ([])

  useEffect (() => {
      const filteredPizza = products.filter(item => item.category === 'Pizza')
      const slicePizza = filteredPizza.slice (0,4)
      setHotPizza (slicePizza) 

  }, [])

  useEffect (() => {

      if (category === 'ALL') {
        setAllProducts(products)

      }

      if (category==='BURGER') {
        const filterProducts = products.filter(item => item.category === 'Burger')
        setAllProducts(filterProducts)
      }

      if (category==='PIZZA') {
        const filterProducts = products.filter(item => item.category === 'Pizza')
        setAllProducts(filterProducts)
      }

      if (category==='BREAD') {
        const filterProducts = products.filter(item => item.category === 'Bread')
        setAllProducts(filterProducts)
      }

  }, [category])

  return <Helmet title= "Home">
    <section>
      <Container>
        <Row>
          <Col lg ='6' md ='6'>
            <div className="hero__content">
              <h5 className="mb-3">Easy way to make an order</h5>
              <h1 className="mb-4 hero__title "><span>HUNGRY? just wait food at your door</span></h1>
              <p>I would like to thank you for your patronage and loyalty over the last years. We have enjoyed meeting you at the restaurant and taking care of your deliveries</p>
              <div className="hero__btns d-flex align-item-center gap-5 mt-4">
                <button className="order__btn d-flex align-item-center justify-content-between">Order Now
                  <i class="ri-arrow-right-s-line"></i>
                </button>

                <button className="all__foods-btn">
                  <Link to ='/foods'>See all foods</Link> 
                </button>
              </div>
              <div className="hero__service d-flex align-item-center gap-5 mt-5">
                <p d-flex align-item-center gap-2>
                  <span className="shipping__icon ">
                    <i class="ri-car-line"></i>
                  </span>No shipping charge
                </p>

                <p d-flex align-item-center gap-2>
                  <span className="shipping__icon ">
                    <i class="ri-shield-check-line"></i>
                  </span>100% secure checkout
                </p>
              </div>

            </div>
          </Col>

          <Col lg ='6' md ='6'>
            <div className="hero__img">
              <img src={heroImg} alt="hero-img" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="pt-0">
      <Category/>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12' className="text-center">
            <h5 className="feature__subtitle">What we serve</h5>
            <h2 className="feature__title">Just sit back at home</h2>
            <h2 className="feature__title">we will <span>take care</span></h2>
            <p className="mb-1 mt-4 feature__text">
              Luôn chọn lọc những nguyên liệu tốt nhất, công thức đặc trưng để mang đến trải nghiệm tuyệt vời nơi khách hàng.
            </p>
            <p className="feature__text">
              là lựa chọn hoàn hảo cho bữa ăn thơm ngon, dinh dưỡng, tiện lợi và giá cả hợp lý.
            </p>
          </Col>

            {
              featureData.map ((item,index) => (
                <Col lg='4' md='4' key= {index} className="mt-5">
                  <div className="feature__item text-center px-5 py-3" >
                    <img src={item.imgUrl} alt="feature-img " className="w-25" />
                    <h5 className="fw-bold mb-3">{item.title}</h5>
                    <p>{item.desc}</p> 

                  </div>
                </Col>

              ))
            }

          
        
          
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg = '12' className="text-center">
            <h2>Popular Foods</h2>
          </Col>
          <Col lg ='12'>
            <div className="food__category d-flex align-item-center gap-2 justify-content-center gap-4">
              <button className={ `all__btn ${category === 'ALL' ? 'foodBtnActive' :''} ` } 
              onClick={() => setCategory('ALL')}>
                All
              </button>
              
              <button className="{` d-flex align-item-center gap-2 ${category === 'BURGER' ? 'foodBtnActive' :''} `}" 
              onClick={() => setCategory('BURGER')}>
                <img src= {foodCategoryImg1} alt="" />
                Burger
              </button>
             
              <button className= "{` d-flex align-item-center gap-2 ${category === 'PIZZA' ? 'foodBtnActive' :''} `}" 
              onClick={() => setCategory('PIZZA')}>
                <img src= {foodCategoryImg2} alt="" />
                Pizza
              </button>
             
              <button className=" {` d-flex align-item-center gap-2 ${category === 'BREAD' ? 'foodBtnActive' :''} `} " 
              onClick={() => setCategory('BREAD')}>
                <img src= {foodCategoryImg3} alt="" />
                Bread
              </button>
            </div>
          </Col>

          {
            allProducts.map (item => (
              <Col lg='3' md='4' key={item.id} className="mt-5">
                <ProductCard item = {item}/>
              </Col>

            ))
          }  

          
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lag ='6' md ='6'>
            <img src={whyImg} alt="why-tasty-treat" className="w-100 " />
          </Col>

          <Col lag ='6' md ='6'>
            <div className="why__tasty-treat">
              <h2 className="tasty_treat-title mb-4">
                Why <span>Tasty Treat? </span> 
              </h2>
              <p className="tasty__treat-desc ">
                I would like to thank you for your patronage and loyalty over the last years. We have enjoyed meeting you at the restaurant and taking care of your deliveries</p>

              <ListGroup className="mt-5">

                <ListGroupItem className="border-0 ps-0">
                <p className=" choose__us-title d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>
                    Fresh and tasty foods</p>
                <p className="choose__us-desc">
                  Với hơn 5 năm kinh nghiệm cung cấp đặc sản ngon cho tới hàng ngàn khách hàng, YummyFoodShop luôn luôn được đánh giá là nhà cung cấp đặc sản uy tín, đảm bảo chất lượng nhất.Với YummyFoodShop, niềm tin và sự tin tưởng của khách hàng chính là thước đo cho thành công cũng là động lực để YummyFoodShop ngày càng phát triển hơn.</p>
                </ListGroupItem>

                <ListGroupItem className="border-0 ps-0">
                <p className="choose__us-title d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>
                    Quality Support</p>
                <p className="choose__us-desc">
                  YummyFoodShop luôn luôn mang trong mình niềm tin và sứ mệnh gìn giữ nét đẹp mà bao đời nay ông cha ta xây dựng, YummyFoodShop đã và luôn luôn mong muốn mang những đặc sản Việt Nam, những món ăn ngon nhất Việt Nam tới khắp các đại phương tới từng con phố, mọi nơi miền đất Việt Nam để giới thiệu và quảng bá Đặc Sản Việt Nam.</p>
                </ListGroupItem>

                <ListGroupItem className="border-0 ps-0">
                <p className="choose__us-title d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>
                    Order from any location </p>
                <p className="choose__us-desc">
                  YummyFoodShop luôn nỗ lực mang đến cho khách hàng những sản phẩm chất lượng và dịch vụ chăm sóc khách hàng tận tâm nhất!</p>
                </ListGroupItem>

              </ListGroup>

            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12' className="text-center mb-5">
            <h2>Hot Pizza</h2>
          </Col>

          {
             hotPizza.map (item => (
              <Col lg='3' md ='4'key={item.id}>
                <ProductCard item = {item}/>
              </Col>
             ))
          }

        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>

        <Col lg='6' md = '6'>
            <div className="testimonial mb-4">
              <h5 className="testimonial__subtitle mb-5">Testimonial</h5>
              <h2 className="testimonial__title mb-4">
                What out <span>customer </span>are saying
              </h2>

              <p className="testimonial__desc">
                Với hơn 5 năm kinh nghiệm cung cấp đặc sản ngon cho tới hàng ngàn khách hàng, YummyFoodShop luôn luôn được đánh giá là nhà cung cấp đặc sản uy tín, đảm bảo chất lượng nhất
              </p>
            </div>
          </Col>

          <Col lg='6' md = '6'>
            <img src={networkImg} alt="testimonial-img" 
            className="w-100"/>
          </Col>

          

          
        </Row>
      </Container>
    </section>      

  </Helmet>;

};

export default Home;