import { useEffect, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { getLearningPathOne } from "../../services/LearningPathApis";
import { SingleLearningPath } from "../../services/LearningPathInterfaces";
import styles from "./LearningPathOne.module.css";
import { FiArrowLeft } from 'react-icons/fi';
import { BsShare, BsChat, BsAward, BsPeople } from 'react-icons/bs';
import { useParams } from "react-router-dom";
import { Avatar, AvatarGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import LearningPathTable from "./LearningPathTable";
import LearningPathOverview from "./LearningPathOverview";
import LearningCircles from "./LearningCircles";

const LearningPathOne = () => {
    const [activeTopic, setActiveTopic] = useState('');
    const [activeSection, setActiveSection] = useState<string>('Overview');
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

    return (
        <div className={styles.roadmapContainer}>
            <div className={styles.header}>
                <button className={styles.backButton} onClick={() => navigate('/dashboard/learning-paths')}>
                    <FiArrowLeft className={styles.backIcon} />
                    <span>Java Developer Roadmap</span>
                </button>
            </div>

            <div className={styles.navigationTabs}>
                <nav className={styles.tabList}>
                    {['Overview', 'Topics', 'Learning Circles'].map((tab) => (
                        <button
                            key={tab}
                            className={`${styles.tabButton} ${activeSection === tab ? styles.active : ''
                                }`}
                            onClick={() => setActiveSection(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>

            {
                activeSection === 'Overview' && (
                    <LearningPathOverview learningPathData={learningPathData} setActiveSection={setActiveSection}/>
                )
            }
            {
                activeSection === 'Topics' && (
                    <div>
                        <div className={styles.actionButtons}>
                            {navigationItems.map((item, index) => (
                                <button key={index} className={styles.actionButton}>
                                    <span className={styles.actionIcon} style={{ color: item.color }}>{item.icon}</span>
                                    <span>{item.text}</span>
                                </button>
                            ))}
                        </div>

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
                        <LearningPathTable learningPathData={learningPathData.topics.find(t => t.code === activeTopic)} />

                    </div>
                )
            }
            {
                activeSection === 'Learning Circles' && (
                    <div>
                        <LearningCircles />
                    </div>
                )
            }
        </div>
    );
};

export default LearningPathOne;






