'use client';

import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';
import ScrollObserver from './ScrollObserver';

export default function Layout({ children }) {
    useEffect(() => {
        // Global utility for notifications (mimicking the original JS)
        window.WadhwaProperties = {
            showNotification: (message, type = 'info', duration = 5000) => {
                const existing = document.querySelector('.enhanced-notification');
                if (existing) existing.remove();

                const notification = document.createElement('div');
                notification.className = `enhanced-notification enhanced-notification--${type}`;

                const icon = type === 'success' ? '🎉' : type === 'error' ? '⚠️' : type === 'warning' ? '💡' : '📞';

                notification.innerHTML = `
          <div class="notification-content">
            <div class="notification-icon">${icon}</div>
            <div class="notification-text">
              <div class="notification-message">${message}</div>
            </div>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
          </div>
        `;

                document.body.appendChild(notification);

                setTimeout(() => {
                    notification.style.opacity = '0';
                    notification.style.transform = 'translateX(400px) scale(0.8)';
                    setTimeout(() => notification.remove(), 400);
                }, duration);
            }
        };

        // Console welcome message
        console.log('%c🏠 Welcome to Wadhwa Properties!', 'color: #3b82f6; font-size: 20px; font-weight: bold;');
    }, []);

    return (
        <>
            <ScrollProgress />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <BackToTop />
            <ScrollObserver />
        </>
    );
}
