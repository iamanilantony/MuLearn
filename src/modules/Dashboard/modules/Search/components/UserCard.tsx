import type React from "react";
import styles from "./UserCard.module.css";



interface UserCardProps {
    user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    
    return (
        <div className={styles.userCard}>
            <img
                src={user.image || "/placeholder.svg"}
                alt={user.name}
                className={styles.userImage}
            />
            <div className={styles.userDetails}>
                <div className={styles.userHeader}>
                    <h2 className={styles.userName}>{user.name}{" "}<span>({user.college})</span></h2>
                    <h3 className={styles.userMUID}>{user.muid}</h3>
                </div>
              
                <div className={styles.interestGroups}>
                    {user.interests.map((interest, index) => (
                        <span key={index} className={styles.interestTag}>
                            {interest}
                        </span>
                    ))}
                </div>
                <p className={styles.karmaPoints}>Karma: {user.karma}</p>
            </div>
        </div>
    );
};

export default UserCard;
