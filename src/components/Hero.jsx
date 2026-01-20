'use client';

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-bg-overlay"></div>
            <div className="container hero-container">
                {/* Left side - Real Estate Themed Illustration */}
                <div className="hero-visual">
                    <div className="property-wrapper">
                        <svg className="property-svg" viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="houseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#2D8CFF" />
                                    <stop offset="100%" stopColor="#1e6fd9" />
                                </linearGradient>
                                <linearGradient id="roofGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#5ba3ff" />
                                    <stop offset="100%" stopColor="#2D8CFF" />
                                </linearGradient>
                            </defs>
                            
                            {/* Modern House - Clean and Simple */}
                            <g className="house-main">
                                {/* House Base */}
                                <rect x="150" y="200" width="300" height="250" fill="url(#houseGrad)" rx="8" />
                                
                                {/* Roof */}
                                <polygon points="100,200 300,100 500,200" fill="url(#roofGrad)" className="roof" />
                                
                                {/* Door */}
                                <rect x="270" y="350" width="60" height="100" fill="#1e293b" rx="4" />
                                <circle cx="295" cy="400" r="4" fill="#2D8CFF" className="door-knob" />
                                
                                {/* Windows - Left */}
                                <g className="window-group">
                                    <rect x="180" y="240" width="50" height="60" fill="#5ba3ff" opacity="0.9" rx="4" className="window" />
                                    <line x1="205" y1="240" x2="205" y2="300" stroke="#2D8CFF" strokeWidth="2" />
                                    <line x1="180" y1="270" x2="230" y2="270" stroke="#2D8CFF" strokeWidth="2" />
                                </g>
                                
                                {/* Windows - Right */}
                                <g className="window-group">
                                    <rect x="370" y="240" width="50" height="60" fill="#5ba3ff" opacity="0.9" rx="4" className="window" />
                                    <line x1="395" y1="240" x2="395" y2="300" stroke="#2D8CFF" strokeWidth="2" />
                                    <line x1="370" y1="270" x2="420" y2="270" stroke="#2D8CFF" strokeWidth="2" />
                                </g>
                                
                                {/* Window - Top Center */}
                                <g className="window-group">
                                    <rect x="260" y="150" width="80" height="50" fill="#5ba3ff" opacity="0.9" rx="4" className="window" />
                                    <line x1="300" y1="150" x2="300" y2="200" stroke="#2D8CFF" strokeWidth="2" />
                                    <line x1="260" y1="175" x2="340" y2="175" stroke="#2D8CFF" strokeWidth="2" />
                                </g>
                                
                                {/* Steps */}
                                <rect x="260" y="450" width="80" height="15" fill="#cbd5e1" rx="2" />
                                <rect x="265" y="465" width="70" height="12" fill="#e2e8f0" rx="2" />
                            </g>
                            
                            {/* Key Icon - Animated */}
                            <g className="key-icon floating-icon">
                                <circle cx="450" cy="100" r="20" fill="#5ba3ff" />
                                <circle cx="450" cy="100" r="10" fill="#2D8CFF" />
                                <rect x="450" y="100" width="40" height="6" fill="#5ba3ff" rx="3" />
                                <rect x="485" y="97" width="6" height="12" fill="#5ba3ff" rx="2" />
                            </g>
                            
                            {/* Decorative Elements */}
                            <g className="decorative-elements">
                                <circle cx="100" cy="80" r="3" fill="#2D8CFF" opacity="0.5" className="star" />
                                <circle cx="520" cy="60" r="2.5" fill="#5ba3ff" opacity="0.6" className="star" />
                                <circle cx="80" cy="120" r="2" fill="#2D8CFF" opacity="0.4" className="star" />
                                <circle cx="540" cy="140" r="2.5" fill="#5ba3ff" opacity="0.5" className="star" />
                            </g>
                        </svg>
                    </div>
                </div>

                {/* Right side - Content */}
                <div className="hero-content">
                    <div className="hero-main">
                        <div className="hero-badge">
                            <span className="badge">🏆 Trusted Since 2001</span>
                        </div>
                        <h1 className="hero-title">
                            Find Your Dream Property in <span className="gradient-text">Faridabad</span>
                        </h1>
                        <p className="hero-description">
                            Wadhwa Properties brings you 25+ years of expertise in Faridabad real estate. From
                            residential homes to commercial spaces, we help you make the right choice.
                        </p>
                        <div className="hero-cta">
                            <a href="tel:+919810623803" className="btn btn--primary btn--lg">
                                📞 Call +91 98106 23803
                            </a>
                            <a href="#contact" className="btn btn--outline btn--lg">
                                Get Free Consultation
                            </a>
                        </div>
                        <div className="hero-stats">
                            <div className="stat-card">
                                <div className="stat-number">500+</div>
                                <div className="stat-label">Properties Sold</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">25+</div>
                                <div className="stat-label">Years Experience</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">100%</div>
                                <div className="stat-label">Client Satisfaction</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">90+</div>
                                <div className="stat-label">Areas Covered</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
