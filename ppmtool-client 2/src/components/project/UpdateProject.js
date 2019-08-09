import React, { Component } from "react";
import { connect } from "react-redux";
import { getDemandeByMotif } from "../../actions/projectActions";
import PropTypes from "prop-types";
// import classnames from "classnames";

class UpdateProject extends Component {
  componentDidMount() {
    const { numero } = this.props.match.params;
    this.props.getDemandeByMotif(numero, this.props.history);
  }
  render() {
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
    return (
      <div>
        <div className="container">
          <h3>Update demande</h3>
          <hr className="mb-4" />
          <form className="mt-5 m-4 p-4">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Numero compte</label>
                <input
                  name="compte"
                  className="form-group col-md-6"
                  disabled
                  value={demande.numero}
                />
              </div>
              <div className="form-group col-md-6">
                <label>date_execution</label>
                <input
                  type="date"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="date_execution"
                  name="date_execution"
                  value={demande.date_execution}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Date Execution</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="statut"
                  name="statut"
                  value={demande.statut}
                />
              </div>
              <div className="form-group col-md-6">
                <label>motif</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  name="motif"
                  value={demande.motif}
                />
              </div>
              <div className="d-flex justify-content-end">
                <button className="btn btn-primary">valider</button>
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
  demande: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  demande: state.project.demande
});

export default connect(
  mapStateToProps,
  { getDemandeByMotif }
)(UpdateProject);
