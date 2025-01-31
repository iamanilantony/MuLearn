import React from "react";
import { Content, Topic } from "../../services/LearningPathInterfaces";
import { FiStar, FiEdit, FiCode } from "react-icons/fi";
import styles from "./LearningPathOne.module.css"; // Assuming this is the correct import for styles

type LearningPathInnerTableParams = {
    content: Content[];
    expanded: boolean;  // Add expanded prop
};

const LearningPathInnerTable = ({ content, expanded }: LearningPathInnerTableParams) => {
    return (
        <div className={`${styles.lessonContainer} ${expanded ? styles.expanded : ""}`}>
            {content && content.length > 0 ? (
                content.map((lesson: Content, lessonIndex) => (
                    <div key={lessonIndex} className={styles.lessonRow}>
                        <div className={styles.lessonLink}>
                            <a href={lesson.url} target="_blank" rel="noopener noreferrer">
                                {lesson.title}
                            </a>
                        </div>
                        <div>
                            <input type="checkbox" className={styles.checkbox} onChange={() => {}} />
                        </div>
                        <div>
                            <button className={`${styles.iconButton} ${styles.bookmark}`}>
                                <FiStar />
                            </button>
                        </div>
                        <div>
                            <button className={styles.iconButton}>
                                <FiEdit />
                            </button>
                        </div>
                        <div>
                            <button className={styles.iconButton}>
                                <FiCode />
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No lessons available</p>
            )}
        </div>
    );
};

export default LearningPathInnerTable;

