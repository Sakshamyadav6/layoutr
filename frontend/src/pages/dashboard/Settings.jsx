import React from "react";
import SideBar from "../../components/dashboard/SideBar";

const Settings = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* sidebar */}
      <aside className="bg-[#0f172a] w-full md:w-60 text-white text-center p-4">
        <SideBar />
      </aside>
      {/* main */}
      <main className="flex-1 overflow-x-auto text-gray-900 p:5 md:p-10">
        <div>
          <h2 className="text-3xl font-bold mb-5">Settings</h2>

          {/* Account Info */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Account Information</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                className="border rounded p-2 w-full"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border rounded p-2 w-full"
              />
            </div>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Save Changes
            </button>
          </section>

          {/* Change Password */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Change Password</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="password"
                placeholder="Current Password"
                className="border rounded p-2 w-full"
              />
              <input
                type="password"
                placeholder="New Password"
                className="border rounded p-2 w-full"
              />
            </div>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              Update Password
            </button>
          </section>

          {/* Preferences */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Preferences</h3>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-600" />
              Enable dark mode (coming soon)
            </label>
          </section>

          {/* Danger Zone */}
          <section>
            <h3 className="text-xl font-semibold mb-2 text-red-600">
              Danger Zone
            </h3>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
              Delete Account
            </button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Settings;
