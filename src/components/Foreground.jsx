import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "This is a docs app. Static data is inserted over here.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is a great website for pratice react and to do revision about it😊",
      filesize: "4.1mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Just enjoy the animation that are being used. Animation are used too for pratice session and get hands on!!",
      filesize: ".2mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
    {
      desc: "thanksss you!!  Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: "1.3mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <>
      <div
        ref={ref}
        className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
      >
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
