import React from 'react'

const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative px-7 py-10 mt-8 ">
      <div>
        <h1 className='text-5xl font-semibold underline cursor-pointer tracking-widest pt-12 text-white text-center'>Help Center</h1>
      </div>
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap sm:pt-10">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 pt-4 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder={0}
            title="map"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          />
          <div className="bg-white relative flex flex-wrap pb-6 rounded shadow-md sm:pr-6">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Sunny Side Building,A.M.4,Burns Road,Karachi
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed">saleemtooba365@gmail.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">0305-2108570</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 px-8 md:mt-6 mt-8 py-7">
          <h2 className="text-gray-900 text-2xl mb-3 font-semibold title-font underline underline-offset-4">
            Contact Us
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600 text-center text-lg">
            Get in touch with Us.. We will get back to you as soon as possible..
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-md text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-md text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-md text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
          <button className="text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-orange-300 rounded text-xl font-semibold">
            Send
          </button>
          <p className="text-md text-gray-500 mt-5 text-center">
            Thank you for reaching us
          </p>
        </div>
      </div>
    </section>

  )
}

export default Contact