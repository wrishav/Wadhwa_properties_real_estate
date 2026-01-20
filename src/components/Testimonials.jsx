'use client';

const testimonials = [
    {
        text: '"Satish ji helped us find our dream home in Sector 15. His honesty and transparency throughout the deal was commendable. Highly recommended!"',
        author: 'Rajesh Kumar',
        role: 'Home Buyer',
        avatar: 'RK',
    },
    {
        text: '"I have been investing with Wadhwa Properties for over 10 years. Their market insights and advice have always yielded great returns."',
        author: 'Amit Sharma',
        role: 'Investor',
        avatar: 'AS',
    },
    {
        text: '"Professional service and smooth documentation process. They handled everything for my rental property in Greater Faridabad."',
        author: 'Priya Gupta',
        role: 'NRI Client',
        avatar: 'PG',
    },
];

export default function Testimonials() {
    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <div className="section-header">
                    <h2>Client Testimonials</h2>
                    <p>What our valued clients say about us</p>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-content">
                                <p>{testimonial.text}</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-avatar">{testimonial.avatar}</div>
                                <div className="author-info">
                                    <h4>{testimonial.author}</h4>
                                    <span>{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
