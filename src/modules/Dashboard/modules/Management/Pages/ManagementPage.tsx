import React from 'react';
import styles from './ManagementPage.module.css';

// Define the subcategories data for MuLearn Foundation Dashboard
const subcategories = [
  {
    icon: '📊', // Replace with an actual icon library like FontAwesome or Material Icons
    title: 'Karma Management',
    description: 'Track and manage karma points for users.',
  },
  {
    icon: '👥',
    title: 'Mentorship Tracking',
    description: 'Monitor mentor-mentee relationships and progress.',
  },
  {
    icon: '📚',
    title: 'Course Progress',
    description: 'View and analyze course completion rates.',
  },
  {
    icon: '🏆',
    title: 'Leaderboard',
    description: 'Display top performers based on karma and activity.',
  },
  {
    icon: '📋',
    title: 'Task Management',
    description: 'Organize and assign tasks to users effectively.',
  }
];

const ManagementPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Management</h1>
      <p className={styles.pageSubtitle}>Management Categories</p>

      {/* Card Layout */}
      <div className={styles.cardContainer}>
        {subcategories.map((category, index) => (
          <div key={index} className={styles.card}>
            <span className={styles.cardIcon}>{category.icon}</span>
            <h3 className={styles.cardTitle}>{category.title}</h3>
            <p className={styles.cardDescription}>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagementPage;