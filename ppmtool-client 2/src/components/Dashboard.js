import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  getProjects,
  fetchDemandeByMotif,
  fetchDemandeByNumeroCompte
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
      date_debut: "",
      date_fin: "",
      numero_compte: ""
    };
  }
  componentDidUpdate() {
    console.log("motif : " + this.state.motif);
    this.props.fetchDemandeByMotif(this.state.motif);
    this.props.fetchDemandeByNumeroCompte(this.state.numero_compte);
  }
  setText = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.props.getProjects();
  }
  change() {}

  render() {
    const { projects } = this.props.project;
    return (
      <div className="container">
        <h1 className="alert">welcome to the dashboard ! </h1>
        <CreateProjectButton />

        <div>
          <div>
            <h2 className="lead mt-4">liste des project</h2>
            <hr className="my-4" />
            <form className="form-inline m-4">
              <input
                className="form-control"
                type="text"
                name="motif"
                placeholder="motif"
                onChange={this.setText}
              />
              <input
                className="form-control"
                type="date"
                name="date_debut"
                placeholder="date debut"
                onChange={this.setText}
              />
              <input
                className="form-control"
                type="date"
                name="date_fin"
                placeholder="date fin"
                onChange={this.setText}
              />
              <input
                className="form-control"
                type="text"
                name="numero_compte"
                placeholder="numero compte"
                onChange={this.setText}
              />
            </form>
          </div>

          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">numero de compte</th>
                <th scope="col">motif</th>
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
  fetchDemandeByNumeroCompte: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  project: state.project
});

export default connect(
  mapStateToProps,
  { getProjects, fetchDemandeByMotif, fetchDemandeByNumeroCompte }
)(Dashboard);
