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

    const backToForm = () => {
        setIsSubmit(false);
        setSubmittedEmail("");
    };

    return (
        <div className={s.container}>
            {isSubmit ? (
                <div className={s.success}>
                    <img
                        src="src\assets\images\icon-success.svg"
                        alt="icon-success"
                    />
                    <h2>Thanks for subscribing!</h2>
                    <p>
                        A confirmation email has been sent to
                        <span className={s["email-send"]}>
                            {submittedEmail}
                        </span>
                        . Please open it and click the button inside to confirm
                        your subscription.
                    </p>
                    <button onClick={backToForm}>Dismiss message</button>
                </div>
            ) : (
                <div className={s.form}>
                    <div>
                        <Info />
                        <Form onSubmitSuccess={handleSubmitSuccess} />
                    </div>
                    <div className={s.image}></div>
                </div>
            )}
        </div>
    );
};

export default Container;
