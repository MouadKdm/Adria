import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteDemande } from "../../actions/projectActions";

class Project extends Component {
  onDeleteClick = numero => {
    this.props.deleteDemande(numero);
  };

  render() {
    const demande = this.props.project;
    return (
      <tr>
        <td>{demande.compte.numero_compte}</td>
        <td>{demande.motif}</td>
        <td>{demande.date_execution}</td>
        <td>{demande.statut}</td>
        <td>
          <Link to={`/updateProject/${demande.numero}`} className="btn">
            update
          </Link>
          <li onClick={this.onDeleteClick.bind(this, demande.numero)}>
            <i>delete</i>
          </li>
        </td>
      </tr>
    );
  }
}
Project.propTypes = {
  deleteDemande: PropTypes.func.isRequired
};
export default connect(
  null,
  { deleteDemande }
)(Project);
