import './normalbutton.css';
const NormalButton = ({ text, handler, name }) => {
    return (
        <button
            className="normal-button font-rfabb rounded-[89.15px] py-2 px-[3%] my-5 md:text-xl md:py-2   font-grobold text-xl tracking-wider leading-none text-white bg-[#7A0A9B] font-[400] text-[1.759rem] "
            name={name}
            onClick={handler}
        >
            {text}
        </button>
    );
};

export default NormalButton;
