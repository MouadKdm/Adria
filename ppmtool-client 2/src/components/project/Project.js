import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteDemande } from "../../actions/projectActions";

class Project extends Component {
  onDeleteClick = numero => {
    this.props.deleteDemande(numero);
  };
  onDetails = numero => {
    this.props.detailsDemande(numero);
    const { demande } = this.props;
  };
  render() {
    const demande = this.props.project;
    return (
      <tr>
        <td>{demande.numero}</td>
        <td>{demande.compte.numeroCompte}</td>
        <td>{demande.motif}</td>
        <td>{demande.dateCreation}</td>
        <td>{demande.date_execution}</td>
        <td>{demande.statut}</td>
        <td>
          <Link to={`/updateProject/${demande.numero}`} className="btn">
            <i className="btn btn-dark"> update</i>
          </Link>
          <li
            className="btn  btn-lg"
            onClick={this.onDeleteClick.bind(this, demande.numero)}
          >
            <i className="btn btn-dark">delete</i>
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
