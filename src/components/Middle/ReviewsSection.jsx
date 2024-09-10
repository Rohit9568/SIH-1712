import { useState } from "react";
import "./ReviewsSection.css";

const ReviewsSection = () => {
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
    <div className="reviews-section">
      <div className="nav-buttons">
        <button className="nav-button left" onClick={handlePrevSlide}>
          &#9664;
        </button>
        <button className="nav-button right" onClick={handleNextSlide}>
          &#9654;
        </button>
      </div>
      
      <div className="reviews-slider">
        <div className="review">
          <div className="stars">★★★★★</div>
          <p className="review-text">{reviews[currentSlide].text}</p>
          <h4 className="author">{reviews[currentSlide].author}</h4>
          <p className="position">{reviews[currentSlide].position}</p>
        </div>
      </div>

      <div className="dots">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>

      <div className="article-section">
        <div className="article-left">
          <h2>As covered by the</h2>
          <h1>New York Times</h1>
          <p>Can Virtual Reality Help Autistic Children Navigate the Real World?</p>
          <button className="read-article">Read article</button>
        </div>
        <div className="article-right">
          <div className="circle-image">
            <img
              src="https://8184560.fs1.hubspotusercontent-na1.net/hubfs/8184560/floreo-article-image@2x.png"
              alt="NY Times article displayed on a phone"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
