import React, { useState } from 'react';
import AboutSection from './AboutSection';
import ForumSection from './ForumSection';
import MembersSection from './MembersSection';
import EventsSection from './EventsSection';
import styles from './CommunityForum.module.css';

const CommunityForumPage = () => {
  const [activeTab, setActiveTab] = useState('Forum');

  return (
    <div className={styles.container}>
      {/* Navigation */}
      <div className={styles.navMenu}>
        <button
          onClick={() => setActiveTab('About')}
          className={activeTab === 'About' ? styles.navButtonActive : styles.navButton}
        >
          About
        </button>
        <button
          onClick={() => setActiveTab('Forum')}
          className={activeTab === 'Forum' ? styles.navButtonActive : styles.navButton}
        >
          Forum
        </button>
        <button
          onClick={() => setActiveTab('Members')}
          className={activeTab === 'Members' ? styles.navButtonActive : styles.navButton}
        >
          Members
        </button>
        <button
          onClick={() => setActiveTab('Events')}
          className={activeTab === 'Events' ? styles.navButtonActive : styles.navButton}
        >
          Events
        </button>
      </div>

      {/* Content Area */}
      <div className={styles.contentArea}>
        {activeTab === 'About' && <AboutSection />}
        {activeTab === 'Forum' && <ForumSection />}
        {activeTab === 'Members' && <MembersSection />}
        {activeTab === 'Events' && <EventsSection />}
      </div>
    </div>
  );
};

export default CommunityForumPage;
