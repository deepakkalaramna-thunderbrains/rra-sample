"use client"
import '../globals.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/slick-carousel/slick/slick.css'
import Header from "../Header/header";
import Footer from "../Footer/footer";


function FreightServices2() {
    return (
        <>
            <Header />
            {/* <!-- Header Section Ends -->

    <!-- Hero Section Start --> */}
            <section class="cus-hero-sec">
                <div class="row">
                    <div class="col-md-12">
                        <div class="w-100 h-100 position-relative">
                            <img class="w-100 img-fluid cover" src="images/hero-freight-2.png" alt="" />
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
                        <div class="col-md-9 mx-auto py-5">
                            <h2 class="mb-3 text-center text-uppercase">Unlock the magic of seamless logistics with <span class="text-orange">RRA</span> Group's Freight Services.</h2>
                        </div>
                        <div class="col-md-11 mx-auto pt-3">
                            <div class="row align-items-center">
                                <div class="col-md-6 px-5">
                                    <img class="w-100 img-fluid cover" src="images/grid-services.png" alt="" />
                                </div>
                                <div class="col-md-6 px-5">
                                    <h4 class="mb-4">Our secret ingredient? Over 13 years of freight-forwarding expertise with a flawless 100% success rate.</h4>
                                    <p>Have you ever felt lost when dealing with a logistics forwarder?</p>
                                    <p>Don't worry; we've got your back. We're here to simplify the process for you. Our team of experts will walk you through it, helping you choose the best carrier options that are not only cost-effective but also time-efficient and ultra-reliable.</p>
                                    <button type="submit" class="btn-primary btn-lg mt-4 py-3 px-4">
                                        <span class="d-flex align-items-center justify-content-center text-uppercase">
                                            Contact Us
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
            {/* <!-- Shipment Tracking Contects Section Ends -->
    
    <!-- Vertical Tabs Section Start --> */}
            <section class="w-100 d-flex py-5 cus-vertical-tabs bg-secondary-dark">
                <div class="container-fluid">
                    <div class="vertical-tabs-container py-5">
                        <div class="side-bar">
                            <nav class="navigation">
                                <ul>
                                    <li class="w-100 nav-item">
                                        <a href="#ground-freight-tab">Ground Freight</a>
                                        <a href="#ocean-freight-tab">Ocean Freight</a>
                                        <a href="#air-freight-tab">Air Freight</a>
                                        <a href="#amazon-fba-tab">Amazon FBA</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="main-content">
                            <section id="ground-freight-tab">
                                <div class="tab-pane-inner">
                                    <div class="vertical-tab-con">
                                        <h3 class="text-orange text-uppercase mb-4">Ground Freight</h3>
                                        <p class="text-white">Discover Reliability on Wheels</p>
                                        <p class="text-white">Our Ground Freight service ensures your cargo reaches its destination, no matter the terrain.</p>
                                        <p class="text-white">With our vast network across North America, we navigate the road to success. Whether it's trucks or railways, we've got you covered.</p>
                                        <p class="text-white">RRA Group's ground freight services span North America, offering both truckload and less-than-truckload options. Our diverse fleet includes vans, reefers, flatbeds, step decks, heaters, and temperature-controlled units, ensuring safe and efficient transportation for your cargo.</p>
                                    </div>
                                    <div class="vertical-tab-img">
                                        <img class="w-100 h-100 img-fluid cover" src="images/shipment-tracking1.png" alt="" />
                                    </div>
                                </div>
                            </section>
                            <section id="ocean-freight-tab">
                                <div class="tab-pane-inner">
                                    <div class="vertical-tab-con">
                                        <h3 class="text-orange text-uppercase mb-4">Contact</h3>
                                        <p class="text-white">Did you know that around 80% of goods travel by sea?</p>
                                        <p class="text-white">Our Ocean Freight service connects your cargo to every corner of the world. Your shipment sails smoothly with us from Full Container Load (FCL) to Less Than Container Load (LCL).</p>
                                        <p class="text-white">Our FCL option ensures exclusivity and reduced handling, which is ideal for larger quantities of goods. LCL shipping combines cargo from multiple shippers into one container, a cost-effective solution for smaller quantities.</p>
                                        <p class="text-white">We also offer reefer containers for temperature-sensitive goods and specialized ocean freight services for oversized or heavy cargo like machinery or vehicles.</p>
                                    </div>
                                    <div class="vertical-tab-img">
                                        <img class="w-100 h-100 img-fluid cover" src="images/shipment-tracking2.png" alt="" />
                                    </div>
                                </div>
                            </section>
                            <section id="air-freight-tab">
                                <div class="tab-pane-inner">
                                    <div class="vertical-tab-con">
                                        <h3 class="text-orange text-uppercase mb-4">Air Freight</h3>
                                        <p class="text-white">Reach New Height to Cross Border</p>
                                        <p class="text-white">When speed and efficiency are non-negotiable, look no further than RRA Group's Air Freight service. We specialize in delivering your goods promptly, ensuring they take flight at the precise moment you need them to.</p>
                                        <p class="text-white">Our Air Freight service is your express lane in the logistics world. Whether it's a last-minute order, an urgent restock, or time-sensitive materials, we've got the wings to make it happen.</p>
                                        <p class="text-white">We also offer reefer containers for temperature-sensitive goods and specialized ocean freight services for oversized or heavy cargo like machinery or vehicles.</p>
                                    </div>
                                    <div class="vertical-tab-img">
                                        <img class="w-100 h-100 img-fluid cover" src="images/shipment-tracking3.png" alt="" />
                                    </div>
                                </div>
                            </section>
                            <section id="amazon-fba-tab">
                                <div class="tab-pane-inner">
                                    <div class="vertical-tab-con">
                                        <h3 class="text-orange text-uppercase mb-4">Amazon FBA</h3>
                                        <p class="text-white">Ready to conquer the e-commerce game?</p>
                                        <p class="text-white">We're your trusted ride to streamline your product's journey to the buyer's doorstep. Our comprehensive services cover storage, packaging, labeling, and shipping of products to Amazon warehouses, along with efficient management of the returns process.</p>
                                        <p class="text-white">Choose RRA Group for logistics that make sense - no jargon, just results.</p>
                                    </div>
                                    <div class="vertical-tab-img">
                                        <img class="w-100 h-100 img-fluid cover" src="images/shipment-tracking4.png" alt="" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Vertical Tabs Section Ends -->

    <!-- Orange Two Grid Section Start --> */}
            <section class="py-5 cus-orange-two-column">
                <div class="container-fluid">
                    <div class="row py-5">
                        <div class="col-md-6">
                            <div class="oragne-gradient p-5 h-100">
                                <div class="row">
                                    <div class="col-md-8">
                                        <h3 class="text-white text-uppercase">Sustainable practice</h3>
                                        <p class="m-0 text-white">RRA supply management chains are increasingly focused on sustainable shipping practices. We offer options for eco-friendly shipping, such as utilizing cleaner vessel technologies or optimizing routes to reduce carbon emissions</p>
                                    </div>
                                    <div class="col-md-4">
                                        <img class="d-flex align-items-center justify-content-center h-100 img-fluid contain" src="images/icon-sustainable-practice.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="oragne-gradient p-5 h-100">
                                <div class="row">
                                    <div class="col-md-8">
                                        <h3 class="text-white text-uppercase">Safety</h3>
                                        <p class="m-0 text-white">Safety is our priority. Our trained personnel adhere to strict safety regulations.</p>
                                    </div>
                                    <div class="col-md-4">
                                        <img class="d-flex align-items-center justify-content-center h-100 img-fluid contain" src="images/check.png" alt="" />
                                    </div>
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

export default FreightServices2