import React from "react";
import styles from "./SpecialEventCard.module.css";

const SpecialEventCard = ({ specialevent }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <img
                    src={specialevent.image}
                    alt={specialevent.title}
                    className={styles.eventImage}
                />
            </div>
            <div className={styles.eventDetails}>
                <div className={styles.eventHeader}>
                    <h3>{specialevent.title}</h3>
                    <p>{specialevent.description}</p>
                </div>
                {specialevent.date && <p>{specialevent.date}</p>}
                {specialevent.recurrence && <p>{specialevent.recurrence}</p>}
            </div>
        </div>
    );
};

export default SpecialEventCard;
