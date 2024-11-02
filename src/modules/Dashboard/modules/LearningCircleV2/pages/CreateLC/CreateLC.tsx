import { Form, Formik } from "formik";
import styles from "./CreateLC.module.css";
import Select from "react-select";
export default function CreateLC() {
    const initialValues = {
        ig: "",
        is_recurring: true,
        recurrence_type: "weekly",
        recurrence: 1
    };
    const onSubmit = () => {};
    return (
        <div className={styles.createLCContainer}>
            <h1>Create Learning Circle</h1>
            <Formik onSubmit={onSubmit} initialValues={initialValues}>
                {formik => (
                    <Form>
                        <div className={styles.formGroup}>
                            <label htmlFor="ig">Select Interest Group</label>
                            <Select
                                options={[
                                    { value: "1", label: "Option 1" },
                                    { value: "2", label: "Option 2" },
                                    { value: "3", label: "Option 3" }
                                ]}
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
