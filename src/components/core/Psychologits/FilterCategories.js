import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {setFilters } from "../../../features/psychologists/PsychologistsSlice";
import MultiSelect from "../../UI/MultiSelect";

export default function FilterByCategories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.psychologists.categories);

  const changeSelect = (categories) => {
    dispatch(setFilters({ name: "filterCategories", value: categories }));
  };

  return (
    <>
      <MultiSelect options={categories} onChange={changeSelect} />
    </>
  );
}
