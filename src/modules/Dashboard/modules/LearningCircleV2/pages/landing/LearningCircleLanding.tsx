import MuLoader from "@/MuLearnComponents/MuLoader/MuLoader";
import styles from "./LearningCircleLanding.module.css";
import imageTop from "../../assets/images/LC2.webp";
import { useState } from "react";
import { PowerfulButton } from "@/MuLearnComponents/MuButtons/MuButton";
import { customReactSelectStyles } from "../../utils/buttonConfiguration/common";
import SelectTab from "react-select";
import { FaBookmark, FaMapMarkerAlt } from "react-icons/fa";

interface Option {
    value: string;
    label: string;
}
const options: Option[] = [
    { value: "value1", label: "catagory" },
    { value: "value2", label: "Peer" }
];
const LearningCircleLanding = () => {
    const [isLoading, setisLoading] = useState(false);
    const [selected, setselected] = useState<Option | null>(options[0]);

    const selectionChange = (selected: Option | null) => {
        setselected(selected);
    };

    const handleCreate = () => {
        console.log("Create");
    };

    const dummyEvents = [
        {
            title: "Learn Web development using django",
            location: "Government College Thalassery",
            date: "Aug 10, 10:00 PM",
            duration: "5 Hours",
            karmaPoints: "Earn Karma Points"
        },
        {
            title: "Introduction to Machine Learning",
            location: "Online",
            date: "Sep 15, 2:00 PM",
            duration: "3 Hours",
            karmaPoints: "Earn Karma Points"
        },
        {
            title: "Advanced React Workshop",
            location: "Tech Park",
            date: "Oct 5, 11:00 AM",
            duration: "4 Hours",
            karmaPoints: "Earn Karma Points"
        },
        {
            title: "Data Science Bootcamp",
            location: "City Library",
            date: "Nov 20, 9:00 AM",
            duration: "6 Hours",
            karmaPoints: "Earn Karma Points"
        },
        {
            title: "Cybersecurity Basics",
            location: "Community Center",
            date: "Dec 1, 1:00 PM",
            duration: "2 Hours",
            karmaPoints: "Earn Karma Points"
        },
        {
            title: "AI and Ethics",
            location: "University Hall",
            date: "Jan 15, 3:00 PM",
            duration: "4 Hours",
            karmaPoints: "Earn Karma Points"
        },
        {
            title: "Blockchain Fundamentals",
            location: "Innovation Hub",
            date: "Feb 10, 10:00 AM",
            duration: "3 Hours",
            karmaPoints: "Earn Karma Points"
        },
        {
            title: "Cloud Computing Essentials",
            location: "Online",
            date: "Mar 5, 4:00 PM",
            duration: "2 Hours",
            karmaPoints: "Earn Karma Points"
        },
        {
            title: "Introduction to Quantum Computing",
            location: "Tech Conference Center",
            date: "Apr 12, 1:00 PM",
            duration: "5 Hours",
            karmaPoints: "Earn Karma Points"
        }
    ];

    return (
        <>
            {isLoading ? (
                <div className={styles.loader_container}>
                    <MuLoader />
                </div>
            ) : (
                <div className={styles.learningCircleLandingPage}>
                    <div className={styles.headContent}>
                        <img src={imageTop} alt="image" loading="eager" />
                        <div className={styles.learningCircleLandingPageDesc}>
                            <h1>Learn, share, together</h1>
                            <b>
                                A fantastic way to spend a small amount of time
                                learning about new things with a group of people
                                with same interests!
                            </b>
                            <div
                                className={
                                    styles.learningCircleLandingPageButton
                                }
                            >
                                <PowerfulButton
                                    children="Create a Learning Circle"
                                    style={{
                                        paddingLeft: "2rem",
                                        backgroundColor:
                                            "rgba(69, 111, 246, 1)",
                                        paddingRight: "2rem"
                                    }}
                                    onClick={handleCreate}
                                />
                                <PowerfulButton
                                    children="What is a Learning CIrcle?"
                                    variant="outline"
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between"
                        }}
                        className={styles.middleContainer}
                    >
                        <SelectTab
                            placeholder={"Select Role"}
                            options={options}
                            styles={customReactSelectStyles}
                            value={selected}
                            onChange={selectionChange}
                        />

                        <PowerfulButton
                            variant="primary"
                            style={{
                                borderRadius: "1.5rem",
                                backgroundColor: "rgba(69, 111, 246, 1)",
                                fontWeight: "bold",
                                padding: "0.5rem 1rem"
                            }}
                        >
                            Your Learning Circles{" "}
                            <svg
                                width="6"
                                height="13"
                                viewBox="0 0 6 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.115734 0.146894C0.152328 0.100331 0.1958 0.0633878 0.243659 0.0381813C0.291519 0.0129749 0.342827 0 0.394643 0C0.44646 0 0.497768 0.0129749 0.545628 0.0381813C0.593487 0.0633878 0.636959 0.100331 0.673553 0.146894L5.40083 6.14689C5.43751 6.19334 5.46662 6.24852 5.48648 6.30926C5.50634 6.37001 5.51656 6.43513 5.51656 6.50089C5.51656 6.56666 5.50634 6.63178 5.48648 6.69253C5.46662 6.75327 5.43751 6.80845 5.40083 6.85489L0.673553 12.8549C0.599581 12.9488 0.499255 13.0015 0.394643 13.0015C0.290032 13.0015 0.189706 12.9488 0.115734 12.8549C0.041763 12.761 0.000206254 12.6337 0.000206254 12.5009C0.000206254 12.3681 0.041763 12.2408 0.115734 12.1469L4.56489 6.50089L0.115734 0.854894C0.0790481 0.808448 0.0499415 0.753273 0.0300819 0.692528C0.0102222 0.631782 0 0.566661 0 0.500894C0 0.435127 0.0102222 0.370005 0.0300819 0.30926C0.0499415 0.248515 0.0790481 0.19334 0.115734 0.146894Z"
                                    fill="white"
                                />
                            </svg>
                        </PowerfulButton>
                    </div>
                    <div className={styles.cardContainer}>
                        {dummyEvents.map((event, index) => (
                            <div className={styles.card} key={index}>
                                <div>
                                    <span>tag</span>
                                    {
                                        // make the oppacity 0 if not needed
                                    }
                                </div>
                                <h2 className={styles.title}>{event.title}</h2>
                                <div className={styles.location}>
                                    <FaMapMarkerAlt className={styles.icon} />
                                    <span>{event.location}</span>
                                </div>
                                <div className={styles.details}>
                                    <span className={styles.date}>
                                        {event.date}
                                    </span>
                                    <span className={styles.duration}>
                                        {event.duration}
                                    </span>
                                    <span className={styles.karmaPoints}>
                                        {event.karmaPoints}
                                    </span>
                                </div>
                                <div className={styles.footer}>
                                    <FaBookmark
                                        className={styles.bookmarkIcon}
                                    />
                                    <button className={styles.joinButton}>
                                        Join Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default LearningCircleLanding;
