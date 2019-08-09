import React, { Component } from "react";
import { Link } from "react-router-dom";

class CreateUpdateButton extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to={`/updateProject/${project.numero}`} className="btn">
          update
        </Link>
      </React.Fragment>
    );
  }
}
export default CreateUpdateButton;
