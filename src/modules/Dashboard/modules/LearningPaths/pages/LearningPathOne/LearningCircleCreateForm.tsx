import { useState } from "react";
import styles from "./LearningCircleLanding.module.css";
import { createLearningCircle, scheduleMeetup } from "../../../LearningCircleV2/services/LearningCircleAPIs";
import { useNavigate } from "react-router-dom";


const LearningCircleCreateForm = ({setIsCreateModalOpen}: {setIsCreateModalOpen: (type: boolean)=> void}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [meetingType, setMeetingType] = useState('online'); // default selection
    const [meetLink, setMeetLink] = useState('');
    const [location, setLocation] = useState('');
    const [time, setTime] = useState('');

    const navigate = useNavigate();


    const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
        e && e.preventDefault();
        const data = e.currentTarget.value
        createLearningCircle(data).then(status => {
            // setIsLoading(false);
            if (status) {
                navigate("/dashboard/learningcircle/create-meetup/" + status);
            }
        });
        scheduleMeetup(data).then(status => {
            // setIsLoading(false);
            if (status) {
                // navigate(
                //     `/dashboard/learningcircle/dashboard/${params.circle_id}`
                // );
            }
        });
        setIsCreateModalOpen(false);
      };


    return(
        <form className={styles.form} onSubmit={handleSubmit}>
        {/* Title Field */}
        <div className={styles.formGroup}>
            <label htmlFor="title">Title of Learning Circle</label>
            <input
                id="title"
                type="text"
                placeholder="What are you going to learn?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={styles.input}
                required
            />
        </div>

        {/* Description Field */}
        <div className={styles.formGroup}>
            <label htmlFor="description">Description</label>
            <textarea
                id="description"
                placeholder="Enter details about your learning circle..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={styles.textarea}
                required
            />
        </div>

        {/* Online/Offline Selection */}
        <div className={styles.formGroup}>
            <label>Meeting Type</label>
            <div className={styles.radioGroup}>
                <div
                    className={`${styles.radioCard} ${meetingType === 'online' ? styles.active : ''}`}
                    onClick={() => setMeetingType('online')}
                >
                    Online
                </div>
                <div
                    className={`${styles.radioCard} ${meetingType === 'offline' ? styles.active : ''}`}
                    onClick={() => setMeetingType('offline')}
                >
                    Offline
                </div>
            </div>
        </div>

        {/* Conditional Field for Meeting Link or Location */}
        {meetingType === 'online' ? (
            <div className={styles.formGroup}>
                <label htmlFor="meetLink">Online Meeting Link</label>
                <input
                    id="meetLink"
                    type="url"
                    placeholder="Enter meeting link"
                    value={meetLink}
                    onChange={(e) => setMeetLink(e.target.value)}
                    className={styles.input}
                    required
                />
            </div>
        ) : (
            <div className={styles.formGroup}>
                <label htmlFor="location">Location</label>
                <input
                    id="location"
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className={styles.input}
                    required
                />
            </div>
        )}

        {/* Time Field */}
        <div className={styles.formGroup}>
            <label htmlFor="time">Time</label>
            <input
                id="time"
                type="datetime-local"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className={styles.input}
                required
            />
        </div>
    </form>
    )
}

export default LearningCircleCreateForm