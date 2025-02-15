import type React from "react";
import styles from "./UserCard.module.css";

// Define the User interface
interface User {
    id: number;
    name: string;
    college: string;
    interests: string[];
    karma: number;
    image: string;
}

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
                <h2 className={styles.userName}>{user.name}</h2>
                <p className={styles.userCollege}>{user.college}</p>
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
