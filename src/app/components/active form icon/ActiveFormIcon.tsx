'use client'
import { RootState } from "@/app/redux/store/store";
import { CircleCheck, CircleUser, GraduationCap, Key } from "lucide-react";
import { useSelector } from "react-redux";

const ActiveFormIcon = () => {
  const activeForm = useSelector((state: RootState) => state.studentSlice.activeForm);
  
  return (
    <div className=" flex items-center justify-center">
      <div className={`${activeForm === 1 ? 'pending' : activeForm === 2 || 3 ? 'done' : 'bg-gray-200'} rounded-full  p-2.5`}>
        {activeForm === 1 ? <CircleUser /> : <CircleCheck/> }
      </div>
      <hr className={`${activeForm === 1 ? 'bg-gray-200' : 'done' }  h-1 w-16`}/>
      <div className={`${activeForm === 2 ? 'pending' : activeForm ===  3 ? 'done' : 'bg-gray-200'} rounded-full  p-2.5`}>
        {activeForm ===  3 ? <CircleCheck/> : <GraduationCap  />}
      </div>
      <hr className={`${activeForm ===  3 ? 'done' : 'bg-gray-200'}  h-1 w-16`}/>
      <div className={`${activeForm === 3 ? 'pending' : 'bg-gray-200'} rounded-full  p-2.5`}>
        <Key  />
      </div>
    </div>
  )
}

export default ActiveFormIcon