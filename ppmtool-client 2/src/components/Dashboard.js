import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  getProjects,
  fetchDemandeByMotif,
  fetchDemandeByNumeroCompte,
  fetchDemandesByDateCreation,
  fetchDemandesByStatut,
  fetchDemandesByNumeroCompteAndMotif,
  fetchDemandesByMotifAndStatut,
  fetchDemandesByMotifAndDateCreation,
  fetchDemandesByCompteAndStatut,
  fetchDemandesByStatutAndDateCreation,
  fetchDemandesByCompteAndDateCreation,
  fetchDemandesByCompteAndMotifAndStatut,
  fetchDemandesByMotifAndStatutAndDateCreation,
  fetchDemandesByCompteMotifAndDateCreation,
  fetchDemandesByCompteStatutAndDateCreation,
  fetchDemandesByAllParams
} from "../actions/projectActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CreateProjectButton from "./project/CreateProjectButton";
import Project from "./project/Project";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      motif: "",
      statut: "",
      date_debut: "",
      date_fin: "",
      numero_compte: ""
    };
  }
  onSubmit = e => {
    e.preventDefault();
    if (
      this.state.motif &&
      this.state.numero_compte === "" &&
      this.state.statut === "" &&
      this.state.date_debut === "" &&
      this.state.date_fin === ""
    ) {
      this.props.fetchDemandeByMotif(this.state.motif);
    } else if (
      this.state.numero_compte &&
      this.state.motif === "" &&
      this.state.statut === "" &&
      this.state.date_debut === "" &&
      this.state.date_fin === ""
    ) {
      this.props.fetchDemandeByNumeroCompte(this.state.numero_compte);
    } else if (
      this.state.date_debut === "" &&
      this.state.date_fin === "" &&
      this.state.motif === "" &&
      this.state.statut &&
      this.state.numero_compte === ""
    ) {
      this.props.fetchDemandesByStatut(this.state.statut);
    } else if (
      this.state.date_debut &&
      this.state.date_fin &&
      this.state.motif === "" &&
      this.state.statut === "" &&
      this.state.numero_compte === ""
    ) {
      this.props.fetchDemandesByDateCreation(
        this.state.date_debut,
        this.state.date_fin
      );
    } else if (
      this.state.motif &&
      this.state.numero_compte &&
      this.state.date_debut === "" &&
      this.state.date_fin === "" &&
      this.state.statut === ""
    ) {
      this.props.fetchDemandesByNumeroCompteAndMotif(
        this.state.numero_compte,
        this.state.motif
      );
    } else if (
      this.state.motif &&
      this.state.statut &&
      this.state.numero_compte === "" &&
      this.state.date_debut === "" &&
      this.state.date_fin === ""
    ) {
      this.props.fetchDemandesByMotifAndStatut(
        this.state.motif,
        this.state.statut
      );
    } else if (
      this.state.motif &&
      this.state.date_debut &&
      this.state.date_fin &&
      this.state.statut === "" &&
      this.state.numero_compte === ""
    ) {
      this.props.fetchDemandesByMotifAndDateCreation(
        this.state.motif,
        this.state.date_debut,
        this.state.date_fin
      );
    } else if (
      this.state.numero_compte &&
      this.state.statut &&
      this.state.date_debut === "" &&
      this.state.date_fin === "" &&
      this.state.motif === ""
    ) {
      this.props.fetchDemandesByCompteAndStatut(
        this.state.numero_compte,
        this.state.statut
      );
    } else if (
      this.state.statut &&
      this.state.date_debut &&
      this.state.date_fin &&
      this.state.motif === "" &&
      this.state.numero_compte === ""
    ) {
      this.props.fetchDemandesByStatutAndDateCreation(
        this.state.statut,
        this.state.date_debut,
        this.state.date_fin
      );
    } else if (
      this.state.numero_compte &&
      this.state.date_debut &&
      this.state.date_fin &&
      this.state.statut === "" &&
      this.state.motif === ""
    ) {
      this.props.fetchDemandesByCompteAndDateCreation(
        this.state.numero_compte,
        this.state.date_debut,
        this.state.date_fin
      );
    } else if (
      this.state.numero_compte &&
      this.state.date_debut === "" &&
      this.state.date_fin === "" &&
      this.state.statut &&
      this.state.motif
    ) {
      this.props.fetchDemandesByCompteAndMotifAndStatut(
        this.state.numero_compte,
        this.state.motif,
        this.state.statut
      );
    } else if (
      this.state.numero_compte === "" &&
      this.state.date_debut &&
      this.state.date_fin &&
      this.state.statut &&
      this.state.motif
    ) {
      this.props.fetchDemandesByMotifAndStatutAndDateCreation(
        this.state.motif,
        this.state.statut,
        this.state.date_debut,
        this.state.date_fin
      );
    } else if (
      this.state.numero_compte &&
      this.state.date_debut &&
      this.state.date_fin &&
      this.state.statut === "" &&
      this.state.motif
    ) {
      this.props.fetchDemandesByCompteMotifAndDateCreation(
        this.state.numero_compte,
        this.state.motif,
        this.state.date_debut,
        this.state.date_fin
      );
    } else if (
      this.state.numero_compte &&
      this.state.date_debut &&
      this.state.date_fin &&
      this.state.statut &&
      this.state.motif === ""
    ) {
      this.props.fetchDemandesByCompteStatutAndDateCreation(
        this.state.numero_compte,
        this.state.statut,
        this.state.date_debut,
        this.state.date_fin
      );
    } else if (
      this.state.numero_compte &&
      this.state.date_debut &&
      this.state.date_fin &&
      this.state.statut &&
      this.state.motif
    ) {
      this.props.fetchDemandesByAllParams(
        this.state.numero_compte,
        this.state.motif,
        this.state.statut,
        this.state.date_debut,
        this.state.date_fin
      );
    } else if (
      this.state.motif === "" &&
      this.state.numero_compte === "" &&
      this.state.date_debut === "" &&
      this.state.date_fin === "" &&
      this.state.statut === ""
    ) {
      this.props.getProjects();
    }
  };

  setText = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);

    console.log(this.state);
  };

  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props.project;
    return (
      <div className="container-fluid">
        <h1 className="alert">
          <div className="alert alert-dark" role="alert">
            Adria Business & Technology
          </div>
        </h1>
        <CreateProjectButton />

        <div>
          <div>
            <h2 className="lead mt-4">
              <div className="alert alert-dark" role="alert">
                liste des demandes
              </div>
            </h2>
            <hr className="my-4" />
            <form className="form-inline m-4" onSubmit={this.onSubmit}>
              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationDefault01">Motif</label>
                  <input
                    className="form-control"
                    type="text"
                    name="motif"
                    placeholder="motif"
                    value={this.state.motif}
                    onChange={this.setText}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationDefault02">Statut</label>
                  <select
                    defaultValue={"-1"}
                    name="statut"
                    onChange={this.setText}
                  >
                    <option value="">choose</option>
                    <option value="enregistre">enregistre</option>
                  </select>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationDefaultUsername">date debut</label>
                  <input
                    className="form-control"
                    type="date"
                    name="date_debut"
                    placeholder="date debut"
                    value={this.state.date_debut}
                    onChange={this.setText}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationDefaultUsername">date fin</label>
                  <input
                    className="form-control"
                    type="date"
                    name="date_fin"
                    placeholder="date fin"
                    value={this.state.date_fin}
                    onChange={this.setText}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationDefaultUsername">
                    Numero de compte
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="numero_compte"
                    placeholder="numero compte"
                    value={this.state.numero_compte}
                    onChange={this.setText}
                  />
                  <button className="btn btn-dark">Search</button>
                </div>
              </div>
            </form>
          </div>

          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">numero de demande</th>
                <th scope="col">numero de compte</th>
                <th scope="col">motif</th>
                <th scope="col">date de creation</th>
                <th scope="col">date d'execution</th>
                <th scope="col">statut</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody className="tables">
              {projects.map(project => (
                <Project key={project.numero} project={project} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired,
  fetchDemandeByMotif: PropTypes.func.isRequired,
  fetchDemandeByNumeroCompte: PropTypes.func.isRequired,
  fetchDemandesByDateCreation: PropTypes.func.isRequired,
  fetchDemandesByNumeroCompteAndMotif: PropTypes.func.isRequired,
  fetchDemandesByMotifAndStatut: PropTypes.func.isRequired,
  fetchDemandesByMotifAndDateCreation: PropTypes.func.isRequired,
  fetchDemandesByCompteAndStatut: PropTypes.func.isRequired,
  fetchDemandesByStatutAndDateCreation: PropTypes.func.isRequired,
  fetchDemandesByCompteAndDateCreation: PropTypes.func.isRequired,
  fetchDemandesByCompteAndMotifAndStatut: PropTypes.func.isRequired,
  fetchDemandesByMotifAndStatutAndDateCreation: PropTypes.func.isRequired,
  fetchDemandesByCompteMotifAndDateCreation: PropTypes.func.isRequired,
  fetchDemandesByCompteStatutAndDateCreation: PropTypes.func.isRequired,
  fetchDemandesByAllParams: PropTypes.func.isRequired,
  fetchDemandesByStatut: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  project: state.project
});

export default connect(
  mapStateToProps,
  {
    getProjects,
    fetchDemandeByMotif,
    fetchDemandeByNumeroCompte,
    fetchDemandesByDateCreation,
    fetchDemandesByNumeroCompteAndMotif,
    fetchDemandesByMotifAndStatut,
    fetchDemandesByMotifAndDateCreation,
    fetchDemandesByCompteAndStatut,
    fetchDemandesByStatutAndDateCreation,
    fetchDemandesByCompteAndDateCreation,
    fetchDemandesByCompteAndMotifAndStatut,
    fetchDemandesByMotifAndStatutAndDateCreation,
    fetchDemandesByCompteMotifAndDateCreation,
    fetchDemandesByCompteStatutAndDateCreation,
    fetchDemandesByAllParams,
    fetchDemandesByStatut
  }
)(Dashboard);
