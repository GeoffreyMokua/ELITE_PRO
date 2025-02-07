
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Get in touch" wrapperCls="home_1">
                <div>
                    <section className="contact-details-section">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>We’d love to help you</h2>
                                <div className="text">Please feel free to get in touch using the form below. We'd love to hear your <br /> thoughts &amp; answer any questions you may have!</div>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 contact-info-block">
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-46.png" alt="" /></div>
                                            <h5>Location</h5>
                                            <h4>Visit us on</h4>
                                        </div>
                                        <ul>
                                            <li>Nairobi CBD, <br /> Waiyaki way Delta Building.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 contact-info-block">
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-47.png" alt="" /></div>
                                            <h5>24/7 service</h5>
                                            <h4>Call us on</h4>
                                        </div>
                                        <ul>
                                            <li><Link href="tel:+18005554400">+1 800 555 44 00 (Toll free)</Link></li>
                                            <li><Link href="tel:+254 724002308">+254 724002308</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 contact-info-block">
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-48.png" alt="" /></div>
                                            <h5>Drop a line</h5>
                                            <h4>Mail us @</h4>
                                        </div>
                                        <ul>
                                            <li><Link href="mailto:info@eliteprointernational.com">info@eliteprointernational.com</Link></li>
                                            <li><Link href="mailto:info@eliteprointernational.com">info@eliteprointernational.com</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 contact-info-block">
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-49.png" alt="" /></div>
                                            <h5>Off Hours</h5>
                                            <h4>Visit between</h4>
                                        </div>
                                        <ul>
                                            <li>Mon - Friday: 9.00 - 6.00 <br /> Sunday (Closed)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Contact Form Section */}
                    <section className="contact-form-section">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="live-contact">
                                        <div className="image"><img src="/assets/images/resource/image-40.jpg" alt="" /></div>
                                        <div className="content">
                                            <div className="icon"><span className="flaticon-support-1" /></div>
                                            <h4>Chat with a live</h4>
                                            <div className="text">Let’s chat with our live experts to get <br /> aanswer your questions.</div>
                                            <div className="link-btn"><Link href="#" className="theme-btn btn-style-one text-white"><span className="btn-title">LIVE CHAT</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="sec-title">
                                        <h2>Don’t hesitate <br /> to send your message to us</h2>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                    </div>
                                    <form method="post" action="assets/inc/sendmail.php" className="contact-form" id="contact-form">
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <input type="text" className="form-control" name="form_name" placeholder="First Name" required />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <input type="email" className="form-control" name="form_email" placeholder="Email Address" required />
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <input type="text" className="form-control" name="form_phone" placeholder="Phone" required />
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <select className="selectpicker form-control" name="form_subject">
                                                    <option value="*">Discusss about</option>
                                                    <option value=".category-1">Business Aproach</option>
                                                    <option value=".category-2">Trades &amp; Stock Market</option>
                                                    <option value=".category-3">Strategy &amp; Planning</option>
                                                    <option value=".category-4">Software &amp; Research</option>
                                                    <option value=".category-5">Support &amp; Maintenance</option>
                                                </select>
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <textarea name="form_message" className="form-control" placeholder="Message goes here" />
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <div className="row m-0 justify-content-between">
                                                    <div className="note mb-30">
                                                        <p>*We do not share your information with any third parties.</p>
                                                    </div>
                                                    <button className="theme-btn btn-style-one mb-30" type="submit" name="submit-form"><span className="btn-title">SEND MESSAGE</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Map Section */}
                
                </div>

            </Layout>
        </>
    )
}