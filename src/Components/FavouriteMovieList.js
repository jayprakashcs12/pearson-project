import React, {useEffect, useState} from "react";
import { Image, Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {MDBIcon} from "mdbreact";
import moment from "moment";
import NavBar from "./NavBar";
import Poster from "../img/hero.png";

function FavouriteMovieList() {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        document.title = "Favourite Movie List";  
    }, []);

    useEffect(() => {
		const usersFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (usersFavourites) {
			setFavourites(usersFavourites);
			console.log(usersFavourites, "my favorites");
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
        console.log(items, "myyyyyy");
	};

    const removeFavouriteUsers = (user) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.id !== user.id
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};
    return (
        <>
            <NavBar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div  className="row details">
                            <div className="col-md-6 ">
                                Favourite Movie List
                            </div>
                        </div>
                        <Table responsive striped bordered hover size="md">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Poster</th>
                                    <th>Popularity</th>
                                    <th>Year</th>
                                    <th colSpan="2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { favourites.map((user, index) => (
                                    <tr key={user.id}>
                                        <td>
                                            {user.title}
                                        </td>
                                        <td>
                                            <Image src={Poster} className="img-rounded" style={{width:"150px"}} alt={user.title} />
                                        </td>
                                        <td>
                                           {user.popularity}
                                        </td>
                                        <td>
                                            {moment(user.release_date).format('MM-DD-YYYY')}
                                        </td>
                                        <td>
                                            <Link className="btn btn-primary mr-2" to={`/user/${user.id}`}>
                                                <MDBIcon far icon="eye" style={{color:"#fff"}}/>
                                            </Link>
                                        </td>
                                        <td>
                                            <div className="btn btn-primary mr-2" style={{marginTop:"0px"}} onClick={() => removeFavouriteUsers(user)}> 
                                                <MDBIcon icon="minus" style={{color:"#fff"}}/>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default FavouriteMovieList