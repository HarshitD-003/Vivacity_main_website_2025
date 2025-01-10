import NormalButton from './NormalButton';
import Form from './Form';
import InputBox from './InputBox';
import "../../pages/normalregistration.css";
// eslint-disable-next-line react/prop-types
const NormalForm = ({ change, submit }) => {
    return (
        <Form submit={submit} className={`w-[100%] `}>
            <h1 className=" mt-4 mb-4 text-center font-grobold text-[#04FFB4] font-rfabb text-[700] text-[2.5rem] tracking-wider leading-none md:text-4xl">
                PRE REGISTER HERE
            </h1>
            <div className="flex justify-center flex-col gap-4 font-rfabb m-[3%]">
                <InputBox text="Name" name="name" change={change} />
                <InputBox text="Mobile No." name="mobile" change={change} />
                <InputBox text="Email" name="email" change={change} />
                <InputBox
                    text="University/Institution"
                    name="institute"
                    change={change}
                />
                <InputBox
                    text="Referral Code (optional)"
                    name="referral"
                    change={change}
                />
            </div>
            <div className="flex justify-end w-5/6 mx-auto ">
                <NormalButton text={'Next'} />
            </div>
        </Form>
    );
};

export default NormalForm;
