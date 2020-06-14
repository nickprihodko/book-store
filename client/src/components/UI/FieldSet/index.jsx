import styled from "styled-components";

const FieldSet = styled.fieldset`
  border: 0;
  margin: 0;
  margin-bottom: 15px;
  padding: 0;

  & > legend {
    /* display: flex;
    align-items: center; */
    margin-bottom: 20px;

    font-family: "Oxygen Bold";
    text-transform: uppercase;
    /* text-align: center; */
    color: #1a237e;

    /* &:before,
    &:after {
      content: "";
      height: 2px;
      width: 50px;
      flex-grow: 1;
      background: #1a237e;
    }

    &:before {
      margin-right: 5px;
    }

    &:after {
      margin-left: 5px;
    } */
  }
`;

export default FieldSet;
