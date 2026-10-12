import React from "react";
import myImage from './assets/myImage.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const reviews = [
  { name: "Madam", stars: 5, text: "An absolutely incredible experience. The food was divine and the atmosphere is unmatched in Sandton." },
  { name: "Sam",   stars: 5, text: "From the moment we walked in, we felt like royalty. The Cape Malay curry is a must-try!" },
  { name: "Rob",   stars: 4, text: "Exceptional service and beautifully presented dishes. Grand Delight truly lives up to its name." },
  { name: "Max",   stars: 5, text: "The signature dishes are outstanding. We will definitely be coming back for our anniversary." },
];

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <div>
        <div className="rating">
          <div>
            <h3>Rating</h3>
          </div>
          <div className="rating-stars">
            {Array.from({ length: review.stars }).map((_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} className="icon" />
            ))}
          </div>
        </div>
        <div className="reviewer-profile">
          <div>
            <img src={myImage} alt={`${review.name} profile`} loading="lazy" />
          </div>
          <div>
            <h4 className="reviewer-name">{review.name}</h4>
          </div>
        </div>
        <p className="review-text">{review.text}</p>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="testimonials">
      <h1>Testimonials</h1>
      <div>
        {reviews.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
