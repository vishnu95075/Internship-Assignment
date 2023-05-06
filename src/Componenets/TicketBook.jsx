import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

const TicketBook = () => {
  const location = useLocation();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const moviesData = location.state?.moviesData;
  let moviePrice = 10;

  const onSubmit = () => {
    if (userName.length === 0 || userEmail.length === 0) {
      console.log("Empty");
    }
    else {
      var user = { 'name': userName, 'email': userEmail };
      localStorage.setItem('user', JSON.stringify(user));
      setUserName("");
      setUserEmail("");
      console.log("name ", userName);
    }

  }

  return (
    <div className='ticket-book-container' >
      <div className="card " style={{ width: "18rem", marginRight: "20px", marginTop: "1em" }}>
        <img src={moviesData.Poster} className="card-img-top" alt={moviesData.Title} style={{ height: "18rem" }} />
        <div className="card-body">
          <h6 className="card-title">{moviesData.Title}</h6>
          <p>Language : {moviesData.Language}
            <br />
            Rating : {0 + (moviesData.Rating)}⭐
          </p>
        </div>
      </div>
      <div className='form'>
        <div className="form-group">
          <h5 className='text-center mt-20'>Purchase {moviesData.Title}  Ticket</h5>
          <label htmlFor="exampleInputName1">Full Name</label>
          <input
            placeholder='Enter full name'
            type="text"
            className="form-control"
            id="exampleInputName1"
            aria-describedby="nameHelp"

            onChange={(e) => {
              setUserName(e.target.value)
            }}
          />
          <small id="nameHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email Address</label>
          <input
            placeholder='Enter email address'
            type="email"

            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"

            onChange={(e) => {
              setUserEmail(e.target.value)
            }}
          />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group text-center">
          <h4 >{moviesData.Title}</h4>
          <h6>Movie Price : {moviePrice}$</h6>
          <button
            className="btn btn-primary text-center m-16"
            onClick={
              onSubmit
            }
          >
            Pay
          </button>
        </div>

      </div>
    </div>
  )
}

export default TicketBook