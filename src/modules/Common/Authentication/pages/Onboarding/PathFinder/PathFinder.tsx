import React, { useState, useEffect } from "react";
import OnboardingTemplate from "../../../components/OnboardingTeamplate/OnboardingTemplate";
import styles from "./PathFinder.module.css";
import { PowerfulButton } from "@/MuLearnComponents/MuButtons/MuButton";
import { Button } from "@chakra-ui/react";

interface Question {
    question: string;
    options: { text: string; category: string }[];
}

const originalQuestions: Question[] = [
    {
        question: "What kind of activities do you enjoy the most?",
        options: [
            {
                text: "Building or crafting physical projects and experimenting with new materials.",
                category: "A"
            },
            {
                text: "Coding and creating software solutions or working with technology.",
                category: "B"
            },
            {
                text: "Designing visual elements, user interfaces, or developing creative content.",
                category: "C"
            },
            {
                text: "Managing projects, understanding market needs, or exploring new knowledge areas.",
                category: "D"
            }
        ]
    },
    {
        question: "Which of the following skills do you want to improve or develop?",
        options: [
            {
                text: "Robotics, 3D printing, or IoT-based projects.",
                category: "A"
            },
            {
                text: "Programming, debugging, or developing new applications and algorithms.",
                category: "B"
            },
            {
                text: "Visual communication, UX/UI design, or multimedia creation.",
                category: "C"
            },
            {
                text: "Leadership, marketing, research, or analysis skills.",
                category: "D"
            }
        ]
    },
    {
        question: "How do you approach problem-solving?",
        options: [
            {
                text: "By physically experimenting, creating prototypes, and iterating based on testing.",
                category: "A"
            },
            {
                text: "By writing code, creating logical solutions, and troubleshooting issues.",
                category: "B"
            },
            {
                text: "By brainstorming creative approaches, sketching, or creating visual solutions.",
                category: "C"
            },
            {
                text: "By analyzing the problem holistically, researching, and planning solutions with strategic thinking.",
                category: "D"
            }
        ]
    },
    {
        question: "Which tools or resources are you most interested in using or learning?",
        options: [
            {
                text: "Electronic components, fabrication tools, robotics kits.",
                category: "A"
            },
            {
                text: "Programming languages, development frameworks, software tools.",
                category: "B"
            },
            {
                text: "Graphic design tools, wireframing software, creative suites.",
                category: "C"
            },
            {
                text: "Business models, research papers, management tools, or policy frameworks.",
                category: "D"
            }
        ]
    },
    {
        question: "What kind of project excites you the most?",
        options: [
            {
                text: "Creating a new physical device, electronic gadget, or automated system.",
                category: "A"
            },
            {
                text: "Developing an app, creating a software tool, or building a machine learning model.",
                category: "B"
            },
            {
                text: "Designing a logo, improving a website’s user experience, or making digital illustrations.",
                category: "C"
            },
            {
                text: "Organizing an event, analyzing data trends, developing a new business idea.",
                category: "D"
            }
        ]
    },
    {
        question: "Which statement resonates most with your aspirations?",
        options: [
            {
                text: "I want to bring my ideas to life by building things with my hands.",
                category: "A"
            },
            {
                text: "I want to create impactful digital solutions and applications.",
                category: "B"
            },
            {
                text: "I want to communicate stories and ideas through design and visuals.",
                category: "C"
            },
            {
                text: "I want to lead, strategize, and innovate to solve broader problems.",
                category: "D"
            }
        ]
    },
    {
        question: "In a team project, you usually prefer to:",
        options: [
            {
                text: "Take the lead in building and assembling the project.",
                category: "A"
            },
            {
                text: "Handle the technical aspects and coding of the project.",
                category: "B"
            },
            {
                text: "Focus on the design and presentation of the project.",
                category: "C"
            },
            {
                text: "Organize the project, plan timelines, and ensure communication.",
                category: "D"
            }
        ]
    },
    {
        question: "What motivates you the most?",
        options: [
            {
                text: "The thrill of creating something tangible and functional.",
                category: "A"
            },
            {
                text: "Solving complex problems and coding challenges.",
                category: "B"
            },
            {
                text: "Creating visually appealing designs that communicate effectively.",
                category: "C"
            },
            {
                text: "Leading a team to success and achieving strategic goals.",
                category: "D"
            }
        ]
    }
];

