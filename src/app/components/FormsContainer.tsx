'use client'
import { RootState } from "@/app/redux/store/store";
import { useSelector } from "react-redux";
import PersonalForm from "./personal form/PersonalForm";
import EducationForm from "./education form/EducationForm";
import CreateAccount from "./create account/CreateAccount";

const FormsContainer = () => {
  const activeForm = useSelector((state: RootState) => state.studentSlice.activeForm);
  return (
    <>
      { activeForm === 1 ? <PersonalForm /> : activeForm === 2 ? <EducationForm /> : <CreateAccount /> }
    </>
  )
}

export default FormsContainer