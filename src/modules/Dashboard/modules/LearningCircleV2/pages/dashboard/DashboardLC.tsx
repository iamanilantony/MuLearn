import { useParams } from "react-router-dom";
import styles from "./DashboardLC.module.css";
import { useEffect } from "react";

export default function DashboardLC() {
    const params = useParams();
    useEffect(() => {
        console.log(params.id);
    }, [params.id]);
    return (
        <div className={styles.dashboardLC}>
            <h1>Learning Circle Dashboard</h1>
        </div>
    );
}
