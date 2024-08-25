import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

function Dashboard() {
  const user = useSelector((state) => state.userData);
  const login = user.success;
  const navigate = useNavigate();
  const commentContainers = [
    {
      title: "Youtube",
      count: "5000",
    },
    {
      title: "Flipkart",
      count: "98",
    },
    {
      title: "Instagram",
      count: "6000",
    },
    {
      title: "Amazon",
      count: "200",
    },
    {
      title: "Amazon",
      count: "200",
    },
    {
      title: "Amazon",
      count: "200",
    },
    {
      title: "Amazon",
      count: "200",
    },
    {
      title: "Amazon",
      count: "200",
    },
    {
      title: "Amazon",
      count: "200",
    },
    {
      title: "Amazon",
      count: "200",
    },
    {
      title: "Amazon",
      count: "200",
    },
    {
      title: "Amazon",
      count: "200",
    },
    {
      title: "Amazon",
      count: "200",
    },
    {
      title: "Amazon",
      count: "200",
    },
  ];
  useEffect(() => {
    if (!login) navigate("/signin");
  }, []);

  return (
    <div className="flex flex-col">
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-30"
        />
      </div>
      <div
            aria-hidden="true"
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-30"
            />
          </div>
      <div className="">
        <Header />
      </div>
      <div className="flex flex-row">
        <div className="relative pt-4">
          <Sidebar />
        </div>
        <div className="flex-1 ml-20 md:ml-64 p-4">
          <div className="mt-16 mx-auto max-w-5xl items-center w-full p-6 rounded-md">
            {/* <div className="font-bold text-white bg-indigo-600 text-center w-full p-1  hover:text-indigo-600  hover:bg-white duration-300">
                Login Success
                </div> */}
            <div className="w-full">
              <div className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {commentContainers.map((container) => (
                  <div className="p-4 odd:bg-indigo-500 odd:hover:bg-indigo-600 duration-200 even:bg-indigo-800 even:hover:bg-indigo-700 text-white rounded-md w-full h-48 ">
                    <div className="font-bold text-xl w-full">
                      {container.title}
                    </div>
                    <div className="text-s w-full">
                      {container.count} comments
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
