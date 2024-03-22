
import '../globals.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/slick-carousel/slick/slick.css'

export default function Footer(){
let date = new Date()
let currentYear = date.getFullYear()
return(<footer className="bg-secondary-dark pt-5">
<div className="container-fluid my-3">
  <div className="row pt-4 pb-5">
    <div className="col-lg-4 col-md-12">
      <div className="d-flex footer-logo">
        <img src="images/footer-logo.svg" alt="" />
      </div>
    </div>
    <div className="col-lg-4 col-md-12">
      <div className="row">
        <div className="col-md-6">
          <h6 className="mb-4">Explore</h6>
          <ul className="list-unstyled m-0">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/About">About Us</a>
            </li>
            <li>
              <a href="/FreightServices">Our Services</a>
            </li>
            <li>
              <a href="#">Group Companies</a>
            </li>
            <li>
              <a href="/Contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <h6 className="mb-4">Other</h6>
          <ul className="list-unstyled m-0">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-12 footer-contact-us">
      <h6 className="mb-4">Contact Us</h6>
      <ul className="list-unstyled m-0 d-flex align-items-start">
        <li>
          <div className="d-flex align-items-center">
            <svg
              width="30"
              height="30"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 80"
              fill="#F0F0F0"
            >
              <g clipPath="url(#clip0_215_140)">
                <path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#F0F0F0" />
                <path d="M79.9994 40.0001C79.9994 24.1416 70.7705 10.4391 57.3906 3.96912V76.0308C70.7705 69.561 79.9994 55.8585 79.9994 40.0001Z" fill="#D80027" />
                <path d="M0 40.0001C0 55.8585 9.22891 69.561 22.6087 76.031V3.96912C9.22891 10.4391 0 24.1416 0 40.0001Z" fill="#D80027" />
                <path d="M46.9574 45.2174L53.9138 41.7391L50.4357 40.0001V36.5218L43.4791 40.0001L46.9574 33.0435H43.4791L40.0009 27.8262L36.5226 33.0435H33.0443L36.5226 40.0001L29.566 36.5218V40.0001L26.0879 41.7391L33.0443 45.2174L31.3052 48.6957H38.2618V53.913H41.7399V48.6957H48.6965L46.9574 45.2174Z" fill="#D80027" />
              </g>
              <defs>
                <clipPath id="clip0_215_140">
                  <rect width="80" height="80" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="ps-3 mb-0 text-white">Canada</p>
          </div>
          <div className="d-flex flex-column mt-3">
            <p className="text-white"><a href="mailto:rra@gmail.com">                              import@rragroup.ca 
</a></p>
            <p className="text-white mb-0">204 - 2060 MCCALLUM ROAD
ABBOTSFORD BC V2S 3N4 CANADA
</p>
          </div>
        </li>
        <li>
          <div className="d-flex align-items-center">
            //TODO:N  use url rather than  svg
            {/* <svg
              width="30"
              height="30"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 80"
              fill="#2A2FAF"
            >
              <g clipPath="url(#clip0_215_165)">
                <path fillRule="evenodd" clipRule="evenodd" d="M40.0008 0.43457C18.1495 0.43457 0.435547 18.1485 0.435547 39.9998C0.435547 61.8511 18.1495 79.565 40.0008 79.565C61.8521 79.565 79.566 61.8511 79.566 39.9998C79.566 18.1485 61.8521 0.43457 40.0008 0.43457Z" fill="#E92B2B" />
                <path fillRule="evenodd" clipRule="evenodd" d="M74.2726 59.7823H5.72852C7.88222 63.5055 10.6252 66.8451 13.8299 69.6737H66.1713C69.3759 66.8451 72.119 63.5055 74.2726 59.7823Z" fill="#FBFBFB" />
                <path fillRule="evenodd" clipRule="evenodd" d="M79.566 39.9998H0.435547C0.435547 43.4153 0.868327 46.7296 1.68203 49.8911H78.3195C79.1332 46.7296 79.566 43.4153 79.566 39.9998Z" fill="#FBFBFB" />
                <path fillRule="evenodd" clipRule="evenodd" d="M74.2744 20.2172H5.73023C3.9593 23.2785 2.58679 26.5993 1.68359 30.1085H78.3212C77.4179 26.5993 76.0454 23.2785 74.2744 20.2172Z" fill="#FBFBFB" />
                <path fillRule="evenodd" clipRule="evenodd" d="M66.1677 10.3259H13.8263C20.8011 4.16988 29.9629 0.43457 39.9971 0.43457C50.0313 0.43457 59.1929 4.16988 66.1677 10.3259Z" fill="#FBFBFB" />
                <path fillRule="evenodd" clipRule="evenodd" d="M36.0453 0.629883V39.9998H0.435547C0.435547 19.4835 16.0513 2.61445 36.0453 0.629883Z" fill="#2A2FAF" />
                <path fillRule="evenodd" clipRule="evenodd" d="M6.46955 18.9945H8.15851L5.83292 20.6842L6.72123 23.418L4.76367 21.9958C5.28952 20.9685 5.85896 19.9674 6.46955 18.9945Z" fill="#FBFBFB" />
                <path fillRule="evenodd" clipRule="evenodd" d="M1.37305 31.4037C1.41304 31.2232 1.45424 31.0432 1.49669 30.8638H3.50436L4.39265 28.1299L5.28096 30.8638H8.15553L5.82994 32.5534L6.71824 35.2873L4.39265 33.5977L2.06708 35.2873L2.95537 32.5534L1.37305 31.4037Z" fill="#FBFBFB" />
                <path fillRule="evenodd" clipRule="evenodd" d="M14.5304 9.72289C15.6307 8.79621 16.7823 7.92843 17.9802 7.12439H20.026L17.7003 8.81402L18.5885 11.5479L16.263 9.85827L13.9375 11.5479L14.5304 9.72289Z" fill="#FBFBFB" />
                <path d="M16.2629 16.2612L17.1512 18.9951H20.0259L17.7002 20.6848L18.5886 23.4186L16.2629 21.729L13.9374 23.4186L14.8257 20.6848L12.5 18.9951H15.3747L16.2629 16.2612Z" fill="#FBFBFB" />
                <path d="M16.2629 28.1299L17.1512 30.8638H20.0259L17.7002 32.5534L18.5886 35.2873L16.2629 33.5977L13.9374 35.2873L14.8257 32.5534L12.5 30.8638H15.3747L16.2629 28.1299Z" fill="#FBFBFB" />
                <path d="M28.1321 4.39099L29.0203 7.1249H31.8948L29.5693 8.81452L30.4576 11.5484L28.1321 9.85878L25.8064 11.5484L26.6947 8.81452L24.3691 7.1249H27.2438L28.1321 4.39099Z" fill="#FBFBFB" />
                <path d="M28.1321 16.2612L29.0203 18.9951H31.8948L29.5693 20.6848L30.4576 23.4186L28.1321 21.729L25.8064 23.4186L26.6947 20.6848L24.3691 18.9951H27.2438L28.1321 16.2612Z" fill="#FBFBFB" />
                <path d="M28.1321 28.1299L29.0203 30.8638H31.8948L29.5693 32.5534L30.4576 35.2873L28.1321 33.5977L25.8064 35.2873L26.6947 32.5534L24.3691 30.8638H27.2438L28.1321 28.1299Z" fill="#FBFBFB" />
              </g>
              <defs>
                <clipPath id="clip0_215_165">
                  <rect width="80" height="80" fill="white" />
                </clipPath>
              </defs>
            </svg> */}
            <p class="ps-3 mb-0 text-white">United States</p>
          </div>
          <div class="d-flex flex-column mt-3">
            <p class="text-white"><a href="mailto:rra@gmail.com">                              import@rragroup.ca 
</a></p>
            <p class="text-white mb-0">Suite 301 - 2219 Rimland Drive
Bellingham
WA - (Washington)
98226
United States
</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
<div className="container-fluid py-4 mt-3 footer-bottom-sec">
    <div className="row">
      <div className="col-md-12">
        <div className="d-flex flex-nowrap align-items-center justify-content-between cus-copy-right">
          <p className="m-0 text-white">ⓒ {currentYear}  -- RRA Group</p>
          <ul className="list-unstyled m-0 d-flex align-items-center cus-social-media">
            <li className="mb-0">
              <a href="https://www.facebook.com/people/RRA-Group-Inc/61557350933003/">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)">
                  <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
                </svg>
              </a>
            </li>
            <li className="mb-0 ms-3">
              <a href="https://www.instagram.com/rragroupff/">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)">
                  <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                </svg>
                fill-opacity
                </a>
            </li>
            <li className="mb-0 ms-3">
              <a href="https://www.linkedin.com/company/rragroupca/">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)">
                  <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
                </svg>
              </a>
            </li>
            <li className="mb-0 ms-3">
              <a href="#">
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)">
                  <path d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>)}