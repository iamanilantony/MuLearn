import type React from "react";
import styles from "./MentorCard.module.css";

interface MentorCardProps {
    mentor: Mentor;
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor }) => {
    return (
        <div className={styles.mentorCard}>
            <img
                src={mentor.image || "/placeholder.svg"}
                alt={mentor.name}
                className={styles.mentorImage}
            />
            <div className={styles.mentorDetails}>
                <div className={styles.mentorNameRole}>
                    <h2 className={styles.mentorName}>{mentor.name}</h2>
                    <p className={styles.mentorRole}>{mentor.role}</p>
                </div>
                <div className={styles.expertiseGroups}>
                    {mentor.expertise.map((exp, index) => (
                        <span key={index} className={styles.expertiseTag}>
                            {exp}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MentorCard;
