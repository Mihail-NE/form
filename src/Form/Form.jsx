import s from "./Form.module.scss";
import { useState, useEffect } from "react";

const Form = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");



    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const sumbit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            setError("");
            console.log("Email is valid:", email);
        } else {
            setError("Valid Email reuired");
            console.log("Email is not valid:", email);
        }
    };

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError("");
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    return (
        <>

            <form onSubmit={sumbit} className={s.form} noValidate>
                <div className={s.wrap}>
                    <label className={s.email}>Email adress</label>
                    {error && (
                        <span className={s["error-message"]}>{error}</span>
                    )}
                </div>
                <input
                    data-error={error}
                    className={error ? s["error"] : s["input"]}
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@company.com"
                />
                <button className={s.button} type="submit">
                    Subscribe to monthly newsletter
                </button>
            </form>
        </>
    );
};

export default Form;