// Function to shuffle questions randomly
const shuffleQuestions = (questions: Question[]): Question[] => {
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const PathFinder: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [scores, setScores] = useState<Record<"A" | "B" | "C" | "D", number>>(
        {
            A: 0,
            B: 0,
            C: 0,
            D: 0
        }
    );
    const [selectedOptions, setSelectedOptions] = useState<Record<number, string[]>>({});
    const [showResults, setShowResults] = useState(false);
    const [questions, setQuestions] = useState<Question[]>([]);

    useEffect(() => {
        // Shuffle questions whenever the component is loaded
        setQuestions(shuffleQuestions(originalQuestions));
    }, []);

    const handleNextQuestion = () => {
        if (!selectedOptions[currentQuestionIndex] || selectedOptions[currentQuestionIndex].length === 0) {
            alert("Please select at least one option to proceed.");
            return;
        }

        const updatedScores = { ...scores };
        selectedOptions[currentQuestionIndex].forEach(category => {
            updatedScores[category as "A" | "B" | "C" | "D"] += 1;
        });
        setScores(updatedScores);

        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResults(true);
        }
    };

    const handlePrevQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleOptionChange = (category: string) => {
        setSelectedOptions(prevSelectedOptions => {
            const updatedOptions = [...(prevSelectedOptions[currentQuestionIndex] || [])];
            if (updatedOptions.includes(category)) {
                const index = updatedOptions.indexOf(category);
                updatedOptions.splice(index, 1); // Remove category
            } else {
                updatedOptions.push(category); // Add category
            }
            return {
                ...prevSelectedOptions,
                [currentQuestionIndex]: updatedOptions
            };
        });
    };

    const getRecommendedPathway = () => {
        const maxScore = Math.max(scores.A, scores.B, scores.C, scores.D);
        if (scores.A === maxScore) return "Maker";
        if (scores.B === maxScore) return "Coder";
        if (scores.C === maxScore) return "Designer";
        return "Others";
    };

    return (
        <OnboardingTemplate>
            <div className={styles.pathFinderContainer}>
                <h1>Pathway Identification Questionnaire</h1>
                <p>
                    Instructions: For each question, select the options that
                    best describe you.
                </p>

                {!showResults ? (
                    <div className={styles["question-box"]}>
                        <p className={styles["question-no"]}>
                            Question No: {currentQuestionIndex + 1} /{" "}
                            {questions.length}
                        </p>
                        {questions[currentQuestionIndex] && (
                            <>
                                <h4>
                                    {questions[currentQuestionIndex].question}
                                </h4>
                                <table className={styles["options-table"]}>
                                    <tbody>
                                        {questions[currentQuestionIndex].options.map((option, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            name={`question${currentQuestionIndex}`}
                                                            value={option.category}
                                                            checked={selectedOptions[currentQuestionIndex]?.includes(option.category) || false}
                                                            onChange={() => handleOptionChange(option.category)}
                                                        />
                                                        {option.text}
                                                    </label>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div className={styles["action-buttons"]}>
                                    <Button onClick={handlePrevQuestion}>Prev</Button>
                                    <Button onClick={handleNextQuestion}>Next</Button>
                                </div>
                            </>
                        )}
                    </div>
                ) : (
                    <div className={styles["result-box"]}>
                        <h2>Your Recommended Pathway: {getRecommendedPathway()}</h2>
                    </div>
                )}
            </div>
        </OnboardingTemplate>
    );
};

export default PathFinder;
