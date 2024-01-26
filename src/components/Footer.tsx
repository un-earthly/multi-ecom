import React from 'react'
const Header = ({ text }) => {
  // return <h1 className='text-lg px-3 my-4'>{text}</h1>
}
export default function Footer() {
  return (
    <div className="bg-[#4285F4]  text-white">
      <div className="w-10/12 mx-auto">
        <div className="flex">
          <div className="w-1/3">
            <div className="">
              <div className='text-lg font-bold'>E-Comm</div>
              <p className='my-3 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
            </div>
          </div>
          {/* <div className="w-1/3"></div> */}
          <div className="w-1/3">
            <div className="">
              <div className='text-lg font-bold'>E-Comm</div>
              <p className='my-3 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
            </div>
          </div>
          {/* <div className="w-1/3"></div> */}
          <div className="w-1/3">
            <div className="">
              <div className='text-lg font-bold'>E-Comm</div>
              <p className='my-3 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
            </div>
          </div>
        </div>


        <footer class="">
          <div class="mx-auto w-full max-w-screen-xl">
            <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
              <div>
                <h2 class="mb-6 text-sm font-semibold uppercase dark:text-white">Company</h2>
                <ul class="">
                  <li class="">
                    <a href="#" class=" hover:underline">About</a>
                  </li>
                  <li class="">
                    <a href="#" class="hover:underline">Careers</a>
                  </li>
                  <li class="">
                    <a href="#" class="hover:underline">Brand Center</a>
                  </li>
                  <li class="">
                    <a href="#" class="hover:underline">Blog</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold uppercase dark:text-white">Help center</h2>
                <ul class="">
                  <li class="">
                    <a href="#" class="hover:underline">Discord Server</a>
                  </li>
                  <li class="">
                    <a href="#" class="hover:underline">Twitter</a>
                  </li>
                  <li class="">
                    <a href="#" class="hover:underline">Facebook</a>
                  </li>
                  <li class="">
                    <a href="#" class="hover:underline">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold uppercase dark:text-white">Legal</h2>
                <ul class="">
                  <li class="">
                    <a href="#" class="hover:underline">Privacy Policy</a>
                  </li>
                  <li class="">
                    <a href="#" class="hover:underline">Licensing</a>
                  </li>
                  <li class="">
                    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold uppercase dark:text-white">Download</h2>
                <ul class="">
                  <li class="">
                    <a href="#" class="hover:underline">iOS</a>
                  </li>
                  <li class="">
                    <a href="#" class="hover:underline">Android</a>
                  </li>
                  <li class="">
                    <a href="#" class="hover:underline">Windows</a>
                  </li>
                  <li class="">
                    <a href="#" class="hover:underline">MacOS</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="px-4 py-6 md:flex md:items-center md:justify-between">
              <span class="text-sm sm:text-center">© 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.
              </span>
              <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
               <img src="/Brands.png" alt="" />
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  )
}
