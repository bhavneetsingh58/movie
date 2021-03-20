import React,{useState} from "react";
import Result from "../components/Result";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

function IndexPage() {
    const [searchInput, setSearchInput] = useState("movies")

  const handleChange = e => {
    setSearchInput(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
   setSearchInput(e.target.value)
  }

  return (
    <div style={{ margin: "10px" }}>
      <div style={{ margin: "10px" }}>
        <InputGroup>
          <Input
            type="text"
            name="searchInput"
            id="searchInput"
            placeholder="Enter Movie Name"
            value={searchInput}
            onChange={handleChange}
          />
          <InputGroupAddon addonType="append">
            <Button type="submit" color="success" onSubmit={handleChange}>Search</Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <Result SearchInput={searchInput}> </Result>
    </div>
  );
}

export default IndexPage;
