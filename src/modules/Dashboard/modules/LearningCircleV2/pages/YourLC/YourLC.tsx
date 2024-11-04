import { useEffect, useState } from "react";
import styles from "./YourLC.module.css";
import { getCreatedLearningCircles } from "../../services/LearningCircleAPIs";
import { useNavigate } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { convertDateToDayAndMonthAndYear } from "../../../../utils/common";

export default function YourLC() {
    const [createdLearningCirlces, setCreatedLearningCirlces] = useState<
        LearningCircleInfoBasic[]
    >([]);
    const navigate = useNavigate();
    useEffect(() => {
        getCreatedLearningCircles().then(res => {
            setCreatedLearningCirlces(res);
        });
    }, []);
    return (
        <div className={styles.yourLC}>
            <h1>Learning Circles created by you</h1>
            <div className={styles.learningCircles}>
                {createdLearningCirlces
                    .filter(lc => lc.is_recurring)
                    .map(lc => {
                        return (
                            <div
                                key={lc.id}
                                className={styles.learningCircle}
                                onClick={() => {
                                    navigate(
                                        `/dashboard/learningcircle/dashboard/${lc.id}`
                                    );
                                }}
                            >
                                <div className={styles.content}>
                                    <div className={styles.badge}>
                                        {convertDateToDayAndMonthAndYear(
                                            new Date(lc.next_meetup.meet_time)
                                                .toISOString()
                                                .split("T")[0]
                                        )}
                                    </div>
                                    <div className={styles.info}>
                                        <h2>{lc.ig}</h2>
                                        <h3>{lc.recurrence_type}</h3>
                                    </div>
                                </div>
                                <BiChevronRight />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
