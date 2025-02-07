

export default function WhyChooseUs() {
    return (
        <>
            <section className="why-choose-us-section">
                <div className="pattern" style={{ backgroundImage: 'url(assets/images/shape/pattern-3.png)' }} />
                <div className="side-image"><img src="/assets/images/resource/image1.jpg" alt="" /></div>
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6 order-lg-2">
                            <div className="sec-title light">
                                <h2>Reason for Choosing Our ELITEPRO INTERNATIONAL <br />TRAINING INSTITUTE</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <ul className="features-list">
                                <li className="single-feature-item">
                                    <h5>Empowering your future:</h5>
                                    <span className="text">ELITEPRO positions itself as more than just a training provider, that equips individuals with the necessary skills to build successful careers and fulfilling lives.</span>
                                </li>
                                <li className="single-feature-item">
                                    <h5>Personalized Learning</h5>
                                    <span className="text">Tailor-made learning experiences that adapt to individual student needs, helping them learn at their own pace and style for maximum engagement and success. </span>
                                </li>
                                <li className="single-feature-item">
                                    <h5>Real-World Focus</h5>
                                    <span className="text">Practical, hands-on learning designed to equip students with skills and knowledge that can be directly applied to real-world situations and careers. </span>
                                </li>

                                 <li className="single-feature-item">
                                    <h5>Qualified Instructors</h5>
                                    <span className="text">Expert educators with professional experience and industry credentials, providing high-quality guidance and mentorship to support student growth. </span>
                                </li>
                                 <li className="single-feature-item">
                                    <h5>Flexible Learning Options</h5>
                                    <span className="text"> A variety of learning formats, including online, in-person, and hybrid models, allowing students to learn at their convenience and balance other commitments.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="consult-form">
                                <form method="post" action="sendemail.php" className="contact-form">
                                    <h2>Request for Our <br />Free Consultation</h2>
                                    <div className="row clearfix">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="username" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <input type="email" name="email" placeholder="Email Address" required />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="phone" placeholder="Phone" required />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <select className="custom-select" name="subject">
                                                <option value="*">Caregiver &amp; Training</option>
                                                <option value=".category-1">Business Aproach</option>
                                                <option value=".category-2">HomeCare &amp;  Training</option>
                                                <option value=".category-3">Leadership &amp; Training</option>
                                                <option value=".category-4">Pre-departure &amp; Training</option>
                                                <option value=".category-5">Recruitment &amp; Maintenance</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <button className="theme-btn btn-style-two" type="submit" name="submit-form"><span className="btn-title">Send request</span></button>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <button className="theme-btn btn-style-three" type="submit" name="submit-form"><i className="far fa-calendar" />For flexible schedule</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
