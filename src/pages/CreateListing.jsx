import React from "react";

export default function CreateListing() {
  return (
    <>
      <section className="py-20 h-full">
        <h1 className="text-center font-semibold text-4xl text-slate-700 pb-6">
          Create a Listing
        </h1>
        <div className="max-w-6xl px-3 mx-auto">
          <form class="flex gap-4 sm:flex-row flex-col">
            <div class="flex flex-col gap-4 flex-1">
              <input
                type="text"
                id="name"
                placeholder="Name"
                maxlength="62"
                minlength="10"
                required=""
                class="border p-3 rounded-lg "
              />
              <textarea
                type="text"
                id="description"
                placeholder="Description"
                required=""
                class="border p-3 rounded-lg"
              ></textarea>
              <input
                type="text"
                id="address"
                placeholder="Address"
                required=""
                class="border p-3 rounded-lg "
              />
              <div class="flex gap-6 flex-wrap">
                <div class="flex gap-2">
                  <input type="checkbox" id="sale" class="w-5" />
                  <span>Sell</span>
                </div>
                <div class="flex gap-2">
                  <input type="checkbox" id="rent" class="w-5" checked="" />
                  <span>Rent</span>
                </div>
                <div class="flex gap-2">
                  <input type="checkbox" id="parking" class="w-5" />
                  <span>Parking spot</span>
                </div>
                <div class="flex gap-2">
                  <input type="checkbox" id="furnished" class="w-5" />
                  <span>Furnished</span>
                </div>
                <div class="flex gap-2">
                  <input type="checkbox" id="offer" class="w-5" />
                  <span>Offer</span>
                </div>
              </div>
              <div class="flex gap-6 flex-wrap">
                <div class="flex items-center gap-2">
                  <input
                    type="number"
                    id="bedrooms"
                    min="1"
                    max="10"
                    required=""
                    class="p-3  border border-gray-300 rounded-lg"
                  />
                  <p>Beds</p>
                </div>
                <div class="flex items-center gap-2">
                  <input
                    type="number"
                    id="bathrooms"
                    min="1"
                    max="10"
                    required=""
                    class="p-3 border border-gray-300 rounded-lg"
                  />
                  <p>Baths</p>
                </div>
                <div class="flex items-center gap-2">
                  <input
                    type="number"
                    id="regularPrice"
                    min="50"
                    max="10000000"
                    required=""
                    class="p-3 border border-gray-300 rounded-lg"
                  />
                  <div class="flex flex-col items-center">
                    <p>Regular price </p>
                    <span class="text-xs">($ / Month)</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col flex-1 gap-4">
              <p class="font-semibold">
                Images:{" "}
                <span class="text-gray-600 font-normal">
                  The first image will be the cover (max 6)
                </span>
              </p>
              <form class="flex gap-4">
                <input
                  type="file"
                  id="images"
                  accept="image/*"
                  multiple
                  class="p-3 border border-gray-300 rounded w-full"
                />
                <button
                  type="submit"
                  class="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80"
                >
                  Upload
                </button>
              </form>
              <p class="text-red-700"></p>
              <button
                type="submit"
                class="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
              >
                Create Listing
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
