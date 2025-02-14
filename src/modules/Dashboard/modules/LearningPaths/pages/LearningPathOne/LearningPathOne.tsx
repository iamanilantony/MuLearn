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
import ProofOfWork from "./ProofOfWork/ProofOfWork";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const LearningPathOne = () => {
  const [activeLevel, setActiveLevel] = useState(1);
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
    getLearningPathOne(id, setLearningPathData);
    learningPathData.topics?.length && setActiveTopic(learningPathData.mainTopics[0]);
  }, [id, learningPathData.mainTopics, learningPathData.topics?.length]);

  const navigate = useNavigate();

  const navigationItems = [
    { icon: <BsShare />, text: 'Share Your Progress', color: 'orange' },
    // { icon: <BsChat />, text: 'Chat with Peers', color: 'green' },
    { icon: <BsAward />, text: 'Roadmap Certificate', color: 'red' },
    // { icon: <BsPeople />, text: 'Find Your Buddy', color: 'brown' }
  ];

  // Render content based on activeSection
  const renderSectionContent = () => {
    switch (activeSection) {
      case 'Overview':
        return (
          <LearningPathOverview 
            learningPathData={learningPathData} 
            setActiveSection={setActiveSection} 
          />
        );
      case 'Topics':
        return (
          <div>
            <div className={styles.actionButtons}>
              {navigationItems.map((item, index) => (
                <button key={index} className={styles.actionButton}>
                  <span className={styles.actionIcon} style={{ color: item.color }}>
                    {item.icon}
                  </span>
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
                  className={`${styles.topicButton} ${activeTopic === topic ? styles.active : ''}`}
                  onClick={() => setActiveTopic(topic)}
                >
                  {topic}
                </button>
              ))}
            </div>
            <TransitionGroup>
              <CSSTransition
                key={activeLevel}
                timeout={300}
                classNames={{
                  enter: styles.slideEnter,
                  enterActive: styles.slideEnterActive,
                  exit: styles.slideExit,
                  exitActive: styles.slideExitActive,
                }}
              >
                <LearningPathTable 
                  learningPathData={learningPathData.topics.find(t => t.code === activeTopic)} 
                />
              </CSSTransition>
            </TransitionGroup>
          </div>
        );
      case 'Proof of Works':
        return <ProofOfWork />;
      case 'Learning Circles':
        return (
          <div>
            <LearningCircles />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.roadmapContainer}>
      <div className={styles.header}>
        <button className={styles.backButton} onClick={() => navigate('/dashboard/learning-paths')}>
          <FiArrowLeft className={styles.backIcon} />
          <span>{learningPathData.title}</span>
        </button>
      </div>

      <div className={styles.navigationTabs}>
        <nav className={styles.tabList}>
          {['Overview', 'Topics', 'Proof of Works', 'Learning Circles'].map((tab) => (
            <button
              key={tab}
              className={`${styles.tabButton} ${activeSection === tab ? styles.active : ''}`}
              onClick={() => setActiveSection(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      <TransitionGroup>
        <CSSTransition
          key={activeSection}
          timeout={300}
          classNames={{
            enter: styles.slideEnter,
            enterActive: styles.slideEnterActive,
            exit: styles.slideExit,
            exitActive: styles.slideExitActive,
          }}
        >
          <div className={styles.sectionContent}>
            {renderSectionContent()}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default LearningPathOne;
