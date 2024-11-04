import { TCreateAccountSchema, TEducationSchema, TPersonalSchema } from "@/lib/types";
import { createSlice , PayloadAction} from "@reduxjs/toolkit";

export type StudentStateType = {
  activeForm: number;
  formData: {
    personalData: TPersonalSchema | null,
    educationData: TEducationSchema | null,
    accountData: TCreateAccountSchema | null,
  }
}

const initialState: StudentStateType = {
  activeForm: 1,
  formData: {
    personalData: null,
    educationData: null,
    accountData: null
  }
}

const studentSlice = createSlice({
  name: 'studentSlice',
  initialState,
  reducers: {
    setActiveForm: (state, action: PayloadAction<number>) => {
      state.activeForm = action.payload;
    },
    setPersonalDetails: (state, action: PayloadAction<TPersonalSchema>) => {
      state.formData.personalData = action.payload;
    },
    setEducationData: (state, action: PayloadAction<TEducationSchema>) => {
      state.formData.educationData = action.payload;
    },
    setAccountData: (state, action: PayloadAction<TCreateAccountSchema>) => {
      state.formData.accountData = action.payload;
    },
    resetFormData: (state) => {
      state.formData = initialState.formData;
      state.activeForm = 1;
    }
  }
});

export default studentSlice.reducer;
export const { setActiveForm, setPersonalDetails, setEducationData, setAccountData, resetFormData } = studentSlice.actions;