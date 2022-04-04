import React, {useEffect, useState} from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import Photo from "../img/hero.png";
import {MDBIcon} from "mdbreact";
import NavBar from "./NavBar";

export default function User() {
  const [user, setUser] = useState('');
  const { id } = useParams();
  useEffect(() => {
    getUser();
  }, [id]);

  function getUser () {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3d24c8ac1b74a9dd6960c69640a253e6`)
    .then(res =>{
      console.log(res, "hiiiiiii")
      setUser(res.data);
    })
  }
  console.log("USER", user)
  return (
    <>
    <NavBar/>
    <div className="container">
        <div className="row">
          <div className="col-md-6 details">
            Users List
          </div>
      </div>
      <div className="row">
        <div className="col-md-4" >
          <Image className="rounded" src={Photo} style={{width: "300px"}}  alt={user.title} />
        </div>
        <div className="col-md-8">
          <div>
            <p><b>Name</b> : {user.title}</p>
          </div>
          <div>
            <p><b>Description</b> : {user.overview}</p>
          </div>
          <div>
            <p><b>Popularity</b>	: {user.popularity}</p>
          </div>
          <div>
            <p><b>Rating</b> : {user.vote_average}</p>
          </div>
          <div>
            <p><b>Watched</b> : {user.vote_count}</p>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
