import Form from "../Form/Form";
import Info from "../Info/Info";
import s from "./Container.module.scss";
import { useState } from "react";

const Container = () => {
    const [isSubmit, setIsSubmit] = useState(false);
    const [submittedEmail, setSubmittedEmail] = useState("");

    const handleSubmitSuccess = (email) => {
        setIsSubmit(true);
        setSubmittedEmail(email);
    };

    return (
        <div className={s.container}>
            {isSubmit ? (
                <div className={s.success}>
                    <h2>Success!</h2>
                    <p>Youve been subscribed to our newsletter.</p>
                    <p>Confirmation sent to: {submittedEmail}</p>
                    <button onClick={() => setIsSubmit(false)}>GO back</button>
                </div>
            ) : (
                <div className={s.form}>
                    <div>
                        <Info />
                        <Form onSubmitSuccess={handleSubmitSuccess} />
                    </div>
                    <img src="src\assets\images\illustration-sign-up-desktop.svg" alt="Illustration" />
                </div>
            )}
        </div>
    );
};

export default Container;
