export default function Contact() {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-start pt-20 gap-16 px-6 dark:bg-gradient-to-b from-gray-900 to-gray-800 pb-80">
      <section className="w-full max-w-md space-y-10 dark:bg-white p-6 rounded-2xl">
        
          <div className="space-y-3">
            <h3 className="text-3xl font-bold text-center lg:text-left  dark:text-black">Get in touch</h3>
            <p className="text-xl text-gray-700 text-center lg:text-left ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
              perferendis?
            </p>
          </div>

          <form
            className="space-y-6 dark:text-black"
            action="https://formspree.io/f/mgeryxyz" // URL ของเธอ
            method="POST"
          >
            <div className="flex flex-col ">
              <label className="">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="mt-2 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:text-black"
              />
            </div>
            <div className="flex flex-col">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="mt-2 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:text-black"
              />
            </div>
            <div className="flex flex-col">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Inquiry about..."
                required
                className="mt-2 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:text-black"
              />
            </div>
            <div className="flex flex-col">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="mt-2 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:text-black"
              ></textarea>
            </div>
          </form>
          <button
          type="submit"
           className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-transform duration-200 hover:scale-105">
            Send Message
          </button>
        
      </section>

      <section className="flex flex-col gap-y-8 dark:bg-white p-6 rounded-2xl">
        <div className="space-y-3">
          <h3 className="text-3xl font-semibold dark:text-black">Contact with Me</h3>

          <p className="text-xl dark:text-black">Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="flex gap-x-6 ">
          <a href="#!" role="button">
            {/* <!-- Facebook --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#1877f2" }}
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>

          <a href="#!" role="button">
            {/* <!-- Instagram --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#c13584" }}
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a href="#!" role="button">
            {/* <!-- Google --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#ea4335" }}
              viewBox="0 0 24 24"
            >
              <path
                d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a href="#!" role="button">
            {/* <!-- Twitter --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#1da1f2" }}
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
        </div>
      </section>
    </section>
  );
}
