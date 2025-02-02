import MuLoader from "@/MuLearnComponents/MuLoader/MuLoader";
import styles from "./LearningCircleLanding.module.css";
import { useEffect, useState } from "react";
// import { customReactSelectStyles } from "../../utils/buttonConfiguration/common";
import { useNavigate } from "react-router-dom";
import MuModal from "@/MuLearnComponents/MuModal/MuModal";
import { getMeetups, joinMeetup, unsaveMeetup } from "../../../LearningCircleV2/services/LearningCircleAPIs";
import { EventCard } from "./LearningCircleCard";
import { PowerfulButton } from "@/MuLearnComponents/MuButtons/MuButton";

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
]

const LearningCircles = () => {
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
                        <div style={{display:'flex', justifyContent: 'space-between', width: '70vw'}}>
                            <div>

                            </div>
                            <div>
                                <PowerfulButton style={{fontSize: '0.85rem'}}>
                                    Create your Own
                                </PowerfulButton>
                            </div>
                        </div>
                        {meetups.length === 0 ? (
                            <div
                                style={{
                                    background: "#fff",
                                    padding: 10,
                                    borderRadius: 10
                                }}
                                className={styles.learningCircleLandingPageMiddle}
                            >
                                <b>No Meetups!</b>
                                <p>No meetups are currently running now</p>
                            </div>
                        ) : (
                            <div className={styles.cardContainer}>
                                {meetups.map((event, index) => (
                                    <EventCard 
                                        title={event.title}
                                        institution={"abc"}
                                        location={event.meet_place}
                                        date={event.meet_time}
                                        time={event.meet_time}
                                        venue={event.meet_place}
                                        karmaPoints={event.duration}
                                        joinedPeople={event.attendee || 10}
                                        imageUrl="https://img.freepik.com/free-vector/people-studying-learning-room_74855-6615.jpg?t=st=1738405617~exp=1738409217~hmac=7d528d88304c4f919c3c258289bbce219d623170f0c85eff4b9cf1f348a2c1c4&w=2000"
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </>
        // <LearningCircleLanding />
    )
}

export default LearningCircles