import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setdata] = useState([]);
    const API_URL = `https://api.tvmaze.com/search/shows?q=all`;

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();

                if (data) {
                    setdata(data);
                }
                else {
                    fetchData();
                }

            } catch (error) {

            }
        }
        fetchData();
    }, [API_URL]);

    return (
        <div className="App  home">
            <div className='box' >
                {
                    data.map((e, index) => {
                        let { show: { image } } = e;
                        let movieImg = Object.create(null);
                        for (let i in image) {
                            movieImg.key = i;
                            movieImg[movieImg.key] = image[i];
                        }

                        return (
                            <div key={index} className='container ' >
                                <div className="card " style={{ width: "18rem" }}>
                                    <img src={movieImg.original} className="card-img-top" alt={e.Title} style={{ height: "18rem" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{e.show.name}</h5>
                                        <p className="card-text">
                                            Language : {e.show.language || 3}
                                            <br />
                                            Rating : {0 + e.show.rating.average}⭐
                                        </p>

                                        <Link to="/ticketbook" state={{
                                            moviesData: {
                                                Title: e.show.name,
                                                Poster: movieImg.original,
                                                Language: e.show.language,
                                                Rating: e.show.rating.average
                                            }
                                        }} className="btn btn-primary">Book Ticket</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Home