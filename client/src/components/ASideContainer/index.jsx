import React from "react";
import styled from "styled-components";

import FieldSet from "../UI/FieldSet";
// import Radio from "../UI/Radio";
import Button from "../UI/Button";

// import medianStrip from "../../assets/img/median-strip.png";

const ASideContainer = () => {
  return (
    <ASide>
      <form action="">
        {/* <FieldSet>
          <legend>SORT</legend>
          <ul>
            <ListItem>
              <Radio>PRICE</Radio>
            </ListItem>
            <ListItem>
              <Radio>RATE</Radio>
            </ListItem>
            <ListItem>
              <Radio>TITLE</Radio>
            </ListItem>
          </ul>
        </FieldSet> */}
        <FieldSet>
          <legend>FILTER</legend>
          <ul>
            <li>
              <label>CATEGORY:</label>
            </li>
            <li>
              <label>PRICE:</label>
            </li>
            <li>
              <label>AUTHOR:</label>{" "}
            </li>
            <li>
              <label>RATE:</label>
            </li>
          </ul>
        </FieldSet>
        <Button>Show</Button>
      </form>
    </ASide>
  );
};

// const ListItem = styled.li`
//   position: relative;

//   padding-left: 40px;
//   margin-bottom: 10px;

//   line-height: 24px;

//   cursor: pointer;

//   &:last-child {
//     margin-bottom: 0;
//   }
// `;

const ASide = styled.aside`
  margin-right: 40px;
  /* padding: 10px; */
  

  /* background: url(${""}) no-repeat right center; */
  /* background-size: contain; */
`;

export default ASideContainer;
