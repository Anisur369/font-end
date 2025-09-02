import preSchooling from "./../../../assets/english/preSchooling.svg";
import kg from "./../../../assets/english/kg.svg";
import Nursery from "./../../../assets/english/Nursery.svg";
import play from './../../../assets/english/play.svg';
import standard1 from './../../../assets/english/standard1.svg';
import { useState } from "react";

const arr = [{
  name: "Pre-schooling",
  image: preSchooling
}, {
  name: "Play",
  image: play
}, {
  name: "Nursery",
  image: Nursery
}, {
  name: "KG",
  image: kg
}, {
  name: "Standard 1",
  image: standard1
}]

function Categories() {
  const [category, setCategory] = useState("English Medium");
  const [subCategory, setSubCategory] = useState(arr);
  return (
    <>
      <div className="Categories flex flex-col gap-4">
        <h2 className="text-[32px] font-simibold text-start">{category}</h2>
        <div className="grid grid-cols-4 gap-4">
          {
            subCategory.map((item) => {
              console.log(item)
              return (
                <div className="itemCard">
                  <img src={item.image} alt="pre-schooling" />
                  <p>{item.name}</p>
                </div>
              )
            })
          }

        </div>
      </div>
    </>
  );
}

export default Categories;