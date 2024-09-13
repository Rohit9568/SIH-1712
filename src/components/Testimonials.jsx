import { useState } from "react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      id: 1,
      text: "We rolled out Floreo this past year at A Step Up Academy with 4 of our students and they thrived! Something we learned as a school during virtual and hybrid learning...",
      author: "Jillian W.",
      position: "BCBA, Director of Clinical Programming",
    },
    {
      id: 2,
      text: "Our clinical team has just begun to use Floreo and we are impressed at how much the community vignettes engage them, giving them practice and promoting discussion.",
      author: "Catherine Lord",
      position: "Professor of Human Development and Psychology at UCLA",
    },
    {
      id: 3,
      text: "Floreo has been an excellent tool in helping autistic children understand social scenarios in a controlled and immersive environment.",
      author: "John Doe",
      position: "Child Psychologist",
    },
    {
      id: 4,
      text: "The VR experience created by Floreo has greatly helped my students engage with the content and apply their learnings to real-life situations.",
      author: "Jane Smith",
      position: "Special Education Teacher",
    },
    {
      id: 5,
      text: "With Floreo, we have been able to provide an enriching experience for children on the spectrum to explore various social situations safely.",
      author: "Emily R.",
      position: "Occupational Therapist",
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? reviews.length - 1 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % reviews.length);
  };

  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Buttons */}
        <div className="flex justify-center mb-6">
          <button
            className="text-2xl text-gray-500 hover:text-gray-700"
            onClick={handlePrevSlide}
          >
            &#9664;
          </button>
          <button
            className="text-2xl text-gray-500 hover:text-gray-700 ml-4"
            onClick={handleNextSlide}
          >
            &#9654;
          </button>
        </div>

        {/* Reviews Slider */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8">
          <div className="text-yellow-500 text-xl mb-2">★★★★★</div>
          <p className="text-gray-700 text-lg italic text-center">
            {reviews[currentSlide].text}
          </p>
          <h4 className="mt-4 font-bold text-gray-900 text-lg">
            {reviews[currentSlide].author}
          </h4>
          <p className="text-gray-500">{reviews[currentSlide].position}</p>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full cursor-pointer ${
                index === currentSlide
                  ? "bg-blue-500"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>

        {/* Article Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-gray-800 text-2xl font-semibold">
              As covered by the
            </h2>
            <h1 className="text-3xl font-bold text-gray-900 mt-2">
              New York Times
            </h1>
            <p className="text-gray-600 mt-4">
              Can Virtual Reality Help Autistic Children Navigate the Real
              World?
            </p>
            <button className="mt-6 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700">
              Read article
            </button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-64 h-64 overflow-hidden rounded-full shadow-lg">
              <img
                src="https://8184560.fs1.hubspotusercontent-na1.net/hubfs/8184560/floreo-article-image@2x.png"
                alt="NY Times article displayed on a phone"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
