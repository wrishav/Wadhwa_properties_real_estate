'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#faridabad', label: 'Faridabad' },
    { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const root = document.documentElement;
        const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
        const initialTheme = saved || root.getAttribute('data-theme') || 'light';
        root.setAttribute('data-theme', initialTheme);
        setTheme(initialTheme);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active link based on scroll position
            const sections = document.querySelectorAll('section[id]');
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100;
                const sectionBottom = sectionTop + section.offsetHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                    setActiveLink(`#${section.id}`);
                }
            });

            // Close mobile menu on scroll
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobileMenuOpen]);

    useEffect(() => {
        // Close mobile menu when clicking outside
        const handleClickOutside = (event) => {
            const nav = document.getElementById('navbar');
            const menu = document.getElementById('nav-menu');
            if (isMobileMenuOpen && nav && menu && !nav.contains(event.target) && !menu.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        // Prevent body scroll when mobile menu is open
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('click', handleClickOutside);
            return () => {
                document.body.style.overflow = '';
                document.removeEventListener('click', handleClickOutside);
            };
        } else {
            document.body.style.overflow = '';
        }
    }, [isMobileMenuOpen]);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const navbarHeight = 80;
            const targetPosition = element.offsetTop - navbarHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
            });
            setActiveLink(href);
            setIsMobileMenuOpen(false);
        }
    };

    const handleWhatsAppClick = (e) => {
        e.preventDefault();
        const message = encodeURIComponent(
            'Hello! I am interested in your real estate services in Faridabad. Please provide more information about available properties.'
        );
        window.open(`https://wa.me/919810623803?text=${message}`, '_blank');
    };

    const toggleTheme = () => {
        const root = document.documentElement;
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', nextTheme);
        localStorage.setItem('theme', nextTheme);
        setTheme(nextTheme);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="navbar-container">
                {/* Logo Left */}
                <div className="nav-brand">
                    <Link href="/" className="logo-mark">
                        <Image
                            src="/wadhwa-logo.png"
                            alt="Wadhwa Properties"
                            width={65}
                            height={65}
                            className="nav-logo-img"
                            priority
                        />
                        <div className="logo-text">
                            <h1 className="company-name">Wadhwa Properties</h1>
                            <span className="company-year">Since 2001</span>
                        </div>
                    </Link>
                </div>

                {/* Center Navigation Links */}
                <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="nav-menu">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`nav-link ${activeLink === link.href ? 'active' : ''}`}
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Right Controls */}
                <div className="nav-controls">
                    <button
                        type="button"
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
                    >
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                    <a href="tel:+919810623803" className="btn btn--primary nav-call-btn">
                        📞 Call Now
                    </a>
                    <a
                        href="https://wa.me/919810623803"
                        className="whatsapp-nav-btn"
                        onClick={handleWhatsAppClick}
                        title="WhatsApp"
                    >
                        💬
                    </a>
                    <button
                        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
