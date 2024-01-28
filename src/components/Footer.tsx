import React from 'react'
const Header = ({ text }) => {
  // return <h1 className='text-lg px-3 my-4'>{text}</h1>
}
export default function Footer() {
  return (
    <div className="bg-[#4285F4]  pt-20 text-white">
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="">
            <div className='text-lg font-bold'>E-Comm</div>
            <p className='my-3 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
          </div>
          <div className="">
            <div className='text-lg font-bold'>Follow Us</div>
            <p className='my-3 text-sm'>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
          </div>
          {/* <div ></div> */}
          <div className="">
            <div className='text-lg font-bold'>Contact us</div>
            <p className='my-3 text-sm'>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
          </div>
        </div>


        <footer className="">
          <div className="w-full ">
            <div className="grid grid-cols-2 gap-8  py-6 lg:py-8 md:grid-cols-4">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">Company</h2>
                <ul className="">
                  <li className="">
                    <a href="#" className=" hover:underline">About</a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:underline">Careers</a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:underline">Brand Center</a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:underline">Blog</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">Help center</h2>
                <ul className="">
                  <li className="">
                    <a href="#" className="hover:underline">Discord Server</a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:underline">Twitter</a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:underline">Facebook</a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:underline">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">Legal</h2>
                <ul className="">
                  <li className="">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:underline">Licensing</a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">Download</h2>
                <ul className="">
                  <li className="">
                    <a href="#" className="hover:underline">iOS</a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:underline">Android</a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:underline">Windows</a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:underline">MacOS</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-4 py-6 border-t md:flex md:items-center md:justify-between">
              <span className="text-sm sm:text-center">© 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.
              </span>
              <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                <img src="/Brands.png" alt="" />
              </div>
            </div>
          </div>
        </footer>

      </div >
    </div >
  )
}
