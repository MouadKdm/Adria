import React, { Component } from "react";
import { connect } from "react-redux";
import { getDemandeByMotif } from "../../actions/projectActions";
import { createProject } from "../../actions/projectActions";
import PropTypes from "prop-types";
// import classnames from "classnames";

class UpdateProject extends Component {
  constructor() {
    super();
    this.state = {
      numero: "",
      motif: "",
      dateCreation: "",
      date_execution: "",
      statut: "",
      compte: {},
      numeroCompte: ""
    };
  }
  componentDidMount() {
    const { numero } = this.props.match.params;
    this.props.getDemandeByMotif(numero, this.props.history);
  }
  componentWillReceiveProps(nextProps) {
    const {
      numero,
      motif,
      dateCreation,
      date_execution,
      statut,
      compte
    } = nextProps.demande;
    const numeroCompte = nextProps.demande.compte.numeroCompte;
    this.setState({
      numero,
      motif,
      dateCreation,
      date_execution,
      statut,
      compte,
      numeroCompte
    });
  }
  setText = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newProject = {};
    Object.assign(newProject, this.state);
    console.log(newProject);
    this.props.createProject(newProject, this.props.history);
  };
  render() {
    console.log(this.state.numeroCompte);
    // let demande = {};
    // let promise = new Promise((resolve, reject) => {
    //   try {
    //     demande = this.props.demande;
    //     const a = demande.compte.numero_compte;
    //     resolve(a);
    //   } finally {
    //     console.log("fukin finaly");
    //   }
    // });
    // promise.then(alert);
    const { demande } = this.props;
    if (!demande) {
      demande = [];
    }
    return (
      <div>
        <div className="container">
          <h3>Update demande</h3>
          <hr className="mb-4" />
          <form className="mt-5 m-4 p-4 border" onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Numero compte</label>
              <input
                name="numero"
                className="form-control"
                disabled
                value={this.state.numeroCompte}
                readOnly
              />

              <div className="form-group ">
                <label>date_execution</label>
                <input
                  type="date"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="date_execution"
                  name="date_execution"
                  value={this.state.date_execution}
                  onChange={this.setText}
                />
              </div>
            </div>
            <div className="form-group">
              <label>statut</label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="statut"
                name="statut"
                value={this.state.statut}
                onChange={this.setText}
              />

              <div className="form-group ">
                <label>motif</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  name="motif"
                  value={this.state.motif}
                  onChange={this.setText}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-dark mt-4">valider</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
UpdateProject.propTypes = {
  getDemandeByMotif: PropTypes.func.isRequired,
  demande: PropTypes.object.isRequired,
  createProject: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  demande: state.project.demande
});

export default connect(
  mapStateToProps,
  { getDemandeByMotif, createProject }
)(UpdateProject);
