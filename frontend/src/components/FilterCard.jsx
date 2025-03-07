import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
// import { useDispatch } from "react-redux";
// import { setSearchedQuery } from "../../redux/jobSlice.js";

const filterData = [
  {
    filterType: "Location",
    array: ["Kathmandu", "Pokhara", "Lalitpur", "Chitwan", "Bhaktapur"],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "FullStack Developer",
      "DevOps Engineer",
      "Data Scientist",
    ],
  },
  {
    filterType: "Salary",
    array: ["10k-20k", "20k-30k", "30k-40k", "40k-50k", "50k-60k"],
  },
  {
    filterType: "Job Type",
    array: ["Full Time", "Part Time", "Remote", "Internship", "Contract"],
  },
];

const FilterCard = () => {
  // const [selectedValue, setSelectedValue] = useState("");
  // const dispatch = useDispatch();
  // const changeHandler = (value) => {
  //   setSelectedValue(value);
  // };
  // useEffect(() => {
  //   dispatch(setSearchedQuery(selectedValue));
  // }, [selectedValue]);
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup
      // value={selectedValue}
      >
        {filterData.map((data, index) => {
          return (
            <div key={index}>
              <h1 className="font-bold text-lg">{data.filterType}</h1>
              {data.array.map((item, idx) => {
                const itemId = `id${index}-${idx}`;
                return (
                  <div key={index} className="flex items-center space-x-2 my-2">
                    <RadioGroupItem value={item} id={itemId} />
                    <Label htmlFor={itemId}>{item}</Label>
                  </div>
                );
              })}
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
