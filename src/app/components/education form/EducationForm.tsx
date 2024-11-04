import { setActiveForm, setEducationData } from '@/app/redux/slices/studentSlice'
import { educationSchema, TEducationSchema } from '@/lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

const EducationForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    reset
  } = useForm<TEducationSchema>({
    resolver: zodResolver(educationSchema)
  })

  const dispatch = useDispatch()

  const onSubmit = async(data: TEducationSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
    dispatch(setActiveForm(3));
    dispatch(setEducationData(data));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Education Details</h3>
      <div>
        <label htmlFor="schoolName">School Name</label>
        <input type="text"  id="schoolName" {...register("schoolName")} />
        { errors.schoolName && <p>{`${errors.schoolName.message}`}</p>}
      </div>
      <div>
        <label htmlFor="grade">Grade</label>
        <input type="number"  id="grade" {...register("grade")} />
        { errors.grade && <p>{`${errors.grade.message}`}</p>}
      </div>
      <button type='submit'>
        {isSubmitting ? 'Submitting...' : 'Next'}
      </button>
    </form>
  )
}

export default EducationForm