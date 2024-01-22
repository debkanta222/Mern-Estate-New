import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../src/styles/home.css";
import { IconMapPin } from "@tabler/icons-react";

export default function Home() {
  return (
    <>
      <div className="max-w-6xl mx-auto py-28 px-3">
        <div className="flex flex-col gap-6">
          <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
            Find your next <span className="text-slate-500">perfect</span>{" "}
            <br />
            place with ease
          </h1>
          <div className="text-gray-400">
            MERN Estate will help you find your home fast, easy and comfortable.
            <br />
            Our expert support is always available.
          </div>
          <a className="text-blue-700 cursor-pointer hover:underline font-semibold text-md">
            Let's Start Now....
          </a>
        </div>
      </div>
      <div className="slider">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper h-[500px]"
        >
          <SwiperSlide>
            <img src="https://cdn.pixabay.com/photo/2016/12/30/08/00/kitchen-1940177_1280.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.pixabay.com/photo/2016/09/22/11/55/kitchen-1687121_1280.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.pixabay.com/photo/2017/06/16/15/58/luxury-home-2409518_1280.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="pb-28">
        <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
          <div className="my-3">
            <h1 className="recent-offers text-slate-600 text-2xl font-semibold">
              Recent offers
            </h1>
            <a
              href=""
              className="text-blue-700 cursor-pointer hover:underline font-semibold"
            >
              Show more offers
            </a>
          </div>
          <ul className="flex flex-wrap gap-4">
            <li className=" bg-white flex flex-col gap-4 shadow-md hover:shadow-lg rounded-md overflow-hidden transition-shadow w-full sm:w-[330px] border">
              <a href="">
                <img
                  className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300 "
                  loading="lazy"
                  src="https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940169_1280.jpg"
                />
                <div className="w-full p-3 gap-2 flex flex-col">
                  <p className="font-semibold m-0 text-lg truncate text-slate-700">
                    Lotus Residency
                  </p>
                  <div className="flex items-center gap-1">
                    <IconMapPin color="#15803D" size={20} />
                    <p className="text-xs  text-gray-600 truncate">
                      35, Biswa Bangla Sarani , Salt Lake ,Kolkata-77
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    Escape the hustle and bustle of city life in this 4-bedroom,
                    2-bathroom lakeside home. Fish off your own private dock,
                    take in breathtaking sunsets from the screened porch, and
                    unwind in the spacious master suite. Perfect for nature
                    enthusiasts.
                  </p>
                  <p className="text-slate-500 mt-2 font-semibold">$733,000</p>
                  <div className="flex items-center gap-4 text-slate-700">
                    <div className="flex items-center gap-1">
                      <p className="font-bold text-xs">2 Beds</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="font-bold text-xs">4 Baths</p>
                    </div>
                  </div>
                </div>
              </a>
            </li>

            <li className=" bg-white flex flex-col gap-4 shadow-md hover:shadow-lg rounded-md overflow-hidden transition-shadow w-full sm:w-[330px] border">
              <a className="contents" href="/listing/64edd3bac60d760100c77127">
                <img
                  className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300 "
                  loading="lazy"
                  src="https://firebasestorage.googleapis.com/v0/b/mern-auth-1c4ae.appspot.com/o/1693307829089home%203.jpeg?alt=media&amp;token=8dcc9a22-a8d3-4737-b27f-7c77b417a7d0"
                />
                <div className="w-full p-3 gap-2 flex flex-col">
                  <p className="font-semibold m-0 text-lg truncate text-slate-700">
                    Ultra-Modern Penthouse in the Clouds
                  </p>
                  <div className="flex items-center gap-1">
                    <IconMapPin color="#15803D" size={20} />
                    <p className="text-xs  text-gray-600 truncate">
                      456 Serenity Lane, Meadowville
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    Elevate your living experience in this state-of-the-art
                    penthouse with futuristic design elements. This high-tech
                    residence boasts automated lighting, a built-in home theater
                    system, and a smart kitchen equipped with the latest
                    culinary gadgets. Floor-to-ceiling windows provide sweeping
                    views of both the city and the surrounding mountains.
                    Situated in the luxurious Sky Tower complex, you'll enjoy
                    top-notch amenities and a prime location.
                  </p>
                  <p className="text-slate-500 mt-2 font-semibold">
                    $500 / month
                  </p>
                  <div className="flex items-center gap-4 text-slate-700">
                    <div className="flex items-center gap-1">
                      <p className="font-bold text-xs">6 Beds</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="font-bold text-xs">5 Baths</p>
                    </div>
                  </div>
                </div>
              </a>
            </li>

            <li className=" bg-white flex flex-col gap-4 shadow-md hover:shadow-lg rounded-md overflow-hidden transition-shadow w-full sm:w-[330px] border">
              <a href="">
                <img
                  className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300 "
                  loading="lazy"
                  src="https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940169_1280.jpg"
                />
                <div className="w-full p-3 gap-2 flex flex-col">
                  <p className="font-semibold m-0 text-lg truncate text-slate-700">
                    Lotus Residency
                  </p>
                  <div className="flex items-center gap-1">
                    <IconMapPin color="#15803D" size={20} />
                    <p className="text-xs  text-gray-600 truncate">
                      35, Biswa Bangla Sarani , Salt Lake ,Kolkata-77
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    Escape the hustle and bustle of city life in this 4-bedroom,
                    2-bathroom lakeside home. Fish off your own private dock,
                    take in breathtaking sunsets from the screened porch, and
                    unwind in the spacious master suite. Perfect for nature
                    enthusiasts.
                  </p>
                  <p className="text-slate-500 mt-2 font-semibold">$733,000</p>
                  <div className="flex items-center gap-4 text-slate-700">
                    <div className="flex items-center gap-1">
                      <p className="font-bold text-xs">2 Beds</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="font-bold text-xs">4 Baths</p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
          <div className="my-3">
            <h1 className="recent-offers text-slate-600 text-2xl font-semibold">
              Recent places for rent
            </h1>
            <a
              href=""
              className="text-blue-700 cursor-pointer hover:underline font-semibold"
            >
              Show more places for rent
            </a>
          </div>
          <ul className="flex flex-wrap gap-4">
            <li className=" bg-white flex flex-col gap-4 shadow-md hover:shadow-lg rounded-md overflow-hidden transition-shadow w-full sm:w-[330px] border">
              <a href="">
                <img
                  className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300 "
                  loading="lazy"
                  src="https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940169_1280.jpg"
                />
                <div className="w-full p-3 gap-2 flex flex-col">
                  <p className="font-semibold m-0 text-lg truncate text-slate-700">
                    Lotus Residency
                  </p>
                  <div className="flex items-center gap-1">
                    <IconMapPin color="#15803D" size={20} />
                    <p className="text-xs  text-gray-600 truncate">
                      35, Biswa Bangla Sarani , Salt Lake ,Kolkata-77
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    Escape the hustle and bustle of city life in this 4-bedroom,
                    2-bathroom lakeside home. Fish off your own private dock,
                    take in breathtaking sunsets from the screened porch, and
                    unwind in the spacious master suite. Perfect for nature
                    enthusiasts.
                  </p>
                  <p className="text-slate-500 mt-2 font-semibold">$733,000</p>
                  <div className="flex items-center gap-4 text-slate-700">
                    <div className="flex items-center gap-1">
                      <p className="font-bold text-xs">2 Beds</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="font-bold text-xs">4 Baths</p>
                    </div>
                  </div>
                </div>
              </a>
            </li>

            <li className=" bg-white flex flex-col gap-4 shadow-md hover:shadow-lg rounded-md overflow-hidden transition-shadow w-full sm:w-[330px] border">
              <a className="contents" href="/listing/64edd3bac60d760100c77127">
                <img
                  className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300 "
                  loading="lazy"
                  src="https://firebasestorage.googleapis.com/v0/b/mern-auth-1c4ae.appspot.com/o/1693307829089home%203.jpeg?alt=media&amp;token=8dcc9a22-a8d3-4737-b27f-7c77b417a7d0"
                />
                <div className="w-full p-3 gap-2 flex flex-col">
                  <p className="font-semibold m-0 text-lg truncate text-slate-700">
                    Ultra-Modern Penthouse in the Clouds
                  </p>
                  <div className="flex items-center gap-1">
                    <IconMapPin color="#15803D" size={20} />
                    <p className="text-xs  text-gray-600 truncate">
                      456 Serenity Lane, Meadowville
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    Elevate your living experience in this state-of-the-art
                    penthouse with futuristic design elements. This high-tech
                    residence boasts automated lighting, a built-in home theater
                    system, and a smart kitchen equipped with the latest
                    culinary gadgets. Floor-to-ceiling windows provide sweeping
                    views of both the city and the surrounding mountains.
                    Situated in the luxurious Sky Tower complex, you'll enjoy
                    top-notch amenities and a prime location.
                  </p>
                  <p className="text-slate-500 mt-2 font-semibold">
                    $500 / month
                  </p>
                  <div className="flex items-center gap-4 text-slate-700">
                    <div className="flex items-center gap-1">
                      <p className="font-bold text-xs">6 Beds</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="font-bold text-xs">5 Baths</p>
                    </div>
                  </div>
                </div>
              </a>
            </li>

            <li className=" bg-white flex flex-col gap-4 shadow-md hover:shadow-lg rounded-md overflow-hidden transition-shadow w-full sm:w-[330px] border">
              <a href="">
                <img
                  className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300 "
                  loading="lazy"
                  src="https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940169_1280.jpg"
                />
                <div className="w-full p-3 gap-2 flex flex-col">
                  <p className="font-semibold m-0 text-lg truncate text-slate-700">
                    Lotus Residency
                  </p>
                  <div className="flex items-center gap-1">
                    <IconMapPin color="#15803D" size={20} />
                    <p className="text-xs  text-gray-600 truncate">
                      35, Biswa Bangla Sarani , Salt Lake ,Kolkata-77
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    Escape the hustle and bustle of city life in this 4-bedroom,
                    2-bathroom lakeside home. Fish off your own private dock,
                    take in breathtaking sunsets from the screened porch, and
                    unwind in the spacious master suite. Perfect for nature
                    enthusiasts.
                  </p>
                  <p className="text-slate-500 mt-2 font-semibold">$733,000</p>
                  <div className="flex items-center gap-4 text-slate-700">
                    <div className="flex items-center gap-1">
                      <p className="font-bold text-xs">2 Beds</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="font-bold text-xs">4 Baths</p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
          <div className="my-3">
            <h1 className="recent-offers text-slate-600 text-2xl font-semibold">
              Recent places for sale
            </h1>
            <a
              href=""
              className="text-blue-700 cursor-pointer hover:underline font-semibold"
            >
              Show more places for sale
            </a>
          </div>
          <ul className="flex flex-wrap gap-4">
            <li className=" bg-white flex flex-col gap-4 shadow-md hover:shadow-lg rounded-md overflow-hidden transition-shadow w-full sm:w-[330px] border">
              <a href="">
                <img
                  className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300 "
                  loading="lazy"
                  src="https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940169_1280.jpg"
                />
                <div className="w-full p-3 gap-2 flex flex-col">
                  <p className="font-semibold m-0 text-lg truncate text-slate-700">
                    Lotus Residency
                  </p>
                  <div className="flex items-center gap-1">
                    <IconMapPin color="#15803D" size={20} />
                    <p className="text-xs  text-gray-600 truncate">
                      35, Biswa Bangla Sarani , Salt Lake ,Kolkata-77
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    Escape the hustle and bustle of city life in this 4-bedroom,
                    2-bathroom lakeside home. Fish off your own private dock,
                    take in breathtaking sunsets from the screened porch, and
                    unwind in the spacious master suite. Perfect for nature
                    enthusiasts.
                  </p>
                  <p className="text-slate-500 mt-2 font-semibold">$733,000</p>
                  <div className="flex items-center gap-4 text-slate-700">
                    <div className="flex items-center gap-1">
                      <p className="font-bold text-xs">2 Beds</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="font-bold text-xs">4 Baths</p>
                    </div>
                  </div>
                </div>
              </a>
            </li>

            <li className=" bg-white flex flex-col gap-4 shadow-md hover:shadow-lg rounded-md overflow-hidden transition-shadow w-full sm:w-[330px] border">
              <a className="contents" href="/listing/64edd3bac60d760100c77127">
                <img
                  className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300 "
                  loading="lazy"
                  src="https://firebasestorage.googleapis.com/v0/b/mern-auth-1c4ae.appspot.com/o/1693307829089home%203.jpeg?alt=media&amp;token=8dcc9a22-a8d3-4737-b27f-7c77b417a7d0"
                />
                <div className="w-full p-3 gap-2 flex flex-col">
                  <p className="font-semibold m-0 text-lg truncate text-slate-700">
                    Ultra-Modern Penthouse in the Clouds
                  </p>
                  <div className="flex items-center gap-1">
                    <IconMapPin color="#15803D" size={20} />
                    <p className="text-xs  text-gray-600 truncate">
                      456 Serenity Lane, Meadowville
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    Elevate your living experience in this state-of-the-art
                    penthouse with futuristic design elements. This high-tech
                    residence boasts automated lighting, a built-in home theater
                    system, and a smart kitchen equipped with the latest
                    culinary gadgets. Floor-to-ceiling windows provide sweeping
                    views of both the city and the surrounding mountains.
                    Situated in the luxurious Sky Tower complex, you'll enjoy
                    top-notch amenities and a prime location.
                  </p>
                  <p className="text-slate-500 mt-2 font-semibold">
                    $500 / month
                  </p>
                  <div className="flex items-center gap-4 text-slate-700">
                    <div className="flex items-center gap-1">
                      <p className="font-bold text-xs">6 Beds</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="font-bold text-xs">5 Baths</p>
                    </div>
                  </div>
                </div>
              </a>
            </li>

            <li className=" bg-white flex flex-col gap-4 shadow-md hover:shadow-lg rounded-md overflow-hidden transition-shadow w-full sm:w-[330px] border">
              <a href="">
                <img
                  className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300 "
                  loading="lazy"
                  src="https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940169_1280.jpg"
                />
                <div className="w-full p-3 gap-2 flex flex-col">
                  <p className="font-semibold m-0 text-lg truncate text-slate-700">
                    Lotus Residency
                  </p>
                  <div className="flex items-center gap-1">
                    <IconMapPin color="#15803D" size={20} />
                    <p className="text-xs  text-gray-600 truncate">
                      35, Biswa Bangla Sarani , Salt Lake ,Kolkata-77
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    Escape the hustle and bustle of city life in this 4-bedroom,
                    2-bathroom lakeside home. Fish off your own private dock,
                    take in breathtaking sunsets from the screened porch, and
                    unwind in the spacious master suite. Perfect for nature
                    enthusiasts.
                  </p>
                  <p className="text-slate-500 mt-2 font-semibold">$733,000</p>
                  <div className="flex items-center gap-4 text-slate-700">
                    <div className="flex items-center gap-1">
                      <p className="font-bold text-xs">2 Beds</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="font-bold text-xs">4 Baths</p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
