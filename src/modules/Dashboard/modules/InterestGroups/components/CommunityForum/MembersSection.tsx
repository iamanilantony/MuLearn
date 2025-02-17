import styles from './CommunityForum.module.css';

const MembersSection = () => {
  return (
    <div className={styles.sectionContent}>
      <h2>Members</h2>
      <p>
        This section will list all the members of the community along with their profiles, online status, and other details.
      </p>
      {/* You can add your members list component here */}
    </div>
  );
};

export default MembersSection;
