import s from "./Container.module.scss";

const Container = ({ children }) => {
    return (
        <div className={s.container}>
            <div className={s.form}>
                <div>{children}</div>
                <img src="src\assets\images\illustration-sign-up-desktop.svg" />
            </div>
            ;
        </div>
    );
};

export default Container;
