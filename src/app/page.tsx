import ActiveFormIcon from "./components/active form icon/ActiveFormIcon";
import FormsContainer from "./components/FormsContainer";


export default function Home() {
  return (
    <div className=" flex flex-col gap-10 items-center">
      <div className=" text-center">
        <h2 className=" text-3xl font-bold">Student Registration</h2>
        <p className=" text-gray-700">Please complete all required information</p>
      </div>
      <ActiveFormIcon />
      <FormsContainer />
    </div>
  );
}
