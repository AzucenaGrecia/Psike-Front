import { useDispatch } from "react-redux";
import { filterByDate } from "../../../features/appointment/appointmentSlice";
import OptionContainer from "../../Containers/SelectContainer";
import InputField from "../../UI/Input";

export default function FilterDate() {
  const dispatch = useDispatch();

  function filterDate(e) {
    dispatch(filterByDate({ date: e }));
  }

  return (
    <OptionContainer>
      <InputField type="date" onChange={(e) => filterDate(e.target.value)} />
    </OptionContainer>
  );
}
