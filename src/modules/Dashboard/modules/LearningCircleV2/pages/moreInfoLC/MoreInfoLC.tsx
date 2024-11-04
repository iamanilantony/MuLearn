import styles from "./MoreInfoLC.module.css";
import { FiChevronLeft } from "react-icons/fi";
import { CiLocationOn, CiClock2 } from "react-icons/ci";
import { PowerfulButton } from "@/MuLearnComponents/MuButtons/MuButton";

export default function MoreInfoLC() {
    return (
        <div className={styles.container}>
            <div className={styles.backLink}>
                <FiChevronLeft />
                <span>Learning Circles</span>
            </div>
            <div>
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <div className={styles.headerSection}>
                            <div>
                                <h1 className={styles.title}>
                                    Learn web development using Django
                                </h1>
                                <div className={styles.locationWrapper}>
                                    <div className={styles.iconWrapper}>
                                        <CiLocationOn />
                                        <span>
                                            Government College Thalassery
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button className={styles.moreButton}>
                                <i className="bi bi-three-dots-vertical"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <div className={styles.dateTime}>
                            <h2 className={styles.date}>22 June 2023</h2>
                            <div className={styles.time}>
                                <CiClock2 />
                                <span>12:45 PM</span>
                            </div>
                        </div>

                        <div className={styles.descriptionSection}>
                            <h3 className={styles.sectionTitle}>
                                What we are planning to do?
                            </h3>
                            <p className={styles.description}>
                                Lorem ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem ipsum has been
                                the industry's standard dummy text ever since
                                the 1500. Lorem ipsum is simply dummy text of
                                the printing and typesetting industry.
                            </p>
                            <div className={styles.buttonWrapper}>
                                <PowerfulButton>Join Now</PowerfulButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
