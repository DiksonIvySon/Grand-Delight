import React, {Component} from "react";
import myImage from './assets/myImage.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const viewerObject = {
        madam: {name: "Madam",
                imageURL: "url",
                stars: 4,
                reviewText: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                },
          max: {name: "Madam",
                imageURL: "url",
                stars: 4,
                reviewText: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                },
          sam: {name: "Madam",
                imageURL: "url",
                stars: 4,
                reviewText: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                },
          rob: {name: "Madam",
                imageURL: "url",
                stars: 4,
                reviewText: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                }
};

function ReviewCard(props) {
    

    const userName = props.userName;

    return(
        <div className="review-card">
            <div>
                <div className="rating">
                    <div>
                        <h3>Rating</h3>
                    </div>
                    <div className="rating-stars">
                        <FontAwesomeIcon icon={faStar} className="icon"/>
                        <FontAwesomeIcon icon={faStar} className="icon"/>
                        <FontAwesomeIcon icon={faStar} className="icon"/>
                        <FontAwesomeIcon icon={faStar} className="icon"/>
                        <FontAwesomeIcon icon={faStar} className="icon"/>
                    </div>
                </div>
                <div className="reviewer-profile">
                    <div>
                        <img src={myImage}></img>
                    </div>
                    <div>
                        <h4 className="reviewer-name">name</h4>
                    </div>
                </div>
                <p className="review-text">
                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, 
                garnished with crunchy garlic and rosemary croutons."
 
                </p>
            </div>
        </div>
    );
}


class Testimonials extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="testimonials">
                <h1>Testimonials</h1>
                <div>
                    <ReviewCard userName="madam"/>
                    <ReviewCard userName="sam"/>
                    <ReviewCard userName="rob"/>
                    <ReviewCard userName="max"/>
                </div>
            </section>
        );
    }
}

export default Testimonials;