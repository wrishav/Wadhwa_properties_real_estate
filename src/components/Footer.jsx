'use client';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-main">
                        <div className="footer-brand">
                            <h3>Wadhwa Properties</h3>
                            <p>Your trusted real estate partner in Faridabad since 2001</p>
                        </div>
                        <div className="footer-contact">
                            <h4>Contact Information</h4>
                            <p>📞 <a href="tel:+919810623803"><b>Primary Contact : </b> +91 98106 23803</a></p>
                            <p>📞 <a href="tel:+917011084247"><b>Secondary Contact : </b> +91 70110 84247</a></p>
                            <p>✉️ <a href="mailto:wadhwaproperties16@gmail.com">wadhwaproperties16@gmail.com</a></p>
                            <p>📍 H.No 178, Sector 16, Faridabad, Haryana 121002</p>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} Wadhwa Properties. All rights reserved. | Serving Faridabad since 2001</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
