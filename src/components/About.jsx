'use client';

import Image from 'next/image';

const timelineItems = [
    { year: '2001', text: 'Founded Wadhwa Properties' },
    { year: '2010', text: 'Expanded to Greater Faridabad' },
    { year: '2020', text: '500+ Successful Transactions' },
    { year: '2025', text: 'Trusted Partner for 25+ Years' },
];

export default function About() {
    return (
        <section className="satish-section" id="about">
            <div className="container">
                <div className="satish-content animate-on-scroll">
                    <div className="satish-visual">
                        <div className="satish-bg-shape"></div>
                        <div className="satish-portrait">
                            <div className="portrait-image-container">
                                <Image
                                    src="/wadhwa-logo.png"
                                    alt="Wadhwa Properties Logo"
                                    width={240}
                                    height={240}
                                    className="satish-image"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    <div className="satish-details">
                        <h2 className="satish-title">Satish Wadhwa</h2>
                        <div className="title-underline"></div>
                        <p className="satish-subtitle">25 Years of Trust & Excellence</p>
                        <p className="satish-description">
                            Since establishing Wadhwa Properties in 2001, Satish Wadhwa has been instrumental in shaping
                            Faridabad's real estate landscape. With over 25 years of experience, he has helped more than 500
                            families find their dream homes and make sound investment decisions.
                        </p>
                        <div className="satish-timeline stagger-children">
                            {timelineItems.map((item, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <h4>{item.year}</h4>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="satish-signature">
                            <div className="signature-text">Satish Wadhwa</div>
                            <div className="signature-line"></div>
                        </div>
                        <a href="tel:+919810623803" className="btn btn--primary satish-cta">
                            Schedule a Meeting
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
