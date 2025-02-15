import React from "react";
import styles from "./SpecialEvents.module.css";
import SpecialEventCard from "../Components/SpecialEventCard";

interface SpecialEvent {
    id: number;
    title: string;
    description: string;
    date?: string;
    recurrence?: string;
    image: string;
    link: string;
}

const SpecialEventsList : SpecialEvent[] = [
    {
        id: 1,
        title: "Top 100 Coders",
        description: "",
        date: "2025-04-09",
        link:"https://top100coders.com/",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        title: "Launchpad",
        description: "Description 2",
        date: "2025-06-02",
        link: "https://launchpad.com/",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        title: "Trivial Ideas",
        description: "Description 3",
        recurrence: "Monthly",
        link: "https://trivialideas.com/",
        image: "https://via.placeholder.com/150",
    },
]

const SpecialEvents  = () => {

    return (
        <div className={styles.pageContainer}>
            <div className={styles.specialEventsHeading}>
                <div className={styles.specialEventsHeadingMain}>
                    <h4 className={styles.specialEventsMainHeading}>
                        Special Events
                    </h4>
                    <p className={styles.specialEventsSubHeading}>
                        Discover exclusive events designed to inspire
                        innovation, enhance skills, and foster meaningful
                        connections across technology, management, and
                        creativity.
                    </p>
                </div>
            </div>
            <div className={styles.eventsGrid}>
                {SpecialEventsList.map((specialevent)=><SpecialEventCard key={specialevent.id} specialevent={specialevent}/>)}
            </div>
        </div>
    );
};

export default SpecialEvents;
