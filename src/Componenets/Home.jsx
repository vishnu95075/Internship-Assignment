import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setdata] = useState([]);
    const API_URL = `http://www.omdbapi.com/?apikey=3ef9961d&s=titanic`;

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(API_URL);
                const d = await response.json();
                console.log(d);
                console.log(d.Response);
                if (d.Response) {
                    setdata(d.Search);
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
                        return (
                            <div key={index} className='container ' >
                                <div className="card " style={{ width: "18rem" }}>
                                    <img src={e.Poster} className="card-img-top" alt={e.Title} style={{ height: "18rem" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{e.Title}</h5>
                                        <p className="card-text">
                                            Release Year : {e.Year}
                                        </p>
                                        <Link to="/ticketbook" state={{
                                            moviesData: {
                                                Title: e.Title,
                                                Poster: e.Poster
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