import Form from "./Form";
import NormalButton from "./NormalButton";
import RadioGroup from "./RadioGroup";
import "../../pages/normalregistration.css";
const IsParticipantForm = ({submit,change}) => {
    return ( 
        <form onSubmit={submit} className={`Isparticipants w-[55%] rounded-md mx-auto p-[2%]`}>
            <div className=" w-5/6 mx-auto mt-6 font-rfabb">
                <RadioGroup name="participant" 
                change={change}
                options={["Yes","No"]}
                heading="Are you a participant?"
                />
                <div className="flex justify-end w-full">
                    <NormalButton text="Next"/>
                </div>   
            </div>
        </form>
     );
}
 
export default IsParticipantForm;