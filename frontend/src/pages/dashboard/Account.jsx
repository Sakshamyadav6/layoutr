import React, { useEffect } from "react";
import SideBar from "../../components/dashboard/SideBar";
import { useSelector } from "react-redux";
import { date } from "../../../utils/date";

const Account = () => {
  const profile = useSelector((state) => state.auth);
  useEffect(() => {
    console.log(profile);
  }, []);
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <aside className="bg-[#0f172a] w-full md:w-60 text-white text-center p-4">
        <SideBar />
      </aside>
      <main className="flex-1 soverflow-x-auto text-gray-900 p-5 md:p-10">
        {/* top section */}
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold mb-1">Profile</h2>
          <button className="bg-gray-200 px-3 rounded hover:bg-gray-300 transition font-semibold">
            Edit Profile
          </button>
        </div>
        <div className="md:flex">
          {/*profile image  */}
          <div className="w-full md:w-60">
            <img src={profile.avatar} alt="" />
          </div>
          {/* profile details */}
          <div>
            <h2 className="text-center md:text-left md:mt-7  text-3xl font-semibold capitalize">
              {profile.name}
            </h2>
            <h2 className="text-center md:mt-1 text-lg">{profile.email}</h2>
          </div>
        </div>
        {/* other informations */}
        <div className="p-4">
          <h1 className="text-xl font-semibold">Email</h1>
          <h2>{profile.email}</h2>
          <h1 className="text-xl font-semibold pt-3">Bio</h1>
          <h2 className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae, exercitationem. Molestias, in. Dolor laborum ut illum
            tempore, quidem consequatur accusamus.
          </h2>
          <div className="flex justify-between md:justify-start md:gap-20">
            <div className="mt-5">
              <h1 className="text-xl font-semibold">Location</h1>
              <h2>Green Bay, WI</h2>
            </div>
            <div className="mt-5">
              <h1 className="text-xl font-semibold">Joined</h1>
              <h2>{date(profile.createdAt)}</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Account;
