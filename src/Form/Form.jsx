import s from "./Form.module.scss";
const Form = () => {
    const subit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <form onSubmit={subit} className={s.form}>
                <label className={s.email}>Email adress</label>
                <input
                    className={s.input}
                    name="email"
                    type="text"
                    placeholder="email@company.com"
                />
                <button className={s.button}>
                    Subscribe to monthly newsletter
                </button>
            </form>
        </>
    );
};

export default Form;
