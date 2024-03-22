"use client";
import "../globals.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import Header from "../Header/header";
import Footer from "../Footer/footer";

function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: String(e.target.name.value),
      lastName: String(e.target.lastName.value),
      companyName: String(e.target.companyName.value),
      email: String(e.target.email.value),
      telephone: String(e.target.telephone.value),
      message: String(e.target.yourMessage.value),
    };
    console.log(data);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  return (
    <>
      <Header />
      <section class="cus-hero-sec">
        <div class="row">
          <div class="col-md-12">
            <div class="w-100 h-100 position-relative">
              <img
                class="w-100 img-fluid cover"
                src="images/hero-contact-us.png"
                alt=""
              />
              <h1 class="m-0 text-center text-uppercase position-absolute top-50 start-50 translate-middle text-white">
                Contact Us
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section class="cus-form-enq cus-contact-form">
        <div class="container-fluid p-0">
          <div class="row m-0">
            <div class="col-md-6 p-0 bg-grey-light">
              <div class="position-relative h-100 cus-addresses-sec">
                <div class="map-addresses">
                  <h4 class="w-100 mb-0 text-left">
                    We are available 24/7 for you.
                  </h4>
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
                        <h6 class="m-0 ps-3">Canada (Head Office)</h6>
                      </li>
                      <li>
                        <p class="mb-1 small">Contact No:</p>
                        <p class="m-0">
                          <a href="tel:8883168287">(+1)888-316-8287</a>,
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
                          204 - 2060 MCCALLUM ROAD ABBOTSFORD BC V2S 3N4 CANADA
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
                        <h6 class="m-0 ps-3">United States</h6>
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
                        Suite 301 - 2219 Rimland Drive
Bellingham
WA - (Washington)
98226
USA

                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 p-0">
              <div class="w-100 enquiry-form p-5">
                <h4 class="text-white mb-4 fw-bold">
                  Need to make an inquiry?
                </h4>
                <form onSubmit={handleSubmit}>
                  <div class="row m-0">
                    <div class="col-md-6 mb-2 px-1">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Name*"
                        name="name"
                      />
                    </div>
                    <div class="col-md-6 mb-2 px-1">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Last Name*"
                        name="lastName"
                      />
                    </div>
                    <div class="col-md-12 mb-2 px-1">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Company Name*"
                        name="companyName"
                      />
                    </div>
                    <div class="col-md-6 mb-2 px-1">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email*"
                        name="email"
                      />
                    </div>
                    <div class="col-md-6 mb-2 px-1">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Phone*"
                        name="telephone"
                      />
                    </div>
                    <div class="col-md-12 mb-2 px-1">
                      <h6 class="mt-4 mb-2 text-white">
                        Select the subject you are interested in:
                      </h6>
                      <select class="w-100">
                        <option>Select</option>
                        <option>Select 1</option>
                        <option>Select 2</option>
                        <option>Select 3</option>
                        <option>Select 4</option>
                      </select>
                    </div>
                    <div class="col-md-12 mb-2 px-1">
                      <h6 class="mt-4 mb-2 text-white">How can we help you</h6>
                      <textarea
                        class="w-100"
                        placeholder="Your Message"
                        name="yourMessage"
                      ></textarea>
                    </div>
                    <div class="col-md-12 mt-2 px-1">
                      <button type="submit" className="btn btn-primary btn-lg">
                        <span className="d-flex align-items-center justify-content-center">
                          Send
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
