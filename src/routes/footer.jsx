import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className=" bg-stone-300 pt-10 mt-10 ">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  ">
    <div className="footerOne ">
      <ul className=" flex flex-col align-middle items-center justify-start gap-2">
        <li className="hover:text-yellow-500 text-lg "> Explained news</li>
        <li className="hover:text-yellow-500 text-lg "> Last hour news</li>
        <li className="hover:text-yellow-500 text-lg "> Government updates</li>
        <li className="hover:text-yellow-500 text-lg mb-5 "> World news</li>
      </ul>
    </div>
    <div className="footrtTwo">
      <div className="flex flex-col align-middle items-center justify-start gap-2">
        {" "}
        <div className="flex flex-col align-middle items-center justify-start gap-2 ">
          <h3 className="mb-3 text-2xl font-mono text-nowrap">
            Get your daily newsletter
          </h3>
          <input
            placeholder="Your Email address"
            className=" border border-double border-zinc-300 p-2 rounded-full"
            type="email"
            name=""
            id=""
          />
          <button
            className=" mb-5 px-3 rounded-full border bg-yellow-500 border-zinc-300 hover:bg-slate-100 "
            type="submit"
          >
            Subscribe
          </button>
        </div>
        <div className="mb-5">
          <h3 className="font-mono">Talk to Us</h3>
          <div className=" flex gap-3">
            <i className="fa-regular fa-envelope text-4xl" />
            <i className="fa-solid fa-phone text-3xl" />
          </div>
        </div>
      </div>
    </div>
    <div className="footerThree">
      <ul className="flex flex-col align-middle items-center justify-start gap-2">
        <li className="hover:text-yellow-500 text-lg "> Subscription</li>
        <li className="hover:text-yellow-500 text-lg "> News letter</li>
        <li className="hover:text-yellow-500 text-lg "> Hiring</li>
        <li className="hover:text-yellow-500 text-lg "> contact us</li>
      </ul>
    </div>
  </div>
</footer>


    
    </>
  )
}
