"use client"
import '../globals.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/slick-carousel/slick/slick.css'
import Link from 'next/link'
import Header from "../Header/header";
import Footer from "../Footer/footer";
// import useMountEffect from "./faq"; // Path to your custom hook
// import jQuery from "jquery";
// import $ from "jquery";
// import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import "../../../node_modules/slick-carousel/slick/slick";



function FreightServices() {
    // useMountEffect(() => {
    //     $(".counter").each(function () {
    //       var $this = $(this),
    //         countTo = $this.attr("data-count");
    //       $({ countNum: $this.text() }).animate(
    //         {
    //           countNum: countTo,
    //         },
    //         {
    //           duration: 2000,
    //           easing: "linear",
    //           step: function () {
    //             $this.text(Math.floor(this.countNum));
    //           },
    //           complete: function () {
    //             $this.text(this.countNum);
    //           },
    //         }
    //       );
    //     });
    
    //     $(".hero").slick({
    //       dots: true,
    //       infinite: true,
    //       speed: 500,
    //       fade: true,
    //       cssEase: "linear",
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       autoplay: true,
    //       autoplaySpeed: 8000,
    //       draggable: true,
    //       arrows: false,
    //       responsive: [
    //         {
    //           breakpoint: 1024,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             infinite: true,
    //           },
    //         },
    //         {
    //           breakpoint: 768,
    //           settings: {
    //             draggable: true,
    //           },
    //         },
    //         {
    //           breakpoint: 600,
    //           settings: {
    //             slidesToShow: 1,
    //             draggable: true,
    //             slidesToScroll: 1,
    //           },
    //         },
    //         {
    //           breakpoint: 480,
    //           settings: {
    //             slidesToShow: 1,
    //             draggable: true,
    //             slidesToScroll: 1,
    //           },
    //         },
    //       ],
    //     });
    //   });
    return (
        <div>

            <Header />
            {/* <!-- Header Section Ends -->

    <!-- Hero Section Start --> */}
            <section class="cus-hero-sec">
                <div class="row">
                    <div class="col-md-12">
                        <div class="w-100 h-100 position-relative">
                            <img class="w-100 img-fluid cover" src="images/hero-freight-forwarding.png" alt="" />
                            <h1 class="m-0 text-center text-uppercase position-absolute top-50 start-50 translate-middle text-white">Freight Forwarding</h1>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Hero Section Ends -->

    <!-- Experience Contects Section Start --> */}
            <section class="py-5 cus-experience-rra">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-11 mx-auto pt-3">
                            <div class="row align-items-center">
                                <div class="col-md-6 px-5">
                                    <h2 class="mb-3 text-uppercase">
                                        Experience Hassle-Free Global Shipping with <span class="text-orange">RRA</span>.
                                    </h2>
                                    <p>Our comprehensive suite of services encompasses truckload freight, intermodal solutions, ocean freight, and air cargo transport. Rest assured, your cargo receives top-notch care and efficiency when you partner with us.</p>
                                    <button type="submit" class="btn-primary btn-lg mt-4 py-3 px-4">
                                        <span class="d-flex align-items-center justify-content-center text-uppercase">
                                            I am Interested
                                            <svg class="ms-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="white" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                <div class="col-md-6 px-5 grid-experience">
                                    <img class="w-100 img-fluid cover " src="images/grid-experience.png" alt="" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Experience Contects Section Ends -->

    <!-- Experience Contects Section Start --> */}
            <section class="py-5 cus-experience-rra">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6 my-3">
                            <div class="w-100 h-100 p-5 bg-secondary-dark">
                                <h3 class="text-white text-uppercase mb-4">Freight services</h3>
                                <p class="text-white mb-4">We provide a range of transportation options, such as ground shipping, ocean freight, and air cargo. Our border-crossing experience is flawless, insuring a 100% success rate.</p>
                                <Link href="/FreightServices2">
                                    <span className="btn btn-primary btn-outline btn-lg mt-4">
                                        <span className="d-flex align-items-center justify-content-center">
                                            Learn More
                                            <svg className="ms-3" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                <path d="M16.6716 10.9999L11.3076 5.63589L12.7218 4.22168L20.5 11.9999L12.7218 19.778L11.3076 18.3638L16.6716 12.9999H4.5V10.9999H16.6716Z" fill="#FE7C04" />
                                            </svg>
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div class="col-md-6 my-3">
                            <div class="w-100 h-100 p-5 bg-secondary-dark">
                                <h3 class="text-white text-uppercase mb-4">Shipment tracking</h3>
                                <p class="text-white mb-4">Transparency is a core value we follow. We believe in an open and honest process that our customers can trust. That's why we provide real-time tracking for all cargo shipments, ensuring you're always in the know about your goods' whereabouts. As understand that real-time information is crucial for effective supply chain management.</p>
                                <Link href='/ShipmentTracking'>
                                    <span type="submit" class="btn btn-primary btn-outline btn-lg mt-4">
                                        <span class="d-flex align-items-center justify-content-center">
                                            Learn More
                                            <svg class="ms-3" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                <path d="M16.6716 10.9999L11.3076 5.63589L12.7218 4.22168L20.5 11.9999L12.7218 19.778L11.3076 18.3638L16.6716 12.9999H4.5V10.9999H16.6716Z" fill="#FE7C04" />
                                            </svg>
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div class="col-md-6 my-3">
                            <div class="w-100 h-100 p-5 bg-secondary-dark">
                                <h3 class="text-white text-uppercase mb-4">NO Mini-Max Weight Limit</h3>
                                <p class="text-white mb-4">Unlimited cargo capacity, transparent pricing, and prompt deliveries. We handle shipments of all sizes with no hidden costs. Your logistics are made simple, efficient, and reliable.</p>
                                <button type="submit" class="btn btn-primary btn-outline btn-lg mt-4">
                                    <span class="d-flex align-items-center justify-content-center">
                                        Learn More
                                        <svg class="ms-3" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                            <path d="M16.6716 10.9999L11.3076 5.63589L12.7218 4.22168L20.5 11.9999L12.7218 19.778L11.3076 18.3638L16.6716 12.9999H4.5V10.9999H16.6716Z" fill="#FE7C04" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div class="col-md-6 my-3">
                            <div class="w-100 h-100 p-5 bg-secondary-dark">
                                <h3 class="text-white text-uppercase mb-4">Trade Show Freight</h3>
                                <p class="text-white mb-4">Elevate your trade show success. RRA excels in meticulous planning, seamless coordination, and reliable transport of trade show materials, guaranteeing your exhibitions' resounding success.</p>
                                <button type="submit" class="btn btn-primary btn-outline btn-lg mt-4">
                                    <span class="d-flex align-items-center justify-content-center">
                                        Learn More
                                        <svg class="ms-3" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                            <path d="M16.6716 10.9999L11.3076 5.63589L12.7218 4.22168L20.5 11.9999L12.7218 19.778L11.3076 18.3638L16.6716 12.9999H4.5V10.9999H16.6716Z" fill="#FE7C04" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Frequently Asked Questions Start --> */}
            <section class="py-5 cus-faq-sec">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <h2 class="text-center text-uppercase">Frequently Asked Questions</h2>
                        </div>
                        <div class="col-md-9 mx-auto my-5">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Do you handle hazardous materials transportation?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <p>Yes, we excel in handling hazardous materials and adhering to stringent safety regulations. Our RRA team is well-trained in compliance with international laws, proper packaging, labeling, and documentation for the secure transportation of hazardous goods.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Can you handle oversized or specialized cargo?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Can you assist with return shipments or reverse logistics?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Frequently Asked Questions Ends -->
    
    <!-- Footer Section Start --> */}
            <Footer />

        </div>
    )
}

export default FreightServices
