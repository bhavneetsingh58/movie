import React from 'react'
import {
  Col,
  Card,
  CardImg,
  CardHeader,
  CardTitle,
} from "reactstrap";

function CustomCard(props) {
    return (
        <div>
            <Col sm="4" style={{margin:"10px"}}>
              <Card  style={{ width: "200px" ,height:"250px"}}>
                <CardHeader tag="h3" style={{ fontSize:"12px", width: "200px" ,height:"50px" }}>
                  <CardTitle>{props.Title}</CardTitle>
                </CardHeader>
                <CardImg
                  top
                  style={{ width: "198px" ,height:"200px"}}
                  src={props.Poster}
                  alt="Card image cap"
                />
              </Card>
              
            </Col>
        </div>
    )
}

export default CustomCard
