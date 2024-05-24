import React from 'react'
import { useNavigate } from 'react-router-dom';
function Cards() {
  const navigate = useNavigate();
  const handelClick = ()=>{
    navigate('/formBuilder')
  }

  return (
    <>
  
  <div className="container">
    <div class=" w-[300px] rounded-md border">
  <img
    src="https://images.pexels.com/photos/1181568/pexels-photo-1181568.jpeg?auto=compress&cs=tinysrgb&w=600"
    alt="Error"
    class="h-[200px] w-full rounded-md object-cover"
  />
  <div class="p-4">
    <h1 class="text-lg font-semibold">Internship A</h1>
    <p class="mt-3 text-sm text-gray-600">
      3 months <br />
      Mumbai <br />
      Work from Home <br />
      Starts immediately <br />
    </p>
    <button
      type="button"
      class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      onClick={handelClick} 
    >
      Apply
    </button>
  </div>
</div>
    <div class=" w-[300px] rounded-md border">
  <img
    src="https://images.pexels.com/photos/6476186/pexels-photo-6476186.jpeg?auto=compress&cs=tinysrgb&w=600"
    alt="Laptop"
    class="h-[200px] w-full rounded-md object-cover"
  />
  <div class="p-4">
    <h1 class="text-lg font-semibold">Internship B</h1>
    <p class="mt-3 text-sm text-gray-600">
      6 months <br />
      Navi Mumbai <br />
      Work from Home <br />
      Starts immediately <br />
    </p>
    <button
      type="button"
      class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      onClick={handelClick} 
    >
      Apply
    </button>
  </div>
</div>
    <div class=" w-[300px] rounded-md border">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuGvsKI9do6CvYNIdztB1dLuUUGGgy-eLtaw&s"
    alt="Laptop"
    class="h-[200px] w-full rounded-md object-cover"
  />
  <div class="p-4">
    <h1 class="text-lg font-semibold">Internship C</h1>
    <p class="mt-3 text-sm text-gray-600">
      2 months <br />
      Hyderabad <br />
      Work from Home <br />
      Starts immediately <br />
    </p>
    <button
      type="button"
      class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      onClick={handelClick} 
    >
      Apply
    </button>
  </div>
</div>
    <div class=" w-[300px] rounded-md border">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4Lo8XU5YSQ2jzo5eKd8ajjWQ17eilCHKgA&s"
    alt="Laptop"
    class="h-[200px] w-full rounded-md object-cover"
  />
  <div class="p-4">
    <h1 class="text-lg font-semibold">Internship D</h1>
    <p class="mt-3 text-sm text-gray-600">
      2 months <br />
      Delhi <br />
      Work from Home <br />
      Starts immediately <br />
    </p>
    <button
      type="button"
      class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      onClick={handelClick} 
    >
      Apply
    </button>
  </div>
</div>
    <div class=" w-[300px] rounded-md border">
  <img
    src="https://images.pexels.com/photos/3747455/pexels-photo-3747455.jpeg?auto=compress&cs=tinysrgb&w=600"
    alt="Laptop"
    class="h-[200px] w-full rounded-md object-cover"
  />
  <div class="p-4">
    <h1 class="text-lg font-semibold">Internship E</h1>
    <p class="mt-3 text-sm text-gray-600">
      4 months <br />
      Mumbai <br />
      In office <br />
    </p>
    <button
      type="button"
      class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      onClick={handelClick} 
    >
      Apply
    </button>
  </div>
</div>
    <div class=" w-[300px] rounded-md border">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc-rSo6KDmN6hZp4o3Isvrn9it8RQODvy9cw&s"
    alt="Laptop"
    class="h-[200px] w-full rounded-md object-cover"
  />
  <div class="p-4">
    <h1 class="text-lg font-semibold">Internship F</h1>
    <p class="mt-3 text-sm text-gray-600">
      3 months <br />
      Pune <br />
      In office <br />
    </p>
    <button
      type="button"
      class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      onClick={handelClick} 
    >
      Apply
    </button>
  </div>
</div>

</div>
    
    </>
  )
}

export default Cards