import Form from "../Form/Form";
import Info from "../Info/Info";
import s from "./Container.module.scss";

const Container = () => {
    return (
        <div className={s.container}>
            <div className={s.form}>
                <div>
                    <Info />
                    <Form />
                </div>
                <img src="src\assets\images\illustration-sign-up-desktop.svg" />
            </div>
            ;
        </div>
    );
};

export default Container;
