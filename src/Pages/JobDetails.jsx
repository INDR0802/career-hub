import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";
import { saveJobs } from "../Utils/LocalStorage";

const JobDetails = () => {
  let data = useLoaderData();
  let cid = useParams().id;
  let job = data[cid - 1];

  let handleApplyBtn = () => {
    saveJobs(job);
    toast.success("Application Submitted");
  };

  let {
    id,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;
  console.log(job_title);
  return (
    <>
      <div className="relative h-[50vh] ">
        <img
          src="/public/resource/images/bg1.png"
          alt=""
          className="absolute bottom-0 left-0"
        />
        <h1 className="text-3xl font-extrabold ml-[45%] pt-[5%]">
          Job Details
        </h1>
        <img
          src="/public/resource/images/bg2.png"
          alt=""
          className="absolute top-0 right-0"
        />
      </div>

      <div className="flex my-10">
        <div>
          <h1>
            <span className="font-bold">Job Description:</span>{" "}
            {job_description}
          </h1>
          <h1>
            <span className="font-bold">Job Responsibility:</span>{" "}
            {job_responsibility}
          </h1>
          <h1>
            <span className="font-bold">Educational Requirements:</span>
            <br /> {educational_requirements}
          </h1>
          <h1>
            <span className="font-bold">Experiences:</span>
            <br /> {experiences}
          </h1>
        </div>
        <div className="w-[50vw] p-5 bg-purple-100">
          <h1 className="text-xl font-extrabold">Job Details</h1> <hr />
          <h1>
            <span>Salary:</span>
            {salary}
          </h1>
          <h1>
            <span>Job Title:</span>
            {job_title}
          </h1>
          <h1>Contact Information</h1>
          <hr />
          <h1>
            <span>Phone:</span>
            {contact_information.phone}
          </h1>
          <h1>
            <span>Email:</span>
            {contact_information.email}
          </h1>
          <h1>
            <span>Address:</span>
            {contact_information.address}
          </h1>
          <button
            className="btn w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6"
            onClick={handleApplyBtn}
          >
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
