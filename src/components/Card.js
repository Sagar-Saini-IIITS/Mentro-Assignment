import React from "react";
import Rating from "./Rating";

const Card = ({img,num,MentorDetails,setNum}) => {
  return (
    <div className="flex-col w-full border border-gray-200 shadow-2xl shadow-gray-200 overflow-hidden mx-auto my-10 ">
      <div className="flex">
        {/* left part of card */}

        <div className="w-4/12 pt-24 pb-12 pl-10">
          <span className="text-4xl font-[700] text-[#4CAF50] block pb-3 pl-2 X ">
            {MentorDetails[num].rating}
          </span>
          <Rating rating={MentorDetails[num].rating} />

          <span className="text-3xl font-[Poppins] font-normal font-[800] pt-4 pb-1 block">
            {MentorDetails[num].name}
          </span>
          <span className="text-xl font-[Poppins] font-[800] font-normal text-[#000000] block pb-6">
            {MentorDetails[num].designation}
          </span>
          <p className="text-xs font-[Poppins] font-[500] text-justify">
            {MentorDetails[num].description}
          </p>
        </div>

        {/* right part of card  */}

        <div className="w-8/12 relative flex-col justify-end ">
          <div
            className={`flex h-[70%] w-[120%] -right-4 absolute ${
              num % 2 ? "evencard-greenbg" : "oddcard-greenbg"
            } rounded-b-[800px] overflow-hidden`}
          >
            <div className="mx-auto flex inline">
              <img
                src={img[(num - 2 + 5) % 5]}
                className="w-20 h-20 relative top-[70%] -left-[5%] rounded-full "
                alt={`img`}
              ></img>
              <img
                src={img[(num - 1 + 5) % 5]}
                className="w-20 h-20 relative top-[30%] -left-[5%] rounded-full" alt={`img`}
              ></img>
              <img
                src={img[num]}
                className="w-20 h-20 relative top-[5%] -right-[5%] rounded-full" alt={`img`}
              ></img>
              <img
                src={img[(num + 1) % 5]}
                className="w-20 h-20 relative top-[30%] -right-[15%] rounded-full" alt={`img`}
              ></img>
              <img
                src={img[(num + 2) % 5]}
                className="w-20 h-20 relative top-[70%] -right-[15%] rounded-full" alt={`img`}
              ></img>
            </div>
          </div>
          <div className="relative">
            <div className="flex justify-between">
              <span className="fas fa-arrow-alt-circle-down text-[#4CAF50] top-80 py-5 px-10 relative scale-150 " onClick={()=> setNum((num-1+5)%5)}></span>
              <img
                src={img[num]}
                className="w-36 relative rounded-full top-56 " alt={`${MentorDetails[num].name} img`}
              ></img>
              <span className="fas fa-arrow-alt-circle-down text-[#4CAF50] px-10 pr-14 py-5 top-80 relative  scale-150" onClick={()=> setNum((num+1)%5)}></span>
            </div>
          </div>
        </div>
      </div>

      {/* footer button of card */}

      <div className="px-10 pb-20 w-[100%] flex jutify-between">
        {" "}
        <button
          className={`text-sm font-bold ${
            num % 2 ? "evencard-greenbtn" : "oddcard-greenbtn"
          } border border-[#4CAF50] text-white font-[600] shadow-xl shadow-[#4CAF50] p-1 px-8`}
        >
          Book a session
        </button>
        <span className="relative font-bold text-lg text-center mx-auto p-2 left-[7%] px-4 bg-[#C5F8C7] rounded-md font-[Poppins]" >
          {MentorDetails[num].name}
        </span>
      </div>
      
    </div>
  );
};

export default Card;
