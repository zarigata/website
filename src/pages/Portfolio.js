// ██████╗ █████╗ ████████╗ ██████╗██╗  ██╗██╗   ██╗ ██████╗ ██████╗ ███╗   ███╗██████╗  █████╗ ███╗   ██╗██╗   ██╗
// ██╔════╝██╔══██╗╚══██╔══╝██╔════╝██║  ██║╚██╗ ██╔╝██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔══██╗████╗  ██║╚██╗ ██╔╝
// ██║     ███████║   ██║   ██║     ███████║ ╚████╔╝ ██║     ██║   ██║██╔████╔██║██████╔╝███████║██╔██╗ ██║ ╚████╔╝ 
// ██║     ██╔══██║   ██║   ██║     ██╔══██║  ╚██╔╝  ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██╔══██║██║╚██╗██║  ╚██╔╝  
// ╚██████╗██║  ██║   ██║   ╚██████╗██║  ██║   ██║   ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ██║  ██║██║ ╚████║   ██║   
//  ╚═════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   
// CODEX: Blog Page Component
// This component displays a mini blog with posts about Saudi market topics
// It features articles on AI, marketing, and web development trends in Saudi Arabia

import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Portfolio.css';

// Import blog posts data
import blogPosts from '../data/blogPosts';

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const [filter, setFilter] = useState('all');
  const [selectedPost, setSelectedPost] = useState(null);
  
  // Handle post selection
  const handlePostClick = (post) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };
  
  // Go back to post list
  const handleBackClick = () => {
    setSelectedPost(null);
  };

  // Filter blog posts based on selected category
  const filteredPosts = filter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  // Category labels
  const categories = {
    all: i18n.language === 'ar' ? 'الكل' : 'All',
    web: i18n.language === 'ar' ? 'تطوير الويب' : 'Web Development',
    marketing: i18n.language === 'ar' ? 'التسويق الرقمي' : 'Digital Marketing',
    ai: i18n.language === 'ar' ? 'الذكاء الاصطناعي' : 'AI Solutions'
  };

  return (
    <div className={`portfolio-page ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      {selectedPost ? (
        // Single Blog Post View
        <div className="blog-post-view">
          <button className="back-button" onClick={handleBackClick}>
            <i className="fas fa-arrow-left"></i> 
            {t('portfolio.backToBlog')}
          </button>
          
          <div className="blog-post-header">
            <h1>{selectedPost.title[i18n.language === 'ar' ? 'ar' : 'en']}</h1>
            <div className="post-meta">
              <span className="post-date"><i className="far fa-calendar-alt"></i> {selectedPost.date}</span>
              <span className="post-author"><i className="far fa-user"></i> {selectedPost.author[i18n.language === 'ar' ? 'ar' : 'en']}</span>
              <span className="post-category"><i className="far fa-folder"></i> {categories[selectedPost.category]}</span>
            </div>
          </div>
          
          <div className="blog-post-image">
            <img src={selectedPost.image} alt={selectedPost.title[i18n.language === 'ar' ? 'ar' : 'en']} />
          </div>
          
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: selectedPost.content[i18n.language === 'ar' ? 'ar' : 'en'] }}></div>
          
          <div className="blog-post-sources">
            <h3>{t('portfolio.sources')}</h3>
            <ul>
              {selectedPost.sources.map((source, index) => (
                <li key={index}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer">{source.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        // Blog List View
        <>
          {/* Blog Header */}
          <section className="portfolio-header">
            <div className="portfolio-header-content">
              <h1>{t('portfolio.title')}</h1>
              <p>{t('portfolio.blogDescription')}</p>
            </div>
          </section>

      {/* Blog Filters */}
      <section className="portfolio-filters">
        <div className="filter-buttons">
          {Object.entries(categories).map(([key, value]) => (
            <button
              key={key}
              className={`filter-button ${filter === key ? 'active' : ''}`}
              onClick={() => setFilter(key)}
            >
              {value}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-grid">
        {filteredPosts.map(post => (
          <div key={post.id} className="blog-card" onClick={() => handlePostClick(post)}>
            <div className="blog-image">
              <img src={post.image} alt={post.title[i18n.language === 'ar' ? 'ar' : 'en']} />
              <div className="blog-category">
                {categories[post.category]}
              </div>
            </div>
            <div className="blog-info">
              <h3>{post.title[i18n.language === 'ar' ? 'ar' : 'en']}</h3>
              <p className="blog-summary">{post.summary[i18n.language === 'ar' ? 'ar' : 'en']}</p>
              <div className="blog-meta">
                <span className="blog-date">{post.date}</span>
                <span className="blog-author">{post.author[i18n.language === 'ar' ? 'ar' : 'en']}</span>
              </div>
              <button className="read-more-btn">
                {t('portfolio.readMore')}
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="portfolio-cta">
        <div className="cta-content">
          <h2>
            {i18n.language === 'ar'
              ? 'هل تحتاج إلى حلول مخصصة للسوق السعودي؟'
              : 'Need Tailored Solutions for the Saudi Market?'}
          </h2>
          <p>
            {i18n.language === 'ar'
              ? 'نحن خبراء في تطوير حلول مخصصة للذكاء الاصطناعي والتسويق الرقمي وتطوير الويب للسوق السعودي.'
              : 'We specialize in developing custom AI, digital marketing, and web development solutions for the Saudi market.'}
          </p>
          <Link to="/contact" className="cta-button">
            {i18n.language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </Link>
        </div>
      </section>
        </>
      )}
    </div>
  );
};

export default Portfolio;
