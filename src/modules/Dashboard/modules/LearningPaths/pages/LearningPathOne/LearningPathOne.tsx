import { useEffect, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { getLearningPathOne } from "../../services/LearningPathApis";
import { SingleLearningPath } from "../../services/LearningPathInterfaces";
import styles from "./LearningPathOne.module.css";
import React from 'react';
import { FiArrowLeft} from 'react-icons/fi';
import { BsShare, BsChat, BsAward, BsPeople } from 'react-icons/bs';
import { useParams } from "react-router-dom";
import { Avatar, AvatarGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import LearningPathTable from "./LearningPathTable";

const LearningPathOne = () => {
    const [activeTab, setActiveTab] = useState('topics');
    const [activeTopic, setActiveTopic] = useState('');
    const [expandedSection, setExpandedSection] = useState('basics');
    const [expandedTopic, setExpandedTopic] = useState('introduction');
    const [learningPathData, setLearningPathData] = useState<SingleLearningPath>({
        id: "",
        title: "",
        desc: "",
        overview: "",
        learnings: [],
        level: 0,
        skills: [],
        projects: [],
        mainTopics: [],
        ig: "",
        learners: 0,
        mentors: 0,
        topics: []
      });
    const { id = '' } = useParams();


    useEffect(() => {
        getLearningPathOne(id, setLearningPathData)
        learningPathData.topics?.length && setActiveTopic(learningPathData.mainTopics[0])
    }, [id, learningPathData.mainTopics, learningPathData.topics?.length])

    const navigate = useNavigate()

    const navigationItems = [
        { icon: <BsShare />, text: 'Share Your Progress', color: 'orange' },
        { icon: <BsChat />, text: 'Chat with Peers', color: 'green' },
        { icon: <BsAward />, text: 'Roadmap Certificate', color: 'red' },
        { icon: <BsPeople />, text: 'Find Your Buddy', color: 'brown' }
    ];

    const topics = [
        { id: 'basics', title: 'Basics of Java', active: true },
        { id: 'oops1', title: 'OOPS-1 Java' },
        { id: 'dsa', title: 'DSA Java' },
        { id: 'oops2', title: 'OOPS-2 Java' },
        { id: 'springboot', title: 'Java Springboot' },
        { id: 'servlet', title: 'JSP Servlet' },
        { id: 'server', title: 'Server Management' },
        { id: 'misc', title: 'Miscellaneous Java' }
    ];

    const lessons = [
        { id: 1, title: 'How to Run Java Program', completed: true },
        { id: 2, title: 'Data Types', completed: false },
        { id: 3, title: 'Variables', completed: false },
        { id: 4, title: 'Input Output in Java', completed: false },
        { id: 5, title: 'Practice Problem 1', completed: false },
        { id: 6, title: 'Practice Problem 2', completed: false },
        { id: 7, title: 'Practice Problem 3', completed: false }
    ];

    return (
        <div className={styles.roadmapContainer}>
            {/* Header */}
            <div className={styles.header}>
                <button className={styles.backButton} onClick={() => navigate('/dashboard/learning-paths')}>
                    <FiArrowLeft className={styles.backIcon} />
                    <span>Java Developer Roadmap</span>
                </button>
            </div>

            {/* Navigation Tabs */}
            <div className={styles.navigationTabs}>
                <nav className={styles.tabList}>
                    {['Overview', 'Topics', 'Community'].map((tab) => (
                        <button
                            key={tab}
                            className={`${styles.tabButton} ${activeTab === tab.toLowerCase() ? styles.active : ''
                                }`}
                            onClick={() => setActiveTab(tab.toLowerCase())}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Action buttons */}
            <div className={styles.actionButtons}>
                {navigationItems.map((item, index) => (
                    <button key={index} className={styles.actionButton}>
                        <span className={styles.actionIcon} style={{color: item.color}}>{item.icon}</span>
                        <span>{item.text}</span>
                        {/* {index < navigationItems.length - 1 && (
                            <FiChevronRight className={styles.actionIcon} />
                        )} */}
                    </button>
                ))}
            </div>

            {/* Stats */}
            <div className={styles.stats}>
                <div className={styles.statGroup}>
                    <AvatarGroup>
                        <Avatar size="xs" name="Sage" src="https://bit.ly/sage-adebayo" />
                        <Avatar size="xs" name="Sage" src="https://bit.ly/dan-abramov" />
                        <Avatar size="xs" name="Sage" src="https://bit.ly/dan-abramov" />
                    </AvatarGroup>
                    <span className={styles.statText}>25.7K+ Peers Working on this Roadmap</span>
                </div>
                <div className={styles.statGroup}>
                    <AvatarGroup>
                        <Avatar size="xs" name="Sage" src="https://bit.ly/dan-abramov" />
                        <Avatar size="xs" name="Sage" src="https://bit.ly/sage-adebayo" />
                        <Avatar size="xs" name="Sage" src="https://bit.ly/dan-abramov" />
                    </AvatarGroup>
                    <span className={styles.statText}>61+ Mentors Master of this Roadmap</span>
                </div>
            </div>

            {/* Topics Navigation */}
            <div className={styles.topicsNav}>
                {learningPathData.mainTopics?.map((topic, index) => (
                    <button
                        key={index}
                        className={`${styles.topicButton} ${activeTopic === topic ? styles.active : ''
                            }`}
                        onClick={() => setActiveTopic(topic)}
                    >
                        {topic}
                    </button>
                ))}
            </div>
                <LearningPathTable learningPathData={learningPathData.topics.find(t => t.code === activeTopic)}/>
        </div>
    );
};

export default LearningPathOne;






