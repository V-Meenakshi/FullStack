import './styles.css';
export default function GetReview(){
    const reviews=[{pic : "profile.jpeg",
                    name : "ReviewName",
                    comment : "This is good product"},
                   {pic : "profile.jpeg",
                    name : "ReviewerName",
                    comment : "This is not a great product"}];
    const reviewsList = reviews.map((review,index) =>
            <ul key={index} className="flex-container">
                <div className="review-img">
                    <li>
                        <img src={review.pic} alt="profile"/>
                    </li>
                </div>
                <div className="review-content">
                    <li>{review.name}</li>
                    <li>{review.comment}</li>
                </div>
            </ul>);
    return(
        <div>
            <h2>Reviews</h2>
            {reviewsList}
        </div>
    );
}