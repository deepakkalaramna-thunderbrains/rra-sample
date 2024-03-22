"use client"
import '../globals.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/slick-carousel/slick/slick.css'
import Header from "../Header/header";
import Footer from "../Footer/footer";

function About() {
    return (
        <>
            <Header />

            <section class="cus-hero-sec">
                <div class="row">
                    <div class="col-md-12">
                        <div class="w-100 h-100 position-relative">
                            <img class="w-100 img-fluid cover" src="images/hero-about-us.jpg" height="500" width="500" />
                            <h1 class="m-0 text-center text-uppercase position-absolute top-50 start-50 translate-middle text-white font-900">About Us</h1>
                        </div>
                    </div>
                </div>
            </section>


            <section class="py-5 cus-about-contents">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-9 mx-auto py-5">
                            <h2 class="m-0 text-center text-uppercase"><span class="text-orange">RRA Group</span> is a North American logistics and supply chain provider with a unique IT-driven approach</h2>
                        </div>
                        <div class="col-md-11 mx-auto pt-3">
                            <div class="row align-items-center">
                                <div class="col-md-6 px-5">
                                    <img class="w-100 img-fluid cover" src="images/plane-trucks-are-flying.jpg" alt="" />
                                </div>
                                <div class="col-md-6 px-5">
                                    <h3>Founded by Gursewak Singh,</h3>
                                    <p>RRA Group (Rapid Resourceful Approach) is a North American logistics and supply chain provider with a unique IT-driven approach. We operate under three distinct entities, including RRA Trucking Ltd. in Canada, RRA Trucking Inc. in the USA, and HGA Logistics in Canada.</p>
                                    <p>Just like our name, we embody a rapid and resourceful approach to providing comprehensive logistics solutions. We specialize in end-to-end services, from efficient customs clearance to a wide array of versatile transportation modes. In addition, we offer multiple e-commerce software solutions that empower your business for success in today's highly competitive landscape. All our endeavors are driven by a strong focus on sustainability and ensuring a brighter future.</p>
                                    <button type="submit" class="btn-primary btn-lg mt-4 py-3 px-4">
                                        <span class="d-flex align-items-center justify-content-center text-uppercase">
                                            Take My Order
                                            <svg class="ms-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="white" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="py-5 mb-5 cus-our-mission">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="w-100 h-100 position-relative ">
                                <img class="w-100 img-fluid cover" src="images/our-mission.jpg" width="500" height="500" alt="" />
                                <div class="w-100 position-absolute top-50 start-50 translate-middle py-5 px-2 text-center">
                                    <h2 class="m-0 text-uppercase text-white">About Us</h2>
                                    <p class="m-0 pt-4 text-white">Our mission is simple: wholeheartedly serving our customers by simplifying modern logistics <br /> complexities, ensuring timely deliveries, and promoting sustainability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="py-5 cus-client-testimonials">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6 ms-auto py-3">
                            <div class="testimonial-sec overflow-hidden">
                                <h3 class="text-white text-uppercase pb-4 mb-4">Testimonials</h3>
                                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active" data-bs-interval="2000">
                                            <div class="carousel-caption">
                                                <p class="text-white">"RRA has been our logistics partner for over adecade, and they continue to exceed our expectations. Their commitment toreliability and safety is unmatched. Whether it's a local delivery or a complexcross-country shipment, they handle every aspect with precision. RRA Group hastruly become an integral part of our supply chain, contributing significantlyto our success. We couldn't ask for a better logistics partner."</p>
                                                <h6 class="m-0 text-white">John Smith</h6>
                                                <span class="text-white">CEO, Smith Electronics Inc.</span>
                                            </div>
                                        </div>
                                        <div class="carousel-item" data-bs-interval="4000">
                                            <div class="carousel-caption">
                                                <p class="text-white">"RRA has been our logistics partner for over adecade, and they continue to exceed our expectations. Their commitment toreliability and safety is unmatched. Whether it's a local delivery or a complexcross-country shipment, they handle every aspect with precision. RRA Group hastruly become an integral part of our supply chain, contributing significantlyto our success. We couldn't ask for a better logistics partner."</p>
                                                <h6 class="m-0 text-white">John Smith</h6>
                                                <span class="text-white">CEO, Smith Electronics Inc.</span>
                                            </div>
                                        </div>
                                        <div class="carousel-item" data-bs-interval="6000">
                                            <div class="carousel-caption">
                                                <p class="text-white">"RRA has been our logistics partner for over adecade, and they continue to exceed our expectations. Their commitment toreliability and safety is unmatched. Whether it's a local delivery or a complexcross-country shipment, they handle every aspect with precision. RRA Group hastruly become an integral part of our supply chain, contributing significantlyto our success. We couldn't ask for a better logistics partner."</p>
                                                <h6 class="m-0 text-white">John Smith</h6>
                                                <span class="text-white">CEO, Smith Electronics Inc.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <rect width="40" height="40" fill="white" fill-opacity="0.1" />
                                            <path d="M14.7855 18.7144L21.4905 11.8182L19.7227 10L10 20.0001L19.7227 30L21.4905 28.1818L14.7855 21.2857H30V18.7144H14.7855Z" fill="white" />
                                        </svg>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <rect width="40" height="40" fill="white" fill-opacity="0.1" />
                                            <path d="M25.2145 18.7144L18.5095 11.8182L20.2773 10L30 20.0001L20.2773 30L18.5095 28.1818L25.2145 21.2857H10V18.7144H25.2145Z" fill="white" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="quote-mark">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="202" height="176" viewBox="0 0 202 176" fill="none">
                                        <path d="M196.594 67.624C207.025 78.6973 212.626 91.125 212.626 111.271C212.626 146.702 187.754 178.466 151.567 194.165L142.528 180.217C176.298 161.945 182.897 138.246 185.536 123.302C180.099 126.114 172.981 127.102 166.004 126.456C147.734 124.762 133.335 109.764 133.335 91.125C133.335 71.5534 149.201 55.6875 168.773 55.6875C179.638 55.6875 190.027 60.6533 196.594 67.624ZM95.3443 67.624C105.775 78.6973 111.376 91.125 111.376 111.271C111.376 146.702 86.5042 178.466 50.3166 194.165L41.2781 180.217C75.0474 161.945 81.6475 138.246 84.2856 123.302C78.8485 126.114 71.7311 127.102 64.7536 126.456C46.4844 124.762 32.0859 109.764 32.0859 91.125C32.0859 71.5534 47.9518 55.6875 67.5234 55.6875C78.3881 55.6875 88.7777 60.6533 95.3443 67.624Z" fill="white" fill-opacity="0.1" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default About