import MuLoader from "@/MuLearnComponents/MuLoader/MuLoader";
import styles from "./LearningCircleLanding.module.css";
import imageTop from "../../assets/images/LC2.webp";
import { useEffect, useState } from "react";
import { PowerfulButton } from "@/MuLearnComponents/MuButtons/MuButton";
import { customReactSelectStyles } from "../../utils/buttonConfiguration/common";
import SelectTab from "react-select";
import { FaBookmark, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
    getMeetups,
    joinMeetup,
    unsaveMeetup
} from "../../services/LearningCircleAPIs";
import { color } from "framer-motion";
import MuModal from "@/MuLearnComponents/MuModal/MuModal";
import { Input } from "@chakra-ui/react";

interface Option {
    value: string;
    label: string;
}

const INITIAL_INTERESTS = [
    { label: "All Categories", value: "all" },
    { label: "Coder", value: "coder" },
    { label: "Hardware", value: "hardware" },
    { label: "Manager", value: "manager" },
    { label: "Creative", value: "creative" }
];

const LearningCircleLanding = () => {
    const [isLoading, setisLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<Option | null>(
        INITIAL_INTERESTS[0]
    );
    const [meetups, setMeetups] = useState<CircleMeetupInfo[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [meetCode, setMeetCode] = useState("");
    const [selectedMeetup, setSelectedMeetup] = useState<CircleMeetupInfo>();
    const navigate = useNavigate();
    useEffect(() => {
        setisLoading(true);
        getMeetups(selectedCategory?.value).then(res => {
            setMeetups(res);
            setisLoading(false);
        });
    }, [selectedCategory]);
    const handleMainButton = (event: CircleMeetupInfo) => {
        if (event.is_started) {
            if (event.attendee && event.attendee.is_joined) {
                if (!event.attendee.is_report_submitted) {
                    navigate(
                        `/dashboard/learningcircle/attendee-report/${event.id}`
                    );
                }
            } else {
                setSelectedMeetup(event);
                setIsModalOpen(true);
            }
        } else {
            navigate(`/dashboard/learningcircle/meetup/${event.id}`);
        }
    };
    const saveMeetup = (meetId: string) => {
        if (meetups.find(meetup => meetup.id === meetId)?.attendee) {
            unsaveMeetup(meetId).then(res => {
                if (res) {
                    setMeetups(prevMeetups => {
                        return prevMeetups.map(meetup => {
                            if (meetup.id === meetId) {
                                return {
                                    ...meetup,
                                    attendee: null
                                };
                            }
                            return meetup;
                        });
                    });
                }
            });
            return;
        }
        joinMeetup(meetId).then(res => {
            setIsModalOpen(false);
            if (res) {
                setMeetups(prevMeetups => {
                    return prevMeetups.map(meetup => {
                        if (meetup.id === meetId) {
                            return {
                                ...meetup,
                                attendee: {
                                    is_joined: false,
                                    is_lc_approved: false,
                                    is_report_submitted: false
                                }
                            };
                        }
                        return meetup;
                    });
                });
            }
        });
    };
    const selectionChange = (selected: Option | null) => {
        setSelectedCategory(selected);
    };

    const handleCreate = () => {
        navigate("/dashboard/learningcircle/create");
    };

    const handleJoin = () => {
        joinMeetup(selectedMeetup?.id ?? "", meetCode).then(res => {
            setIsModalOpen(false);
        });
    };

    return (
        <>
            <MuModal
                type="success"
                onDone={() => {
                    handleJoin();
                }}
                onClose={() => {
                    setIsModalOpen(false);
                }}
                title="Enter Join Code"
                isOpen={isModalOpen}
            >
                <span className={styles.joinInfo}>
                    Enter the 6 digit join code provided by the organizers to
                    join the meetup.
                </span>
                <input
                    className={styles.joinCodeInput}
                    placeholder="Enter Join Code"
                    maxLength={6}
                    value={meetCode}
                    onChange={e => {
                        e.preventDefault();
                        setMeetCode(e.target.value.toLocaleUpperCase());
                    }}
                />
            </MuModal>
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
                        className={styles.middleContainer}
                    >
                        <SelectTab
                            placeholder={"Select Role"}
                            options={INITIAL_INTERESTS}
                            styles={customReactSelectStyles}
                            value={selectedCategory}
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
                            onClick={() => {
                                navigate(
                                    "/dashboard/learningcircle/your-circles"
                                );
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
                        {meetups.map((event, index) => (
                            <div
                                style={{
                                    border: "2px solid #FFFFFF",
                                    borderColor: event.is_started
                                        ? event.attendee &&
                                          event.attendee.is_joined &&
                                          !event.attendee.is_report_submitted
                                            ? "#DF4141"
                                            : "rgba(255, 198, 40, 1)"
                                        : "#FFFFFF"
                                }}
                                className={styles.card}
                                key={index}
                            >
                                {event.is_started ? (
                                    <div
                                        style={{
                                            borderColor:
                                                event.attendee &&
                                                event.attendee.is_joined &&
                                                !event.attendee
                                                    .is_report_submitted
                                                    ? "#DF4141"
                                                    : "rgba(255, 198, 40, 1)",
                                            color:
                                                event.attendee &&
                                                event.attendee.is_joined &&
                                                !event.attendee
                                                    .is_report_submitted
                                                    ? "#DF4141"
                                                    : "rgba(255, 198, 40, 1)"
                                        }}
                                    >
                                        <span>
                                            {event.attendee &&
                                            event.attendee.is_joined &&
                                            !event.attendee.is_report_submitted
                                                ? "Report Submission Pending"
                                                : "Happening Now"}
                                        </span>
                                    </div>
                                ) : null}
                                <h2 className={styles.title}>{event.title}</h2>
                                <div className={styles.location}>
                                    <FaMapMarkerAlt className={styles.icon} />
                                    <span>{event.meet_place}</span>
                                </div>
                                <div className={styles.details}>
                                    <span className={styles.date}>
                                        {new Date(
                                            event.meet_time
                                        ).toLocaleString()}
                                    </span>
                                    <span className={styles.duration}>
                                        {event.duration} Hours
                                    </span>
                                    {/* <span className={styles.karmaPoints}>
                                        Earn Karma Points
                                    </span> */}
                                </div>
                                <div className={styles.footer}>
                                    {!event.attendee ||
                                    (event.attendee &&
                                        !event.attendee.is_joined) ? (
                                        <PowerfulButton
                                            variant={
                                                event.attendee
                                                    ? "primary"
                                                    : "outline"
                                            }
                                            onClick={() => {
                                                saveMeetup(event.id);
                                            }}
                                        >
                                            <FaBookmark
                                                style={{
                                                    color: event.attendee
                                                        ? "white"
                                                        : "blue"
                                                }}
                                                className={styles.bookmarkIcon}
                                            />
                                        </PowerfulButton>
                                    ) : null}
                                    <button
                                        className={styles.joinButton}
                                        onClick={() => {
                                            handleMainButton(event);
                                        }}
                                        disabled={
                                            (event.attendee &&
                                                event.attendee.is_joined &&
                                                event.attendee
                                                    .is_report_submitted) ??
                                            false
                                        }
                                    >
                                        {!event.is_started
                                            ? "More Info"
                                            : event.attendee &&
                                              event.attendee.is_joined
                                            ? event.attendee.is_report_submitted
                                                ? "Report Submitted"
                                                : "Submit Report"
                                            : "Join Now"}
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
