import React from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../../../features/psychologists/PsychologistsSlice";
import { colors } from "../../../ui";
import OptionContainer from "../../Containers/SelectContainer";
import Icon from "../../UI/Icon";
import {SelectItem} from "../../UI/Select";

export default function FilterPrice() {
  const dispatch = useDispatch();

  const changePrice = (e) => {
    dispatch(setFilters({name:"filterPrice",value: e.target.value}));
  };
  return (
    <OptionContainer>
      <Icon type="lizer" size="25" fill={colors.orange} />
      <SelectItem name={"ranking"} onChange={changePrice}>
        <option value="">Price</option>
        <option value="asc">Asendente</option>
        <option value="desc">Desendente</option>
      </SelectItem>
    </OptionContainer>
  );
}
