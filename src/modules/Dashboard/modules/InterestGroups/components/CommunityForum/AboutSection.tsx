import CampusDetails from '../../../Campus/pages/CampusPage';
import styles from './CommunityForum.module.css';

const AboutSection = () => {
  return (
    <div className={styles.sectionContent}>
      <div className='w-full'>
        <CampusDetails />
      </div>
    </div>
  );
};

export default AboutSection;
