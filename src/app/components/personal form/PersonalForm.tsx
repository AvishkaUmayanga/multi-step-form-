import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { personalSchema, TPersonalSchema } from "@/lib/types"
import { useDispatch } from "react-redux";
import { setActiveForm, setPersonalDetails } from "@/app/redux/slices/studentSlice";

const PersonalForm = () => {
 const { 
    register, 
    handleSubmit, 
    formState:{ errors, isSubmitting}, 
    reset
  } = useForm<TPersonalSchema>({
    resolver: zodResolver(personalSchema)
  });
  
  const dispatch = useDispatch()

  const onSubmit = async(data: TPersonalSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
    dispatch(setPersonalDetails(data));
    dispatch(setActiveForm(2));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <h3>Personal Details</h3>
      <div>
          <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" placeholder="john" {...register('firstName')} />
        { errors.firstName && <p>{`${errors.firstName.message}`}</p>}
      </div>
      <div>
          <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" placeholder="smith"{...register('lastName')} />
        { errors.lastName && <p>{`${errors.lastName.message}`}</p>}
      </div>
      <button type="submit" disabled={isSubmitting} >
        {isSubmitting ? 'Submitting...' : 'Next'}
      </button>
    </form>
        
   
  )
}
  
  export default PersonalForm
  