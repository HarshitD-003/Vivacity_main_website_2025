import { useEffect, useRef } from 'react';
import './normalbutton.css';

const RadioButton = ({ text, name, change, check }) => {
    return (
        <div className='mb-2 custom-radio font-rfabb'>
            <input
                type="radio"
                name={name}
                checked={check}
                value={text}
                onChange={change}
            />
            <label className=" ml-4 text-white font-rfabb">{text}</label>
        </div>
    );
};

const RadioGroup = ({ name, options, heading, change, isReset, setReset }) => {
    const radioGroupRef = useRef();

    useEffect(() => {
        if (isReset == true) {
            reset();
            setReset(false);
        }
    }, [isReset]);
    const reset = () => {
        var children = radioGroupRef.current.children;
        for (let i = 0; i < children.length; i++) {
            if (children[i].value === 'Yes') {
                children[i].check = false;
            } else {
                children[i].check = true;
            }
        }
    };

    return (
        <>
            <label className=" block mb-3 font-grobold text-white text-left leading-none text-lg md:text-xl tracking-wider">
                {heading}
            </label>
            <div className="" ref={radioGroupRef}>
                {options.map((val, idx) => (
                    <RadioButton
                        key={idx}
                        name={name}
                        text={val}
                        change={change}
                    />
                ))}
            </div>
        </>
    );
};

export default RadioGroup;
