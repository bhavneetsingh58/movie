import React, { useState, useEffect } from "react";
import axios from "axios";
import {Row,CardDeck} from "reactstrap";
import CustomCard from "./CustomCard";
function Result(props) {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.post("http://www.omdbapi.com/?s"+props.SearchInput+"&apikey=236d17fe").then(
      (response) => {
        console.log(response.data.Search);
        setMovieData(response.data.Search);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <Row>
      <div className="content">
        <CardDeck>
        {movieData &&
          movieData.map((Movie) => (
            <CustomCard Title={Movie.Title} Poster={Movie.Poster} ></CustomCard>
          ))}
        </CardDeck>
      </div>
    </Row>
  );
}

export default Result;
