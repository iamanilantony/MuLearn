import { useNavigate, useParams } from "react-router-dom";
import styles from "./DashboardLC.module.css";
import { useEffect, useState } from "react";
import { getLearningCircleInfo } from "../../services/LearningCircleAPIs";
import MuLoader from "@/MuLearnComponents/MuLoader/MuLoader";
import {
    convertDateToDayAndMonthAndYear,
    getLocalDateTimeFormatted,
    getLocalDateTimeObject
} from "../../../../utils/common";
import { PowerfulButton } from "@/MuLearnComponents/MuButtons/MuButton";
import { BiChevronRight, BiEdit } from "react-icons/bi";
import { FiChevronLeft } from "react-icons/fi";

export default function DashboardLC() {
    const [circleInfo, setCircleInfo] = useState<LearningCircleInfo | null>(
        null
    );
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getLearningCircleInfo(params.id ?? "").then(res => {
            setCircleInfo(res);
        });
    }, [params.id]);
    return (
        <div className={styles.dashboardLC}>
            <div
                className={styles.backLink}
                onClick={() => {
                    navigate(-1);
                }}
            >
                <FiChevronLeft />
                <span>Learning Circles</span>
            </div>
            {circleInfo ? (
                <>
                    {circleInfo.next_meetup.is_scheduled ? (
                        <div className={styles.nextMeet}>
                            <div className={styles.content}>
                                <div className={styles.info}>
                                    <h1 className={styles.date}>
                                        {convertDateToDayAndMonthAndYear(
                                            getLocalDateTimeFormatted(
                                                circleInfo.next_meetup.meet_time
                                            ).split("T")[0]
                                        )}
                                    </h1>
                                    <span className={styles.title}>
                                        {circleInfo.next_meetup.title}
                                    </span>
                                    <span className={styles.venue}>
                                        Venue:{" "}
                                        {circleInfo.next_meetup.meet_place}
                                    </span>
                                    <span className={styles.time}>
                                        Time:
                                        {
                                            getLocalDateTimeFormatted(
                                                circleInfo.next_meetup.meet_time
                                            ).split("T")[1]
                                        }
                                    </span>
                                    <span className={styles.duration}>
                                        Duration:{" "}
                                        {circleInfo.next_meetup.duration} hours
                                    </span>
                                </div>
                                <div className={styles.buttons}>
                                    <PowerfulButton
                                        style={{
                                            padding: "5px 10px",
                                            width: "fit-content"
                                        }}
                                        onClick={() => {}}
                                    >
                                        <BiEdit />
                                    </PowerfulButton>
                                    <PowerfulButton
                                        style={{ padding: "5px 40px" }}
                                        onClick={() => {
                                            navigate(
                                                "/dashboard/learningcircle/attendee-report/" +
                                                    circleInfo.next_meetup.id
                                            );
                                        }}
                                    >
                                        Report
                                    </PowerfulButton>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.nextMeet + " " + styles.nomeet}>
                            <div className={styles.content}>
                                <div className={styles.info}>
                                    <h1 className={styles.date}>
                                        No Meetup Scheduled
                                    </h1>
                                </div>
                                <div className={styles.buttons}>
                                    <PowerfulButton
                                        style={{
                                            padding: "5px 10px",
                                            fontSize: "15px"
                                        }}
                                        onClick={() => {
                                            navigate(
                                                `/dashboard/learningcircle/create-meetup/${params.id}`
                                            );
                                        }}
                                    >
                                        Schedule Your Next Meetup
                                    </PowerfulButton>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className={styles.pastMeets}>
                        <h1>Your Past Meetups</h1>
                        <div className={styles.meetups}>
                            {circleInfo.past_meetups.map((meetup, index) => (
                                <div
                                    className={styles.meetup}
                                    key={meetup.id}
                                    onClick={() => {
                                        navigate(
                                            `/dashboard/learningcircle/meetup/${meetup.id}`
                                        );
                                    }}
                                >
                                    <div className={styles.container}>
                                        <span>{index + 1}.</span>
                                        <div className={styles.info}>
                                            <h1 className={styles.date}>
                                                {convertDateToDayAndMonthAndYear(
                                                    meetup.meet_time.split(
                                                        "T"
                                                    )[0]
                                                )}
                                            </h1>
                                            <span className={styles.title}>
                                                {meetup.title}
                                            </span>
                                        </div>
                                    </div>
                                    <div className={styles.buttons}>
                                        <BiChevronRight />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <MuLoader />
            )}
        </div>
    );
}
