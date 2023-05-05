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

                console.log("response data : ", response);
                console.log("Data is : ", data);
                if (data) {
                    setdata(data);
                }
                else {
                    fetchData();
                }

            } catch (error) {
                console.log(error);

            }
        }
        fetchData();
    }, [API_URL]);

    return (
        <div className="App  home">
            <h3 style={{ color: "blue", textAlign: "center" }}>Movies List</h3>
            <div className='box' >
                {
                    data.map((e, index) => {
                        let { show: { image } } = e;
                        console.log("Name is ", e.show.name);
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
                                            Language : {e.show.language || 3} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            Rating : {e.show.rating.average}
                                        </p>

                                        <Link to="/ticketbook" state={{
                                            moviesData: {
                                                Title: e.show.name,
                                                Poster: movieImg.original,
                                                Language: e.show.language
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