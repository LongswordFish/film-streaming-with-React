import React from "react";
import ItemCard from "../../components/item-card/item-card.components";

import "./homepage.style.scss";

import fakeDB from "./FakeDB";
import { getFeaturedMovies,getFeaturedTVs,getCrimes } from "./fakeDB.utils";

const HomePage = ()=>{

    const featuredMovies = getFeaturedMovies().filter((movie,index)=>index<6);
    const featuredTVs = getFeaturedTVs().filter((movie,index)=>index<6);
    const specialMovies = getCrimes().filter((movie,index)=>index<6);

    return(
        <div className="home-page">
            <div className="featured-movies">
                <h5>Featured Films</h5>
                <div className="row">
                    {
                        featuredMovies.map(movie=>(<ItemCard className="card" key={movie.id} item={movie} />))
                    }
                </div>
            </div>
            <div className="featured-tvs">
                <h5>Featured TVs</h5>
                <div className="row">
                    {
                        featuredTVs.map(movie=>(<ItemCard className="card" key={movie.id} item={movie}/>))
                    }
                </div>
            </div>
            <div className="specials">
                <div className="col-md-2">
                    <div className="card-body">
                        <h4 className="card-title text-uppercase" >all the best crime movies</h4>
                            <p className="card-text"> Get all the best crime movies </p>
                            <p className="card-text"><small className="text-muted">Only $5.99</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;