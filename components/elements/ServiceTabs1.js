'use client'
import { useState } from "react"

export default function ServiceTabs1() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <ul className="nav nav-tabs tab-btn-style-one mr-md-4" role="tablist">
                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                            <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}>01. Introduction to Homecare
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                            <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}>
                                02. Home Safety and Sanitation
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                            <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}>
                                03. Meal Preparation and Nutrition
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(4)}>
                            <a className={activeIndex == 4 ? "nav-link active" : "nav-link"}>
                                04. Personal Care and Assistance
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    {/* Tab panes */}
                    <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                        <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Communication and Socialization</h4>
                            <div className="text">Effective communication skills with clients and families and Active listening and building rapport with clients.</div>
                            <img src="/assets/images/resource/single-service-4.jpg" alt="" />
                        </div>
                        <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Home Safety and Sanitation</h4>
                            <div className="text">Identifying and mitigating common home hazards and Practicing proper infection control and prevention strategies.</div>
                            <img src="/assets/images/resource/single-service-4.jpg" alt="" />
                        </div>
                        <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Meal Preparation and Nutrition</h4>
                            <div className="text">Importance of healthy eating for older adults and individuals with specific needs.</div>
                            <img src="/assets/images/resource/single-service-4.jpg" alt="" />
                        </div>
                        <div className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Personal Care and Assistance</h4>
                            <div className="text">Assisting with activities of daily living (ADLs) such as bathing, dressing, and toileting.</div>
                            <img src="/assets/images/resource/single-service-4.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
