import React, {useEffect, useState} from "react";
import { Image, Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {MDBIcon} from "mdbreact";
import moment from "moment";
import NavBar from "./NavBar";
import Poster from "../img/hero.png";

export default function Dashboard() {
    const [users, setUsers] = useState([]);
    const [favourites, setFavourites] = useState([]);

    const getUsers = async () => {
		const url = `https://api.themoviedb.org/3/movie/popular?api_key=3d24c8ac1b74a9dd6960c69640a253e6`;
		const response = await fetch(url);
		const responseJson = await response.json();
        setUsers(responseJson.results);
        console.log(responseJson.results, "jayyyyy")
	};

    useEffect(() => {
        document.title = "Dash-Board";  
        getUsers();
    }, []);

    useEffect(() => {
		const usersFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (usersFavourites) {
			setFavourites(usersFavourites);
		}
	}, []);

    const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
        console.log(items, "myyyyyy");
	};

    const addFavouriteUsers = (user) => {
		const newFavouriteList = [...favourites, user];
		setFavourites(newFavouriteList);
        if(newFavouriteList){
            saveToLocalStorage(newFavouriteList);
            console.log(newFavouriteList, "favorite lists")
        }
	};

    return (
        <React.Fragment>
            <NavBar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12" id="data-right">
                        <div  className="row">
                            <div className="col-md-6 details">
                                Users List
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
                                {users.map((user) => (
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
                                                <MDBIcon far icon="eye" style={{color:"#fff"}} />
                                            </Link>
                                        </td>
                                        <td>
                                            <div className="btn btn-primary mr-2" style={{marginTop:"0px"}} onClick={() => addFavouriteUsers(user)}>
                                                <MDBIcon icon="plus" style={{color:"#fff"}} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table> 
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}