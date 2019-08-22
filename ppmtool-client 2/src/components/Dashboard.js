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
  componentDidUpdate() {}
  //dyal componentDidUpdate

  setText = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    if (
      this.state.motif &&
      this.state.numero_compte.length === 0 &&
      this.state.statut.length === 0 &&
      this.state.date_debut.length === 0 &&
      this.state.date_fin.length === 0
    ) {
      this.props.fetchDemandeByMotif(this.state.motif);
    }

    if (
      this.state.numero_compte &&
      this.state.motif.length === 0 &&
      this.state.statut.length === 0 &&
      this.state.date_debut.length === 0 &&
      this.state.date_fin.length === 0
    ) {
      this.props.fetchDemandeByNumeroCompte(this.state.numero_compte);
    }
    if (
      this.state.date_debut.length === 0 &&
      this.state.date_fin.length === 0 &&
      this.state.motif.length === 0 &&
      this.state.statut &&
      this.state.numero_compte.length === 0
    ) {
      this.props.fetchDemandesByStatut(this.state.statut);
    }
    if (
      this.state.date_debut &&
      this.state.date_fin &&
      this.state.motif.length === 0 &&
      this.state.statut.length === 0 &&
      this.state.numero_compte.length === 0
    ) {
      this.props.fetchDemandesByDateCreation(
        this.state.date_debut,
        this.state.date_fin
      );
    }
    if (
      this.state.motif &&
      this.state.numero_compte &&
      this.state.date_debut.length === 0 &&
      this.state.date_fin.length === 0 &&
      this.state.statut.length === 0
    ) {
      this.props.fetchDemandesByNumeroCompteAndMotif(
        this.state.numero_compte,
        this.state.motif
      );
    }
    if (
      this.state.motif &&
      this.state.statut &&
      this.state.numero_compte.length === 0 &&
      this.state.date_debut.length === 0 &&
      this.state.date_fin.length === 0
    ) {
      this.props.fetchDemandesByMotifAndStatut(
        this.state.motif,
        this.state.statut
      );
    }
    if (
      this.state.motif &&
      this.state.date_debut &&
      this.state.date_fin &&
      this.state.statut.length === 0 &&
      this.state.numero_compte.length === 0
    ) {
      this.props.fetchDemandesByMotifAndDateCreation(
        this.state.motif,
        this.state.date_debut,
        this.state.date_fin
      );
    }
    if (
      this.state.numero_compte &&
      this.state.statut &&
      this.state.date_debut.length === 0 &&
      this.state.date_fin.length === 0 &&
      this.state.motif.length === 0
    ) {
      this.props.fetchDemandesByCompteAndStatut(
        this.state.numero_compte,
        this.state.statut
      );
    }
    if (
      this.state.statut &&
      this.state.date_debut &&
      this.state.date_fin &&
      this.state.motif.length === 0 &&
      this.state.numero_compte.length === 0
    ) {
      this.props.fetchDemandesByStatutAndDateCreation(
        this.state.statut,
        this.state.date_debut,
        this.state.date_fin
      );
    }
    if (
      this.state.numero_compte &&
      this.state.date_debut &&
      this.state.date_fin &&
      this.state.statut.length === 0 &&
      this.state.motif.length === 0
    ) {
      this.props.fetchDemandesByCompteAndDateCreation(
        this.state.numero_compte,
        this.state.date_debut,
        this.state.date_fin
      );
    }
    if (
      this.state.numero_compte &&
      this.state.date_debut.length === 0 &&
      this.state.date_fin.length === 0 &&
      this.state.statut &&
      this.state.motif
    ) {
      this.props.fetchDemandesByCompteAndMotifAndStatut(
        this.state.numero_compte,
        this.state.motif,
        this.state.statut
      );
    }
    if (
      this.state.numero_compte.length === 0 &&
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
    }
    if (
      this.state.numero_compte &&
      this.state.date_debut &&
      this.state.date_fin &&
      this.state.statut.length === 0 &&
      this.state.motif
    ) {
      this.props.fetchDemandesByCompteMotifAndDateCreation(
        this.state.numero_compte,
        this.state.motif,
        this.state.date_debut,
        this.state.date_fin
      );
    }
    if (
      this.state.numero_compte &&
      this.state.date_debut &&
      this.state.date_fin &&
      this.state.statut &&
      this.state.motif.length === 0
    ) {
      this.props.fetchDemandesByCompteStatutAndDateCreation(
        this.state.numero_compte,
        this.state.statut,
        this.state.date_debut,
        this.state.date_fin
      );
    }
    if (
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
    }

    if (
      this.state.motif.length === 0 &&
      this.state.numero_compte.length === 0 &&
      this.state.date_debut.length === 0 &&
      this.state.date_fin.length === 0 &&
      this.state.statut.length === 0
    ) {
      this.props.getProjects();
    }
  };

  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props.project;
    return (
      <div className="container">
        <h1 className="alert">
          <div className="alert alert-primary" role="alert">
            welcome to the dashboard !
          </div>
        </h1>
        <CreateProjectButton />

        <div>
          <div>
            <h2 className="lead mt-4">
              <div className="alert alert-primary" role="alert">
                liste des demandes
              </div>
            </h2>
            <hr className="my-4" />
            <form className="form-inline m-4">
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
                  <input
                    className="form-control"
                    type="text"
                    name="statut"
                    placeholder="statut"
                    value={this.state.statut}
                    onChange={this.setText}
                  />
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
                </div>
              </div>
            </form>
          </div>

          <table className="table table-hover">
            <thead className="table-primary">
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
