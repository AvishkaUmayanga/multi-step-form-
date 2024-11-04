import { resetFormData, setAccountData } from '@/app/redux/slices/studentSlice'
import { RootState } from '@/app/redux/store/store'
import { createAccountSchema, TCreateAccountSchema } from '@/lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

const CreateAccount = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.studentSlice?.formData)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting},
  } = useForm<TCreateAccountSchema>({
    resolver: zodResolver(createAccountSchema)
  });

  

  const onsubmit = async(data: TCreateAccountSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    dispatch(setAccountData(data));
    const finalData = {
        personalData: formData?.personalData,
        educationData: formData?.educationData,
        accountData: data,
    }

    console.log('Final Data -', finalData);
    dispatch(resetFormData());
  }
  return (
    <form onSubmit={handleSubmit(onsubmit)} method="post">
      <h3>Create Account</h3>
      <div>
        <label htmlFor="userEmail">Email</label>
        <input type="email"  id="userEmail" {...register("userEmail")} />
        { errors.userEmail && <p>{`${errors.userEmail.message}`}</p>}
      </div>
      <div>
        <label htmlFor="userPassword">Password</label>
        <input type="password"  id="userPassword" {...register("userPassword")} />
        { errors.userPassword && <p>{`${errors.userPassword.message}`}</p>}
      </div>
      <div>
        <label htmlFor="comfirmPassword">Comfirm Password</label>
        <input type="password"  id="comfirmPassword" {...register("comfirmPassword")} />
        { errors.comfirmPassword && <p>{`${errors.comfirmPassword.message}`}</p>}
      </div>
      <button type='submit'>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  )
}

export default CreateAccount
