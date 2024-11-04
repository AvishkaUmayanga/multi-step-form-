import { createTransform } from "redux-persist";
import { StudentStateType } from "../slices/studentSlice";

const removeAccountDataTransform = createTransform(
  (inboundState: StudentStateType) => {
    const { accountData, ...restFormData } = inboundState.formData;
    return {
      ...inboundState,
      formData: {
        ...restFormData,
        accountData: null, 
      },
    };
  },
  (outboundState) => outboundState,
  { whitelist: ["studentSlice"] } 
);

export default removeAccountDataTransform;