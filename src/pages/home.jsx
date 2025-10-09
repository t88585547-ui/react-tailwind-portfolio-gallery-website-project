import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

export default function Homepages() {
  return (
    <section className="flex flex-col pb-80 dark:bg-gradient-to-b from-gray-900 to-gray-800">
      <section className="relative mt-20 px-4">
        <img
          src="https://i.pinimg.com/1200x/f5/66/75/f5667576dde72a72298ed6bf21819a11.jpg"
          alt="art"
          className="w-full max-w-5xl h-auto mx-auto rounded-2xl shadow-[-1px_5px_31px_5px_#30baff] object-cover dark:shadow-[0px_0px_46px_7px_#ffffff]"
        />
      </section>

      <div className="flex flex-col text-center mt-20">
        <h1 className="text-3xl md:text-[60px] font-bold dark:text-white ">
          I am a{" "}
          <ReactTyped
            strings={["ชื่อบัง", "ข้อความ1", "ข้อความอะไรก้ได้"]}
            typeSpeed={80}
            backSpeed={50}
            loop
            showCursor={true}
            className="text-blue-500 [text-shadow:_7px_5px_10px_rgba(97,202,255,0.92)] dark:text-white"
          />
        </h1>
        <p className="text-xl text-black font-semibold mt-6 dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Eaque eum minus possimus aliquam. Odit, labore. Labore, ab! Sit,
          <br />
          vitae optio?
        </p>
      </div>
      <div className="space-x-6 text-center mt-20  ">
        <Link
          to="/gallery"
          className="text-white text-2xl font-semibold bg-blue-500 px-6 py-3 rounded-2xl shadow-[-1px_8px_17px_2px_#87d9ff]
                        transition-all duration-300 hover:scale-110 hover:bg-blue-700 inline-block"
        >
          View Work
        </Link>
        <Link
          to="/contact"
          className="text-blue-400 px-6 rounded-2xl inline-block py-2 text-2xl font-semibold shadow-[-1px_2px_17px_3px_#999999] transition-all duration-300  hover:scale-110 hover:text-white hover:bg-blue-700 dark:bg-blue-500 dark:text-white dark:hover:text-blue-500 dark:hover:bg-white"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
