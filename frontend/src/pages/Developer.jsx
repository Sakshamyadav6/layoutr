import React from "react";

const Developer = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4 py-20">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 text-gray-800">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/img/profile.jpg"
            alt="Saksham Yadav"
            className="w-28 h-28 rounded-full object-cover  border-2 border-blue-500 shadow"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">
          Behind Layoutr
        </h1>

        {/* Intro Paragraphs */}
        <p className="text-lg text-gray-700 leading-relaxed mb-4 text-center">
          Hi! I’m{" "}
          <span className="font-semibold text-gray-900">Saksham Yadav</span> —
          the developer behind{" "}
          <span className="text-blue-600 font-semibold">Layoutr</span>.
        </p>

        <p className="text-md text-gray-700 leading-relaxed mb-4 text-justify">
          Layoutr is my first no-code UI builder, built from scratch using the
          MERN stack and TailwindCSS. It’s a project born out of curiosity,
          consistency, and passion.
        </p>

        <p className="text-md text-gray-700 leading-relaxed mb-4 text-justify">
          This version isn’t perfect — but it reflects hours of learning,
          debugging, and growth. I hope it inspires or helps even one developer
          out there — that alone makes this worth it.
        </p>

        <p className="text-md text-gray-700 leading-relaxed mb-4 text-justify ">
          If you’ve got feedback, I’m all ears. And if you just dropped by —
          thank you for being here ✨
        </p>

        <p className="mt-6 text-blue-600 font-semibold text-right">— Saksham</p>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://github.com/Sakshamyadav6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-gray-600 hover:text-black"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.486 2 12.017c0 4.42 2.865 8.166 6.839 9.489.5.09.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.907-.62.069-.608.069-.608 1.003.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.094.39-1.988 1.029-2.688-.103-.254-.446-1.273.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.851.004 1.705.115 2.504.337 1.908-1.294 2.746-1.025 2.746-1.025.546 1.377.202 2.396.1 2.65.64.7 1.028 1.594 1.028 2.688 0 3.847-2.339 4.695-4.566 4.944.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .269.18.577.688.48A10.019 10.019 0 0022 12.017C22 6.486 17.523 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/saksham-yadavv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-gray-600 hover:text-blue-700"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.78-1.75-1.75S5.53 5.21 6.5 5.21c.96 0 1.75.78 1.75 1.75s-.79 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.07-.02-2.45-1.5-2.45s-1.73 1.17-1.73 2.38v4.57h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Developer;
