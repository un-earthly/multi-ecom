import React, { useState } from 'react'
import ContentLayout from '../components/ContentLayout'
import StarRating from '../components/StarIcon'
import { useParams } from 'react-router-dom';
import products from '../../product.json'
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { register } from 'swiper/element/bundle';
import "swiper/element/css/autoplay"
register();
export default function ProductDetails() {
  const { id } = useParams()
  const product = products[id];
  const { addToCart } = useCart();
  const [tab, setTab] = useState(1)
  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <ContentLayout>

      <div class="flex  flex-col md:flex-row -mx-4 mt-20 my-10">
        <div class="md:flex-1 px-4">
          <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
            <img class="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg" alt="Product Image" />
          </div>
          <div class="flex -mx-2 mb-4">
          </div>
        </div>
        <div class="md:flex-1 px-10">
          <p className="text-xs text-gray-600">Category</p>
          <h2 class="text-2xl font-bold text-[#FF9800] mb-2">Product Name</h2>
          <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            ante justo. Integer euismod libero id mauris malesuada tincidunt.
          </p>
          <ul className='list-disc px-4'>
            <li>Material: 100% brushed polyester
</li>
            <li>Seam thread color automatically matched to design (black or white)
</li>
            <li>Assembled in the USA from globally sourced parts
</li>
            <li>Size and care information printed inside the collar

</li>
            <li>Light fabric (5.16 oz/yd² (175 g/m²))
</li>
          </ul>
          <div className="flex flex-col space-y-4 justify-center px-2 my-3 mt-14">
            <button onClick={() => addToCart({ ...product, quantity: count })} className="w-1/2 border-2 hover:bg-transparent duration-300 hover:border-[#ff9800] border-transparent  bg-[#ff9800] py-2 px-4 rounded-full font-bold">Add to Cart</button>
          </div>
        </div>
      </div>


      <div className="border-b flex flex-col ">
        <div className="flex justify-between">
          <div className="text-2xl font-semibold">
            Available providers
          </div>
          <div className='flex space-x-4'>
            <span className='capitalize'>
              sort by
            </span>
            <div className="border border flex itemm-center rounded justify-between">
              Printify ranking
            </div>
          </div>

        </div>
        <div className='flex border-t px-3 py-4 justify-between'>
          <div>
            <div className="text-xl font-semibold">
              Miami Sublimation <div className="inline-block px-2 py-0.5 underline text-base rounded bg-violet-900 text-white">7.7</div>
            </div>
          </div>
          <div className='flex space-x-4'>
            <button className='border px-3 py-1 rounded flex items-center justify-center'>Provider info</button>
            <button className='bg-green-400 px-3 py-1 rounded flex items-center justify-center'>Start Designing</button>
          </div>
        </div>
      </div>

      <div className='flex my-10'>

        <h1 className='text-3xl w-[35%] font-semibold'>Key Features</h1>
        <div className="grid grid-cols-2 gap-10 w-[65%]">
          <div>
            <img className='h-10' src="https://printify.com/cdn-cgi/image/width=48,quality=100,format=avif/https://images.printify.com/api/catalog/59e0e611b8e7e30a1a4de803/icons_v4_outlined_2_polyester-plastic.svg" alt="" />
            <p className='text-black'>100% Polyester</p>
            <p className='text-gray-600'>This extremely strong and durable synthetic fabric retains its shape and dries quickly</p>
          </div>
          <div>
            <img className='h-10' src="https://printify.com/cdn-cgi/image/width=48,quality=100,format=avif/https://images.printify.com/api/catalog/59e0e611b8e7e30a1a4de803/icons_v4_outlined_2_polyester-plastic.svg" alt="" />
            <p className='text-black'>100% Polyester</p>
            <p className='text-gray-600'>This extremely strong and durable synthetic fabric retains its shape and dries quickly</p>
          </div>
          <div>
            <img className='h-10' src="https://printify.com/cdn-cgi/image/width=48,quality=100,format=avif/https://images.printify.com/api/catalog/59e0e611b8e7e30a1a4de803/icons_v4_outlined_2_polyester-plastic.svg" alt="" />
            <p className='text-black'>100% Polyester</p>
            <p className='text-gray-600'>This extremely strong and durable synthetic fabric retains its shape and dries quickly</p>
          </div>
          <div>
            <img className='h-10' src="https://printify.com/cdn-cgi/image/width=48,quality=100,format=avif/https://images.printify.com/api/catalog/59e0e611b8e7e30a1a4de803/icons_v4_outlined_2_polyester-plastic.svg" alt="" />
            <p className='text-black'>100% Polyester</p>
            <p className='text-gray-600'>This extremely strong and durable synthetic fabric retains its shape and dries quickly</p>
          </div>

        </div>

      </div>
      <div className='flex'>

        <h1 className='text-3xl w-[35%] font-semibold'>Size guide</h1>

        <div className="flex flex-col">

          <p className='px-6'> All measurements in the table refer to product dimensions.</p>

          <div className='my-10 '>


            <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
              <ul class="flex flex-wrap -mb-px">
                <li onClick={() => setTab(1)} class="me-2">
                  <a class={`inline-block cursor-pointer p-4 ${tab === 1 && "border-blue-600 text-blue-600"} border-b-2 rounded-t-lg active dark:text-blue-500 dark:border-blue-500`}>Impreial</a>
                </li>
                <li class="me-2" onClick={() => setTab(2)}>
                  <a class={`inline-block cursor-pointer p-4 ${tab === 2 && "border-blue-600 text-blue-600"} border-b-2 rounded-t-lg active dark:text-blue-500 dark:border-blue-500`} aria-current="page">Metric</a>
                </li>
              </ul>
            </div>


            <div class="relative overflow-x-auto">
              {tab === 1 ? <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-900 border uppercase dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">

                    </th>
                    <th scope="col" class="px-6 py-3">
                      XS
                    </th>
                    <th scope="col" class="px-6 py-3">
                      S
                    </th>
                    <th scope="col" class="px-6 py-3">
                      M
                    </th>
                    <th scope="col" class="px-6 py-3">
                      L
                    </th>
                    <th scope="col" class="px-6 py-3">
                      XL
                    </th>
                    <th scope="col" class="px-6 py-3">
                      2XL
                    </th>
                    <th scope="col" class="px-6 py-3">
                      3XL
                    </th>
                    <th scope="col" class="px-6 py-3">
                      4XL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Chest width, in
                    </th>
                    <td class="px-6 py-4">
                      15.00 - 15.98
                    </td>
                    <td class="px-6 py-4">
                      15.00 - 15.98
                    </td>
                    <td class="px-6 py-4">
                      15.00 - 15.98
                    </td>
                    <td class="px-6 py-4">
                      15.00 - 15.98
                    </td>
                    <td class="px-6 py-4">
                      15.00 - 15.98
                    </td>
                    <td class="px-6 py-4">
                      15.00 - 15.98
                    </td>
                    <td class="px-6 py-4">
                      15.00 - 15.98
                    </td>
                    <td class="px-6 py-4">
                      15.00 - 15.98
                    </td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Chest width, in
                    </th>
                    <td class="px-6 py-4">
                      15.00 - 15.98
                    </td>
                    <td class="px-6 py-4">
                      15.00 - 15.98
                    </td>
                    <td class="px-6 py-4">
                      15.00 - 15.98
                    </td>
                    <td class="px-6 py-4">
                      15.00 - 15.98
                    </td>
                    <td class="px-6 py-4">
                      15.00 - 15.98
                    </td>
                    <td class="px-6 py-4">
                      15.00 - 15.98
                    </td>
                    <td class="px-6 py-4">
                      15.00 - 15.98
                    </td>
                    <td class="px-6 py-4">
                      15.00 - 15.98
                    </td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Chest width, in
                    </th>
                    <td class="px-6 py-4">
                      15.00 - 15.98
                    </td>
                    <td class="px-6 py-4">
                      15.00 - 15.98
                    </td>
                    <td class="px-6 py-4">
                      15.00 - 15.98
                    </td>
                    <td class="px-6 py-4">
                      15.00 - 15.98
                    </td>
                    <td class="px-6 py-4">
                      15.00 - 15.98
                    </td>
                    <td class="px-6 py-4">
                      15.00 - 15.98
                    </td>
                    <td class="px-6 py-4">
                      15.00 - 15.98
                    </td>
                    <td class="px-6 py-4">
                      15.00 - 15.98
                    </td>
                  </tr>
                </tbody>
              </table>
                : <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-900 border uppercase dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">

                      </th>
                      <th scope="col" class="px-6 py-3">
                        XS
                      </th>
                      <th scope="col" class="px-6 py-3">
                        S
                      </th>
                      <th scope="col" class="px-6 py-3">
                        M
                      </th>
                      <th scope="col" class="px-6 py-3">
                        L
                      </th>
                      <th scope="col" class="px-6 py-3">
                        XL
                      </th>
                      <th scope="col" class="px-6 py-3">
                        2XL
                      </th>
                      <th scope="col" class="px-6 py-3">
                        3XL
                      </th>
                      <th scope="col" class="px-6 py-3">
                        4XL
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white dark:bg-gray-800">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Chest width, cm
                      </th>
                      <td class="px-6 py-4">
                        15.00 - 15.98
                      </td>
                      <td class="px-6 py-4">
                        15.00 - 15.98
                      </td>
                      <td class="px-6 py-4">
                        15.00 - 15.98
                      </td>
                      <td class="px-6 py-4">
                        15.00 - 15.98
                      </td>
                      <td class="px-6 py-4">
                        15.00 - 15.98
                      </td>
                      <td class="px-6 py-4">
                        15.00 - 15.98
                      </td>
                      <td class="px-6 py-4">
                        15.00 - 15.98
                      </td>
                      <td class="px-6 py-4">
                        15.00 - 15.98
                      </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Chest width, cm
                      </th>
                      <td class="px-6 py-4">
                        15.00 - 15.98
                      </td>
                      <td class="px-6 py-4">
                        15.00 - 15.98
                      </td>
                      <td class="px-6 py-4">
                        15.00 - 15.98
                      </td>
                      <td class="px-6 py-4">
                        15.00 - 15.98
                      </td>
                      <td class="px-6 py-4">
                        15.00 - 15.98
                      </td>
                      <td class="px-6 py-4">
                        15.00 - 15.98
                      </td>
                      <td class="px-6 py-4">
                        15.00 - 15.98
                      </td>
                      <td class="px-6 py-4">
                        15.00 - 15.98
                      </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Chest width, cm
                      </th>
                      <td class="px-6 py-4">
                        15.00 - 15.98
                      </td>
                      <td class="px-6 py-4">
                        15.00 - 15.98
                      </td>
                      <td class="px-6 py-4">
                        15.00 - 15.98
                      </td>
                      <td class="px-6 py-4">
                        15.00 - 15.98
                      </td>
                      <td class="px-6 py-4">
                        15.00 - 15.98
                      </td>
                      <td class="px-6 py-4">
                        15.00 - 15.98
                      </td>
                      <td class="px-6 py-4">
                        15.00 - 15.98
                      </td>
                      <td class="px-6 py-4">
                        15.00 - 15.98
                      </td>
                    </tr>
                  </tbody>
                </table>
              }
            </div>



          </div>
        </div>

      </div>


      <div className='py-10'>
        <div className="text-2xl font-semibold my-4">You may also like</div>
        <swiper-container slides-per-view="4" space-between="20" speed="500" autoplay="true" loop="true" navigation="true">



          {
            products.map((p) => {
              return (
                <swiper-slide>
                  <ProductCard desc={p.desc} hoverImg={p.hover} id={p.id} img={p.img} price={p.price} rating={p.rating} title={p.title} key={p.id} />
                </swiper-slide>
              )
            })
          }
        </swiper-container>

      </div>


    </ContentLayout>

  )
}
