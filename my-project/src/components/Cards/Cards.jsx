import React from 'react'

function Cards() {
  return (
    <>
   
    <div class=" w-[300px] rounded-md border">
  <img
    src="https://images.pexels.com/photos/3184634/pexels-photo-3184634.jpeg?auto=compress&cs=tinysrgb&w=600"
    alt="Error loading image"
    class="h-[200px] w-full rounded-md object-cover"
  />
  <div class="p-4">
    <h1 class="text-lg font-semibold">ABC Internship</h1>
    <p class="mt-3 text-sm text-gray-600">
      Skills : MS Office, Power BI <br />
      Duration : 3 Months <br />
      Stipend : 7500/- <br />
      Experience required : 0 to 3 months
    </p>
    <button
      type="button"
      class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Apply
    </button>
  </div>
</div>
    </>
  )
}



export default Cards
