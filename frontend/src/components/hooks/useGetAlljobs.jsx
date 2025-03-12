import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllJobs } from "../../../redux/slices/jobSlice.js";
import { JOB_API_END_POINT } from "../../../utlis/constants.js";

const useGetAllJobs = () => {
  const dispatch = useDispatch();
  const { searchedQuery } = useSelector((store) => store.job);
  console.log(searchedQuery);
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(
          `${JOB_API_END_POINT}/get?keyword=${searchedQuery}`,
          { withCredentials: true }
        );

        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
          console.log("API response:", res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllJobs();
  }, [searchedQuery, dispatch]);
};

export default useGetAllJobs;
