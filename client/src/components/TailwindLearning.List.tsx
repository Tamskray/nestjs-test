import React from "react";
import lenaImage from "../assets/images/lena.jpg";

const dumbData = [
  {
    name: "Lena1",
    averageLovePoints: 222,
    level: 2,
    imageUrl: lenaImage,
    imageAlt: "lena1",
  },
  {
    name: "Lena2",
    averageLovePoints: 111,
    level: 5,
    imageUrl: lenaImage,
    imageAlt: "lena12",
  },
  {
    name: "Lena3",
    averageLovePoints: 424,
    level: 12,
    imageUrl: lenaImage,
    imageAlt: "lena13",
  },
  {
    name: "Lena4",
    averageLovePoints: 312,
    level: 4,
    imageUrl: lenaImage,
    imageAlt: "lena4",
  },
  {
    name: "Lena5",
    averageLovePoints: 78,
    level: 1,
    imageUrl: lenaImage,
    imageAlt: "lena5",
  },
];

const TailwindLearningList = () => {
  return (
    <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
      <h2 className="text-xl text-gray-900">Popular girls</h2>
      <p className="mt-2 text-gray-600">A selection of great ggirls</p>

      <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {dumbData.map((item) => (
          <div className="flex items-center rounded-lg bg-gray-100 shadow-lg overflow-hidden">
            <img
              className="h-32 w-32 flex-shrink-0 object-cover object-center"
              src={item.imageUrl}
              alt={item.imageAlt}
            />
            <div className="px-6 py-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>

              <p className="text-gray-600">{item.averageLovePoints}</p>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm"
                >
                  Tap {item.level} level
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TailwindLearningList;
