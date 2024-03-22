"use client"
import '../globals.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/slick-carousel/slick/slick.css'
import Header from "../Header/header";
import Footer from "../Footer/footer";

function ShipmentTracking() {
    return (
        <>
            <Header />
            {/* <!-- Header Section Ends -->

    <!-- Hero Section Start --> */}
            <section class="cus-hero-sec">
                <div class="row">
                    <div class="col-md-12">
                        <div class="w-100 h-100 position-relative">
                            <img class="w-100 img-fluid cover" src="images/hero-plane-trucks-are-flying.jpg" alt="" />
                            <h1 class="m-0 text-center text-uppercase position-absolute top-50 start-50 translate-middle text-white">Freight Services</h1>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Hero Section Ends -->

    <!-- Shipment Tracking Contects Section Start --> */}
            <section class="py-5 mb-5 cus-shipment-tracking">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-11 mx-auto py-5">
                            <h2 class="mb-3 text-center text-uppercase">Stay Informed Every Step of the Way</h2>
                        </div>
                        <div class="col-md-11 mx-auto pt-3">
                            <div class="row align-items-center">
                                <div class="col-md-6 px-5">
                                    <ul class="list-unstyled p-0">
                                        <li class="w-100 d-flex align-items-start mb-3">
                                            <div class="list-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                    <path d="M19.9997 36.6666C10.7949 36.6666 3.33301 29.2046 3.33301 19.9999C3.33301 10.7952 10.7949 3.33325 19.9997 3.33325C29.2043 3.33325 36.6663 10.7952 36.6663 19.9999C36.6663 29.2046 29.2043 36.6666 19.9997 36.6666ZM21.6663 19.9999V11.6666H18.333V23.3333H28.333V19.9999H21.6663Z" fill="#FE7C04" />
                                                </svg>
                                            </div>
                                            <div class="list-con">
                                                <h4>Timely Updates:</h4>
                                                <p>Receive regular updates on your cargo's journey, including estimated arrival times, potential delays, and any other important details.</p>
                                            </div>
                                        </li>
                                        <li class="w-100 d-flex align-items-start mb-3">
                                            <div class="list-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                    <path d="M18.3333 3.33325C25.1125 3.33325 30.71 8.39262 31.5562 14.9415L35.307 20.8394C35.554 21.2278 35.5042 21.8078 34.9322 22.0528L31.6667 23.4516V28.3333C31.6667 30.1743 30.1743 31.6666 28.3333 31.6666H25.0017L25 36.6666H10L10.0004 30.5101C10.0005 28.5419 9.27252 26.6811 7.92583 25.0018C6.09512 22.7188 5 19.8206 5 16.6666C5 9.30278 10.9695 3.33325 18.3333 3.33325ZM17.4495 12.9375C16.3104 11.7985 14.4637 11.7985 13.3247 12.9375C12.1856 14.0766 12.1856 15.9233 13.3247 17.0623L18.3333 22.0709L23.342 17.0623C24.481 15.9233 24.481 14.0766 23.342 12.9375C22.203 11.7985 20.3562 11.7985 19.2172 12.9375L18.3333 13.8214L17.4495 12.9375Z" fill="#FE7C04" />
                                                </svg>
                                            </div>
                                            <div class="list-con">
                                                <h4>Peace of Mind:</h4>
                                                <p>With our shipment tracking system, you can have peace of mind knowing exactly where your cargo is and when it will arrive at its destination.</p>
                                            </div>
                                        </li>
                                        <li class="w-100 d-flex align-items-start mb-3">
                                            <div class="list-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                    <path d="M30.0513 27.6946L37.1892 34.8324L34.8322 37.1894L27.6943 30.0516C25.1278 32.1049 21.873 33.3333 18.333 33.3333C10.053 33.3333 3.33301 26.6133 3.33301 18.3333C3.33301 10.0533 10.053 3.33325 18.333 3.33325C26.613 3.33325 33.333 10.0533 33.333 18.3333C33.333 21.8733 32.1047 25.1281 30.0513 27.6946ZM26.7075 26.4579C28.7455 24.3576 29.9997 21.4926 29.9997 18.3333C29.9997 11.8874 24.7788 6.66659 18.333 6.66659C11.8872 6.66659 6.66634 11.8874 6.66634 18.3333C6.66634 24.7791 11.8872 29.9999 18.333 29.9999C21.4923 29.9999 24.3573 28.7458 26.4577 26.7078L26.7075 26.4579ZM20.2962 11.9603C19.1387 12.483 18.333 13.6474 18.333 14.9999C18.333 16.8409 19.8253 18.3333 21.6663 18.3333C23.0188 18.3333 24.1833 17.5276 24.706 16.3701C24.8968 16.9908 24.9997 17.6499 24.9997 18.3333C24.9997 22.0151 22.0148 24.9999 18.333 24.9999C14.6511 24.9999 11.6663 22.0151 11.6663 18.3333C11.6663 14.6514 14.6511 11.6666 18.333 11.6666C19.0163 11.6666 19.6755 11.7694 20.2962 11.9603Z" fill="#FE7C04" />
                                                </svg>
                                            </div>
                                            <div class="list-con">
                                                <h4>Enhanced Visibility:</h4>
                                                <p>Gain a competitive edge in your supply chain with enhanced visibility. Make well-informed choices relying on precise and current data.</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <button type="submit" class="btn-primary btn-lg mt-4 py-3 px-4">
                                        <span class="d-flex align-items-center justify-content-center text-uppercase">
                                            Connect With us
                                            <svg class="ms-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="white" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                <div class="col-md-6 px-5">
                                    <img class="w-100 img-fluid cover" src="images/digital-composite-businessman-working-map.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Shipment Tracking Contects Section Ends -->
    
    <!-- Clients Testimonials Section Start --> */}
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
            {/* <!-- Clients Testimonials Section Ends -->

    <!-- Footer Section Start --> */}
            <Footer />
            {/* <!-- Footer Section Ends --> */}


        </>
    )
}

export default ShipmentTracking