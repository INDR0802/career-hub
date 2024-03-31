import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const gradientTextStyles = {
    background: "-webkit-linear-gradient(90deg, #7E90FE, #9873FF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  let [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("/public/data/categories.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  let jobs = useLoaderData();

  let [dataLength, setDataLength] = useState(jobs.length - 2);

  return (
    <>
      <div className="hero bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl">
        <div className="hero-content justify-between gap-[300px] flex-col lg:flex-row-reverse">
          <img
            src="/public/resource/images/user.png"
            className="max-w-sm -mb-4 -mr-10"
          />
          <div>
            <h1 className="text-5xl font-bold">
              One Step <br /> Closer To Your <br />{" "}
              <span style={gradientTextStyles}>Dream Job</span>
            </h1>
            <p className="py-6">
              Explore thousands of job opportunities with all the <br />{" "}
              information you need. Its your future. Come find it. Manage all{" "}
              <br />
              your job application from start to finish.
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between my-10">
        {datas.map((data) => {
          return (
            <div
              key={data.id}
              className="space-y-1 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-10"
            >
              <img src="/public/resource/icons/accounts.png" alt="" />
              <h1 className="text-xl font-extrabold">{data.category_name}</h1>
              <h1 className="font-light">{data.availability}</h1>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-10 my-10">
        {jobs.slice(0, dataLength).map((job) => {
          return (
            <div
              key={job.id}
              className="space-y-2 border-2 p-5 rounded-xl pl-[50px]"
            >
              <img src="https://i.ibb.co/PzrbTxh/google-1-1-1.png" alt="" />
              <h1 className="text-2xl font-bold">{job.job_title}</h1>
              <h1>{job.company_name}</h1>
              <div className="flex gap-5">
                <h1 className="border-2 border-[#7E90FE] rounded-lg py-1 px-4 text-lg text-[#7E90FE]">
                  {job.remote_or_onsite}
                </h1>
                <h1 className="border-2 border-[#7E90FE] rounded-lg py-1 px-4 text-lg text-[#7E90FE]">
                  {job.job_type}
                </h1>
              </div>
              <div className="flex gap-10">
                <h1 className="font-bold">{job.location}</h1>
                <h1 className="font-bold">{job.salary}</h1>
              </div>
              <Link to={`/jobDetails/${job.id}`}>
                <button className="btn bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
                  View Details
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mb-10">
        <button
          className={dataLength != jobs.length ? "btn btn-primary" : "hidden"}
          onClick={() => setDataLength(jobs.length)}
        >
          Show All
        </button>
      </div>
    </>
  );
};

export default Home;
