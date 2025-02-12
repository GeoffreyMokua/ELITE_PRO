
import ServiceTabs1 from "@/components/elements/ServiceTabs1"
import Layout from "@/components/layout/Layout"
import AuditSlider1 from "@/components/slider/AuditSlider1"
import ServiceSlider1 from "@/components/slider/ServiceSlider1"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Customer Service Training" wrapperCls="home_1">
                <div>
                    <section className="services-details">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8 content-side">
                                    {/*Theme Carousel*/}
                                    <AuditSlider1 />
                                    <div className="row mb-5">
                                        <div className="col-md-5">
                                            <h2>Customer Service Training</h2>
                                            <div className="icon"><span className="flaticon-chart" /></div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="text"><p>Our Customer Service Training program equips you with the skills to build positive relationships, resolve challenges, and exceed customer expectations. </p></div>
                                            <ul className="list">
                                                <li><i className="fa fa-check" />Enhance your communication skills</li>
                                                <li><i className="fa fa-check" />Develop problem-solving skills</li>
                                                <li><i className="fa fa-check" />Master customer service etiquette</li>
                                                <li><i className="fa fa-check" />Build emotional intelligence</li>
                                              
                                            </ul>
                                        </div>
                                    </div>
                                    <h5>Individuals seeking careers in customer service across various industries (retail, hospitality, banking, etc.)</h5>
                                    {/*Theme Carousel*/}
                                    {/* <ServiceSlider1 /> */}
                                    <h5>Choose between an intensive week-long workshop, a series of shorter modules, or a blended format with online and in-person components.</h5>
                                    <div className="text">Understand the principles of excellent customer service and exceed customer expectations.</div>
                                    <ServiceTabs1 />
                                </div>
                                <aside className="col-lg-4">
                                    <div className="service-sidebar">
                                        <div className="widget widget_categories_two">
                                            <div className="widget-content">
                                                <ul className="categories-list clearfix">
                                                   <li><Link href="#">Caregiver Training <span /></Link></li>
                                                    <li><Link href="#">Homecare Training <span /></Link></li>
                                                    <li><Link href="#">Pre-departure Training <span /></Link></li>
                                                    <li><Link href="#">Leadership Training <span /></Link></li>
                                                    <li><Link href="#">Languages <span /></Link></li>
                                                    <li><Link href="#">Customer Service Training <span /></Link></li>
                                                    <li><Link href="#">Recruitment Services <span /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div className="widget widget_contact" style={{ backgroundImage: 'url(assets/images/background/bg-25.jpg)' }}>
                                            <div className="widget-content">
                                                <img src="/assets/images/icons/icon-55.png" alt="" />
                                                <h4>Do you need any help?</h4>
                                                <div className="phone-number"><Link href="tel:+254 724002308">+254 724002308</Link></div>
                                                <div className="email"><Link href="mailto:info@elitepro.com">info@elitepro.com</Link></div>
                                                <div className="link-btn"><Link href="#" className="theme-btn btn-style-one text-white">
                                                    <span className="btn-title">APPOINTMENT</span>
                                                </Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </section>
                    {/* Feature Section Two */}
                    <section className="feature-section-two mt-0">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-6 feature-block-two style-two">
                                    <div className="shape-box">
                                        <div className="inner-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-9.png" alt="" /></div>
                                            <h4>Fostering lifelong learning and continuous growth.</h4>
                                            <div className="text">We encourage students to embark on their personal and professional journeys through continuous learning and exploration.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 feature-block-two style-two">
                                    <div className="shape-box">
                                        <div className="inner-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-10.png" alt="" /></div>
                                           <h4>Unlocking potential and creating pathways to success.</h4>
                                            <div className="text">We empower individuals to discover their hidden talents and unlock their full potential.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}