import React from 'react';

function Card({username, btnText="visit me"}){
    console.log("username", username);
    return(
<div className="container mx-auto p-8">
  <div className="flex flex-row flex-wrap -mx-2">       
    <div className="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
      <div className="relative bg-white rounded border">
        <picture className="block bg-gray-200 border-b">
          <img className="block" src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?cs=srgb&dl=pexels-jake-pnw-1761279.jpg&fm=jpg&_gl=1*cbudgm*_ga*MTEzNjIwMDQzOC4xNzI4MzgyMDE2*_ga_8JE65Q40S6*MTc0NTA0MjcwNy4yLjEuMTc0NTA0MzUzNy4wLjAuMA.." alt="Card 1"/>
        </picture>
        <div className="p-4">
          <h3 className="text-lg font-bold">
            <a className="stretched-link" href="#" title="Card 1">
              {username}
            </a>
          </h3>
          <button className="block mb-2 text-sm text-gray-600" >{btnText}</button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
    </div>
    </div>
    )
}

export default Card