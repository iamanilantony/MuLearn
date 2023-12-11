import moment from "moment";
import KarmaSymbol from "../../assets/svg/KarmaSymbol";
import styles from "./KarmaHistory.module.css";
import { Switch } from "@chakra-ui/react";
import { useState } from "react";
import i18next from "i18next";
import LanguageSwitcher from "../../../LanguageSwitcher/LanguageSwitcher";
import { getFontSizeForLanguage } from "../../../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
type Props = {
    userProfile: any;
    userLog: {
        task_name: string;
        karma: string;
        created_date: string;
    }[];
};

const KarmaHistory = (props: Props) => {
    // console.log(props.userLog);
    const [userLog, setUserLog] = useState(props.userLog);
    const { t } = useTranslation(["ChangePassword"]);

    const fontSize = getFontSizeForLanguage(i18next.language, i18next);
    return userLog.length !== 0 ? (
        <div className={styles.karma_history_page}>
            <p className={styles.hide_chat_karma}>
                Hide daily chat karma{" "}
                <span>
                    <Switch
                        size="md"
                        onChange={e => {
                            if (e.target.checked) {
                                setUserLog(
                                    props.userLog.filter(
                                        (log: any) =>
                                            log.task_name !== "Chat Karma"
                                    )
                                );
                            } else {
                                setUserLog(props.userLog);
                            }
                        }}
                    />
                </span>
            </p>
            <div className={styles.karma_history_container} id="section1">
                {userLog.map((log: any, i) => {
                    return (
                        <div className={styles.karma_history} key={i}>
                            <p className={styles.karma_history_box_bg}></p>
                            <div className={styles.content}>
                                <h1 className={styles.karma}>{log.karma} ϰ</h1>
                                <h2>Karma</h2>
                                <div className={styles.karma_div}>
                                    <p style={{ fontSize: "12px" }}>
                                        Awarded for
                                    </p>
                                    <p className={styles.task_name}>
                                        #{log.task_name}
                                    </p>
                                </div>

                                <p className={styles.date}>
                                    {moment
                                        .utc(log.created_date)
                                        .local()
                                        .startOf("seconds")
                                        .fromNow()}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    ) : (
        <p className={styles.msg} style={{ fontSize }}>
            {t("Karma History New User")}
        </p>
    );
};

export default KarmaHistory;
