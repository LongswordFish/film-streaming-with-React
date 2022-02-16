import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllItems } from "../../redux/movie/movie.selectors";

import ItemCard from '../../components/item-card/item-card.components';

import "./listing-page.styles.scss";


const ListingPage = () =>{

    const [type, setType] = useState("ALL");
    const items = useSelector(selectAllItems);
    

    return (
        <div className="movie-listing">
            <div className="buttons-wrapper-in-listing">
                <span className="movieListingButton" onClick={() => setType("MOVIE")} >Movies</span>
                <p className="delimter"  > | </p>
                <span className="movieListingButton" onClick={() => setType("TV")}>TVs</span>
                <p className="delimter" > | </p>
                <span className="movieListingButton" onClick={() => setType("ALL")} >All</span>
            </div>

            <div className="listing">

                {
                    (type === "ALL")
                        ? (items.map(item => (
                            <ItemCard key={item.id} item={item} />
                        )))
                        : (
                            (type === "MOVIE")
                                ? ((items.filter(item => item.type === "movie").map(item => (
                                    <ItemCard key={item.id} item={item} />
                                ))))
                                : ((items.filter(item => item.type === "TV").map(item => (
                                    <ItemCard key={item.id} item={item} />
                                ))))

                        )
                }


            </div>

        </div>
    )
}

export default ListingPage;
