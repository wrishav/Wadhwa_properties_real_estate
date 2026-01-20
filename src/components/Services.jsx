'use client';

const services = [
    {
        icon: '🏠',
        title: 'Property Sale',
        description: 'Expert guidance and market analysis to sell your property at the best price in minimum time.',
        features: ['Market Valuation', 'Legal Documentation', 'Buyer Matching'],
    },
    {
        icon: '🔑',
        title: 'Property Purchase',
        description: 'Find your dream home or investment property with our extensive network and local expertise.',
        features: ['Property Search', 'Site Visits', 'Negotiation Support'],
    },
    {
        icon: '📋',
        title: 'Property Rental',
        description: 'Hassle-free rental solutions for both tenants and landlords with complete documentation.',
        features: ['Tenant Verification', 'Rent Agreements', 'Maintenance Support'],
    },
    {
        icon: '💼',
        title: 'Consultation',
        description: 'Professional advice on property investment, market trends, and legal compliance.',
        features: ['Investment Planning', 'Market Analysis', 'Legal Guidance'],
    },
];

export default function Services() {
    const handleServiceClick = (title) => {
        // In a real app, this might open a modal or navigate
        // For now, we'll mimic the original behavior of showing a notification and calling
        if (typeof window !== 'undefined' && window.WadhwaProperties) {
            window.WadhwaProperties.showNotification(`Interested in ${title}? Let's discuss your requirements!`, 'info');
            setTimeout(() => {
                window.open('tel:+919810623803', '_self');
            }, 1500);
        } else {
            window.open('tel:+919810623803', '_self');
        }
    };

    return (
        <section className="services" id="services">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <h2>Our Expert Services</h2>
                    <p>Comprehensive real estate solutions tailored to your needs</p>
                </div>
                <div className="services-grid stagger-children">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card"
                            onClick={() => handleServiceClick(service.title)}
                        >
                            <div className="service-icon">
                                <span>{service.icon}</span>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <ul className="service-features">
                                {service.features.map((feature, fIndex) => (
                                    <li key={fIndex}>{feature}</li>
                                ))}
                            </ul>
                            <div className="service-arrow">→</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
