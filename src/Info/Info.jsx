import s from "./info.module.scss";

const advantages = [
    "Product discivery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
];

const Info = () => {
    return (
        <>
            <div className={s.info}>
                <div className={s.title}>Stay updated</div>
                <div className={s.subtitle}>
                    Join 60,000+ product manages receiving monthly updates on:
                </div>
                <div className={s.advantages}>
                    {advantages.map((item, index) => {
                        return (
                            <div key={index} className={s.advantage}>
                                <img src="src\assets\images\icon-list.svg" />
                                {item}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Info;
