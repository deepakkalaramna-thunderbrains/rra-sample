'use client';
import "../globals.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
// import './index'

export default function Main() {
  const counters = {
    satisfiedCustomers: 800,
    yearsOfExperience: 10,
    successRate: 100,
  };
  return (
    <>
      {/* <!-- Slider Section Start --> */}
      <section class="position-relative cus-banner overflow-hidden">
        <div class="hero" data-arrows="true" data-autoplay="true">
          <div class="hero-slide text-center">
            <img alt="" class="img-fluid cover" src="images/slider-01.png" />
            <div class="header-content text-white position-absolute slide-content col-lg-12">
              <h1 class="p-0 m-0 text-white text-uppercase">
                Asset - Based Carrier <br />& Third-Party Logistics
              </h1>
              <div class="btns-group mt-4">
                <button type="button" class="btn btn-primary btn-lg">
                  Get a Quote
                </button>
                <button type="button" class="btn btn-secondary btn-lg">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Slider Section Ends -->

    <!-- About RRA Group Section Start --> */}
      <section class="py-5 cus-about-rra-group">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-5">
              <h2 class="mt-5 mb-3 text-uppercase text-white ">
                About RRA Group
              </h2>
              <p class="text-white">
                Since 2013, RRA Group has been at the forefront of the logistics
                industry, earning anexcellent safety rating and a reputation for
                impeccable delivery timings.
              </p>
              <p class="text-white">
                As your trusted partner, we understand the challenges in cargo
                transportation. Our commitment is encapsulated in the phrase,{" "}
                <br />
                <b>"From Cargo Challenges to Solutions."</b>
              </p>
              <button type="submit" class="btn btn-primary btn-lg mt-4">
                <span class="d-flex align-items-center justify-content-center">
                  More About Us
                  <svg
                    class="ms-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About RRA Group Section Ends -->

    <!-- Nubering Section Start --> */}
      <section class="py-5 cus-numbering">
        <div class="container-fluid">
          <div class="row" id="circle">
            <div class="col-sm-4 text-center numbering-list">
              <h2 class="counter text-black m-0 plus" data-count="800">{counters.satisfiedCustomers}</h2>
              <h6 class="mt-2 mb-0 text-uppercase text-white">
                Satisfied Customers
              </h6>
            </div>
            <div class="col-sm-4 text-center numbering-list">
              <h2 class="counter text-black m-0 plus" data-count="10">{counters.yearsOfExperience}</h2>
              <h6 class="mt-2 mb-0 text-uppercase text-white">
                Years of Experience
              </h6>
            </div>
            <div class="col-sm-4 text-center numbering-list">
              <h2 class="counter text-black m-0 percent" data-count="100">{counters.successRate}</h2>
              <h6 class="mt-2 mb-0 text-uppercase text-white">
                Success Rate
              </h6>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Nubering Section Ends -->

    <!-- Our Services Section Start --> */}
      <section class="pt-5 cus-our-services">
        <div class="row">
          <div class="col-md-12 py-4">
            <h2 class="m-0 text-center text-uppercase">Our Key Services</h2>
          </div>
          <div class="col-md-12">
            <div class="row m-0 cus-gap">
              <div class="col-md-4 p-0 service-list">
                <div class="service-inner position-relative overflow-hidden">
                  <img
                    class="w-100 img-fluid"
                    src="images/service-01.png"
                    alt=""
                  />
                  <div class="service-grid-con">
                    <h4 class="text-white text-uppercase mb-3">CARRIER</h4>
                    <p class="text-white m-0">
                      With reliable asset-basedcapacity solutions for all your
                      FTL and LTL requirements. We prioritize safetyand uphold
                      the highest standards of reliability at every step
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 p-0 service-list">
                <div class="service-inner position-relative overflow-hidden">
                  <img
                    class="w-100 img-fluid"
                    src="images/brokerage.png"
                    alt=""
                  />
                  <div class="service-grid-con">
                    <h4 class="text-white text-uppercase mb-3">BROKERAGE</h4>
                    <p class="text-white m-0">
                      With reliable asset-basedcapacity solutions for all your
                      FTL and LTL requirements. We prioritize safetyand uphold
                      the highest standards of reliability at every step
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 p-0 service-list">
                <div class="service-inner position-relative overflow-hidden">
                  <img
                    class="w-100 img-fluid"
                    src="images/freight-forwarding.png"
                    alt=""
                  />
                  <div class="service-grid-con">
                    <h4 class="text-white text-uppercase mb-3">
                      FREIGHT FORWARDING
                    </h4>
                    <p class="text-white m-0">
                      With reliable asset-basedcapacity solutions for all your
                      FTL and LTL requirements. We prioritize safetyand uphold
                      the highest standards of reliability at every step
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 p-0 service-list">
                <div class="service-inner position-relative overflow-hidden">
                  <img
                    class="w-100 img-fluid"
                    src="images/dedicated.png"
                    alt=""
                  />
                  <div class="service-grid-con">
                    <h4 class="text-white text-uppercase mb-3">DEDICATED</h4>
                    <p class="text-white m-0">
                      With reliable asset-basedcapacity solutions for all your
                      FTL and LTL requirements. We prioritize safetyand uphold
                      the highest standards of reliability at every step
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 p-0 service-list">
                <div class="service-inner position-relative overflow-hidden">
                  <img
                    class="w-100 img-fluid"
                    src="images/intermodal.png"
                    alt=""
                  />
                  <div class="service-grid-con">
                    <h4 class="text-white text-uppercase mb-3">INTERMODAL</h4>
                    <p class="text-white m-0">
                      With reliable asset-basedcapacity solutions for all your
                      FTL and LTL requirements. We prioritize safetyand uphold
                      the highest standards of reliability at every step
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 p-0 service-list">
                <div class="service-inner position-relative overflow-hidden">
                  <img
                    class="w-100 img-fluid"
                    src="images/warehousing.png"
                    alt=""
                  />
                  <div class="service-grid-con">
                    <h4 class="text-white text-uppercase mb-3">WAREHOUSING</h4>
                    <p class="text-white m-0">
                      With reliable asset-basedcapacity solutions for all your
                      FTL and LTL requirements. We prioritize safetyand uphold
                      the highest standards of reliability at every step
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Our Services Section Ends -->

    <!-- Who We Are Section Start --> */}
      <section class="py-5 mb-5 who-we-are-group position-relative">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-7 p-0 who-we-track">
              <img class="img-fluid" src="images/who-we-track.png" alt="" />
            </div>
            <div class="col-md-5 position-relative ms-auto">
              <h2 class="mt-5 mb-3 text-uppercase text-white">WHY RRA GROUP</h2>
              <p class="text-white">
                We have been delivering a decade of excellence in logistics.
                Trust us for reliable, timely services, comprehensive solutions,
                and cost-effectiveness. Our customer-centric approach, extensive
                North American fleet, and commitment to tailored partnerships
                make us your smart choice for supply chain success. Choose RRA
                Group and enhance your logistics experience.
              </p>
              <button type="submit" class="btn btn-primary btn-lg mt-4">
                <span class="d-flex align-items-center justify-content-center">
                  Connect with us
                  <svg
                    class="ms-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Who We Are Section Ends -->

    <!-- Our Services Section Start --> */}
      <section class="py-5 mb-5 cus-rra-group-companies">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 py-5">
                    <h2 class="m-0 text-center text-uppercase">RRA GROUP COMPANIES</h2>
                </div>
                <div class="col-md-4">
                    <div class="oragne-gradient p-5 h-100">
                        <img class="d-flex align-items-center justify-content-center img-fluid contain" src="images/company-logo.png" alt=""></img>
                        <h4 class="text-white text-uppercase my-4 pt-2">RRA Trucking Ltd</h4>
                        <button type="submit" class="btn btn-primary btn-lg">
                            <span class="d-flex align-items-center justify-content-center">
                                Visit Website
                                <svg class="ms-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="white"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="oragne-gradient p-5 h-100">
                        <img class="d-flex align-items-center justify-content-center img-fluid contain" src="images/company-logo.png" alt=""></img>
                        <h4 class="text-white text-uppercase my-4 pt-2">RRA Trucking Inc.</h4>
                        <button type="submit" class="btn btn-primary btn-lg">
                            <span class="d-flex align-items-center justify-content-center">
                                Visit Website
                                <svg class="ms-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="white"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="oragne-gradient p-5 h-100">
                        <img class="d-flex align-items-center justify-content-center img-fluid contain" src="images/company-logo.png" alt=""></img>
                        <h4 class="text-white text-uppercase my-4 pt-2">HGA Logistics Inc.</h4>
                        <button type="submit" class="btn btn-primary btn-lg">
                            <span class="d-flex align-items-center justify-content-center">
                                Visit Website
                                <svg class="ms-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="white"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* <!-- Clients Testimonials Section Start --> */}
      <section class="py-5 cus-client-testimonials">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 ms-auto py-3">
              <div class="testimonial-sec overflow-hidden">
                <h3 class="text-white text-uppercase pb-4 mb-4">
                  Testimonials
                </h3>
                <div
                  id="carouselExampleCaptions"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                      <div class="carousel-caption">
                        <p class="text-white">
                          "RRA has been our logistics partner for over adecade,
                          and they continue to exceed our expectations. Their
                          commitment toreliability and safety is unmatched.
                          Whether it's a local delivery or a
                          complexcross-country shipment, they handle every
                          aspect with precision. RRA Group hastruly become an
                          integral part of our supply chain, contributing
                          significantlyto our success. We couldn't ask for a
                          better logistics partner."
                        </p>
                        <h6 class="m-0 text-white">John Smith</h6>
                        <span class="text-white">
                          CEO, Smith Electronics Inc.
                        </span>
                      </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="4000">
                      <div class="carousel-caption">
                        <p class="text-white">
                          "RRA has been our logistics partner for over adecade,
                          and they continue to exceed our expectations. Their
                          commitment toreliability and safety is unmatched.
                          Whether it's a local delivery or a
                          complexcross-country shipment, they handle every
                          aspect with precision. RRA Group hastruly become an
                          integral part of our supply chain, contributing
                          significantlyto our success. We couldn't ask for a
                          better logistics partner."
                        </p>
                        <h6 class="m-0 text-white">John Smith</h6>
                        <span class="text-white">
                          CEO, Smith Electronics Inc.
                        </span>
                      </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="6000">
                      <div class="carousel-caption">
                        <p class="text-white">
                          "RRA has been our logistics partner for over adecade,
                          and they continue to exceed our expectations. Their
                          commitment toreliability and safety is unmatched.
                          Whether it's a local delivery or a
                          complexcross-country shipment, they handle every
                          aspect with precision. RRA Group hastruly become an
                          integral part of our supply chain, contributing
                          significantlyto our success. We couldn't ask for a
                          better logistics partner."
                        </p>
                        <h6 class="m-0 text-white">John Smith</h6>
                        <span class="text-white">
                          CEO, Smith Electronics Inc.
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <rect
                        width="40"
                        height="40"
                        fill="white"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M14.7855 18.7144L21.4905 11.8182L19.7227 10L10 20.0001L19.7227 30L21.4905 28.1818L14.7855 21.2857H30V18.7144H14.7855Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <rect
                        width="40"
                        height="40"
                        fill="white"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M25.2145 18.7144L18.5095 11.8182L20.2773 10L30 20.0001L20.2773 30L18.5095 28.1818L25.2145 21.2857H10V18.7144H25.2145Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                <div class="quote-mark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="202"
                    height="176"
                    viewBox="0 0 202 176"
                    fill="none"
                  >
                    <path
                      d="M196.594 67.624C207.025 78.6973 212.626 91.125 212.626 111.271C212.626 146.702 187.754 178.466 151.567 194.165L142.528 180.217C176.298 161.945 182.897 138.246 185.536 123.302C180.099 126.114 172.981 127.102 166.004 126.456C147.734 124.762 133.335 109.764 133.335 91.125C133.335 71.5534 149.201 55.6875 168.773 55.6875C179.638 55.6875 190.027 60.6533 196.594 67.624ZM95.3443 67.624C105.775 78.6973 111.376 91.125 111.376 111.271C111.376 146.702 86.5042 178.466 50.3166 194.165L41.2781 180.217C75.0474 161.945 81.6475 138.246 84.2856 123.302C78.8485 126.114 71.7311 127.102 64.7536 126.456C46.4844 124.762 32.0859 109.764 32.0859 91.125C32.0859 71.5534 47.9518 55.6875 67.5234 55.6875C78.3881 55.6875 88.7777 60.6533 95.3443 67.624Z"
                      fill="white"
                      fill-opacity="0.1"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Clients Testimonials Section Ends -->

    <!-- Join Our Team Section Start --> */}
      <section class="py-5 my-5 cus-joim-our-team text-center">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 mx-auto">
              <h2 class="mb-3 text-uppercase">JOIN OUR TEAM</h2>
              <p>
                At RRA Group, personal growth is at the heart of our culture. We
                activelyinvest in our team's development, fostering a supportive
                environment for themto thrive and become their best selves. If
                this resonates with you, take acloser look.
              </p>
              <button type="submit" class="btn btn-primary btn-lg mt-4 mb-3">
                <span class="d-flex align-items-center justify-content-center">
                  Join our RRA Group
                  <svg
                    class="ms-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div class="col-md-9 mx-auto">
              <img
                class="w-100 img-fluid mt-5"
                src="images/join-track.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Join Our Team Section Ends -->

    <!-- Form Section Start --> */}
      <section class="mb-5 cus-form-enq">
        <div class="container-fluid p-0">
          <div class="row m-0">
            <div class="col-md-6 p-0">
              <div class="w-100 enquiry-form p-5">
                <h2 class="text-white mb-4 text-uppercase fw-bold">
                  WE ARE HERE TO HELP
                </h2>
                <form>
                  <div class="mb-2">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div class="mb-2">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div class="mb-2">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Contact Number"
                    />
                  </div>
                  <div class="mb-4">
                    <textarea
                      class="w-100"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary btn-lg mt-4">
                    <span class="d-flex align-items-center justify-content-center">
                      Get a Quote
                      <svg
                        class="ms-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>
            <div class="col-md-6 p-0">
              <div class="position-relative h-100 cus-addresses-sec">
                <div class="w-100 h-100">
                  <img class="img-fluid h-100 map-img" src="images/map.png" />
                </div>
                <div class="map-addresses">
                  <div class="adresses-list">
                    <ul class="list-unstyled m-0">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="80"
                          height="80"
                          viewBox="0 0 80 80"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_215_140)">
                            <path
                              d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
                              fill="#F0F0F0"
                            />
                            <path
                              d="M79.9994 40.0001C79.9994 24.1416 70.7705 10.4391 57.3906 3.96912V76.0308C70.7705 69.561 79.9994 55.8585 79.9994 40.0001Z"
                              fill="#D80027"
                            />
                            <path
                              d="M0 40.0001C0 55.8585 9.22891 69.561 22.6087 76.031V3.96912C9.22891 10.4391 0 24.1416 0 40.0001Z"
                              fill="#D80027"
                            />
                            <path
                              d="M46.9574 45.2174L53.9138 41.7391L50.4357 40.0001V36.5218L43.4791 40.0001L46.9574 33.0435H43.4791L40.0009 27.8262L36.5226 33.0435H33.0443L36.5226 40.0001L29.566 36.5218V40.0001L26.0879 41.7391L33.0443 45.2174L31.3052 48.6957H38.2618V53.913H41.7399V48.6957H48.6965L46.9574 45.2174Z"
                              fill="#D80027"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_215_140">
                              <rect width="80" height="80" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </li>
                      <li>
                        <p class="mb-1 small">Contact No:</p>
                        <p class="m-0">
                          <a href="tel:(+1)8883168287">(+1)888-316-8287</a>,
                        </p>
                      </li>
                      <li>
                        <p class="mb-1 small">Email ID:</p>
                        <p class="m-0">
                          <a href="mailto:rragroupcanada@gmail.com">
                          import@rragroup.ca 

                          </a>
                        </p>
                      </li>
                      <li>
                        <p class="mb-1 small">Address:</p>
                        <p class="m-0">
                          2204 - 2060 MCCALLUM ROAD ABBOTSFORD BC V2S 3N4 CANADA
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div class="adresses-list">
                    <ul class="list-unstyled m-0">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="80"
                          height="80"
                          viewBox="0 0 80 80"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_215_165)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M40.0008 0.43457C18.1495 0.43457 0.435547 18.1485 0.435547 39.9998C0.435547 61.8511 18.1495 79.565 40.0008 79.565C61.8521 79.565 79.566 61.8511 79.566 39.9998C79.566 18.1485 61.8521 0.43457 40.0008 0.43457Z"
                              fill="#E92B2B"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M74.2726 59.7823H5.72852C7.88222 63.5055 10.6252 66.8451 13.8299 69.6737H66.1713C69.3759 66.8451 72.119 63.5055 74.2726 59.7823Z"
                              fill="#FBFBFB"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M79.566 39.9998H0.435547C0.435547 43.4153 0.868327 46.7296 1.68203 49.8911H78.3195C79.1332 46.7296 79.566 43.4153 79.566 39.9998Z"
                              fill="#FBFBFB"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M74.2744 20.2172H5.73023C3.9593 23.2785 2.58679 26.5993 1.68359 30.1085H78.3212C77.4179 26.5993 76.0454 23.2785 74.2744 20.2172Z"
                              fill="#FBFBFB"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M66.1677 10.3259H13.8263C20.8011 4.16988 29.9629 0.43457 39.9971 0.43457C50.0313 0.43457 59.1929 4.16988 66.1677 10.3259Z"
                              fill="#FBFBFB"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M36.0453 0.629883V39.9998H0.435547C0.435547 19.4835 16.0513 2.61445 36.0453 0.629883Z"
                              fill="#2A2FAF"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.46955 18.9945H8.15851L5.83292 20.6842L6.72123 23.418L4.76367 21.9958C5.28952 20.9685 5.85896 19.9674 6.46955 18.9945Z"
                              fill="#FBFBFB"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M1.37305 31.4037C1.41304 31.2232 1.45424 31.0432 1.49669 30.8638H3.50436L4.39265 28.1299L5.28096 30.8638H8.15553L5.82994 32.5534L6.71824 35.2873L4.39265 33.5977L2.06708 35.2873L2.95537 32.5534L1.37305 31.4037Z"
                              fill="#FBFBFB"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5304 9.72289C15.6307 8.79621 16.7823 7.92843 17.9802 7.12439H20.026L17.7003 8.81402L18.5885 11.5479L16.263 9.85827L13.9375 11.5479L14.5304 9.72289Z"
                              fill="#FBFBFB"
                            />
                            <path
                              d="M16.2629 16.2612L17.1512 18.9951H20.0259L17.7002 20.6848L18.5886 23.4186L16.2629 21.729L13.9374 23.4186L14.8257 20.6848L12.5 18.9951H15.3747L16.2629 16.2612Z"
                              fill="#FBFBFB"
                            />
                            <path
                              d="M16.2629 28.1299L17.1512 30.8638H20.0259L17.7002 32.5534L18.5886 35.2873L16.2629 33.5977L13.9374 35.2873L14.8257 32.5534L12.5 30.8638H15.3747L16.2629 28.1299Z"
                              fill="#FBFBFB"
                            />
                            <path
                              d="M28.1321 4.39099L29.0203 7.1249H31.8948L29.5693 8.81452L30.4576 11.5484L28.1321 9.85878L25.8064 11.5484L26.6947 8.81452L24.3691 7.1249H27.2438L28.1321 4.39099Z"
                              fill="#FBFBFB"
                            />
                            <path
                              d="M28.1321 16.2612L29.0203 18.9951H31.8948L29.5693 20.6848L30.4576 23.4186L28.1321 21.729L25.8064 23.4186L26.6947 20.6848L24.3691 18.9951H27.2438L28.1321 16.2612Z"
                              fill="#FBFBFB"
                            />
                            <path
                              d="M28.1321 28.1299L29.0203 30.8638H31.8948L29.5693 32.5534L30.4576 35.2873L28.1321 33.5977L25.8064 35.2873L26.6947 32.5534L24.3691 30.8638H27.2438L28.1321 28.1299Z"
                              fill="#FBFBFB"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_215_165">
                              <rect width="80" height="80" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </li>
                      <li>
                        <p class="mb-1 small">Contact No:</p>
                        <p class="m-0">
                          <a href="tel:(+1)8883168287">(+1)888-316-8287</a>,
                        </p>
                      </li>
                      <li>
                        <p class="mb-1 small">Email ID:</p>
                        <p class="m-0">
                          <a href="mailto:rragroupus@gmail.com">
                          import@rragroup.ca 
                          </a>
                        </p>
                      </li>
                      <li>
                        <p class="mb-1 small">Address:</p>
                        <p class="m-0">
                          Suite 301 - 2219 Rimland Drive Bellingham WA -
                          (Washington) 98226 UNITED STATES
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Form Section Ends -->

    <!-- Certification Section Start --> */}
      <section class="py-5 my-5 cus-certification text-center">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-10 mx-auto">
              <h3 class="mb-3 text-uppercase">Certification</h3>
              <p>
                At RRA, we're your complete end-to-end logistics provider across
                North America. <br />
                Trust us because we've got it all:
              </p>
            </div>
            <div class="col-md-12">
              <ul class="p-0 pt-4 m-auto d-flex align-items-center justify-content-center list-group list-group-horizontal flex-wrap list-unstyled">
                <li>
                  <img src="images/logo-01.png" />
                </li>
                <li>
                  <img src="images/logo-02.png" />
                </li>
                <li>
                  <img src="images/logo-03.png" />
                </li>
                <li>
                  <img src="images/logo-04.png" />
                </li>
                <li>
                  <img src="images/logo-05.png" />
                </li>
                <li>
                  <img src="images/logo-06.png" />
                </li>
                <li>
                  <img src="images/logo-07.png" />
                </li>
                <li>
                  <img src="images/logo-08.png" />
                </li>
                <li>
                  <img src="images/logo-09.png" />
                </li>
                <li>
                  <img src="images/logo-10.png" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Certification Section Ends --> */}
    </>
  );
}
