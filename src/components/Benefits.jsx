'use client';

const benefits = [
    {
        icon: '🏛️',
        title: 'Business Legacy',
        description: 'Wadhwa Properties has been serving Faridabad since 2001, building trust through 25+ years of dedicated service.',
    },
    {
        icon: '📈',
        title: 'Market Growth',
        description: 'Faridabad real estate has grown 300% in the last decade, making it one of NCR\'s most promising investment destinations.',
    },
    {
        icon: '🌆',
        title: 'City Development',
        description: 'Faridabad is the largest city in Haryana and a major industrial hub with over 15,000 industrial units.',
    },
    {
        icon: '🚇',
        title: 'Connectivity',
        description: 'Metro connectivity and proximity to Delhi (25km) makes Faridabad ideal for working professionals.',
    },
    {
        icon: '💰',
        title: 'Price Advantage',
        description: 'Better value for money compared to Delhi with similar amenities and excellent appreciation potential.',
    },
    {
        icon: '🎓',
        title: 'Education Hub',
        description: 'Home to prestigious institutions and schools, making it perfect for families with educational aspirations.',
    },
];

export default function Benefits() {
    const handleTileClick = (title) => {
        if (typeof window !== 'undefined' && window.WadhwaProperties) {
            window.WadhwaProperties.showNotification(`Interested in ${title}? Let's discuss Faridabad opportunities!`, 'info');
            setTimeout(() => {
                window.open('tel:+919810623803', '_self');
            }, 1500);
        } else {
            window.open('tel:+919810623803', '_self');
        }
    };

    return (
        <section className="faridabad-benefits" id="faridabad">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <h2>Why Choose Faridabad?</h2>
                    <p>Discover the advantages that make Faridabad NCR's most promising real estate destination</p>
                </div>
                <div className="faridabad-grid stagger-children">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="benefit-tile"
                            onClick={() => handleTileClick(benefit.title)}
                        >
                            <div className="tile-icon">{benefit.icon}</div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
