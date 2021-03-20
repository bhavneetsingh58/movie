import React, { useState, useEffect } from "react";
import axios from "axios";
import {Row,CardDeck} from "reactstrap";
import CustomCard from "./CustomCard";
// import { configure, getLogger } from "log4js";
function Result(props) {
  
  // configure({
  // appenders: { cheese: { type: "file", filename: "../../logs/Logs/logs.log" } },
  // categories: { default: { appenders: ["fileAppender"], level: "error" } }
  // });
  // const logger = getLogger();

  const [movieData, setMovieData] = useState([]);


  useEffect(() => {
    getData();
  });

  const getData = () => {
    axios.post("http://www.omdbapi.com/?s="+props.SearchInput+"&apikey=236d17fe").then(
      (response) => {
        console.log(response.data.Search);
        // logger.level="info";
        // logger.info(response.data);
        setMovieData(response.data.Search);
      },
      (error) => {
        console.log(error);
        // logger.level="error";
        // logger.error(error);
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
