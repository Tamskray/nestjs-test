import lenaImage from "../assets/images/lena.jpg";

function TailwindLearning() {
  return (
    <div className="bg-pink-200 sm:bg-brand">
      <div className="grid lg:grid-cols-2 2xl:grid-cols-5">
        <div className="px-8 py-12 max-w-md mx-auto lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
          <div className="xl:max-w-xl">
            <img className="h-12" src={lenaImage} alt="image-lena-logo" />
            <img
              className="mt-6 rounded-3xl shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover 
          object-center lg:hidden"
              src={lenaImage}
              alt="image-lena"
            />
            <h1 className="mt-6 text-2xl font-bold text-gray-700 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              You can love her from anywhere.
              <br className="hidden lg:inline" />
              <span className="text-red-600"> Just feel it.</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-lg">
              Lena Mirize captivates with her infectious laughter and boundless
              kindness, making her impossible not to love. Her creative flair
              and unwavering support illuminate the lives of those lucky enough
              to know her.
            </p>
            <div className="mt-4 space-x-2 sm:mt-6 cursor-pointer ">
              <a className="btn btn-primary">Fall in love</a>
              <a className="btn btn-secondary">Want more</a>
            </div>
          </div>
        </div>
        <div className="hidden relative lg:block 2xl:col-span-3">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center "
            src={lenaImage}
            alt="image-lena"
          />
        </div>
      </div>
    </div>
  );
}

export default TailwindLearning;
