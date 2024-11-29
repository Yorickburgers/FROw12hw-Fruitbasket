import './Button.css';

function Button({buttonType, clickEvent, className, buttonText}) {
return (
    <>
        <button
            type={buttonType}
            onClick={clickEvent}
            className={className}
        >{buttonText}
        </button>
    </>
);
}

export default Button;

/*
<button
    buttonType="button"
    clickEvent={logResults}
    className="bigButton"
>Verzend
</button>*/
