import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProject } from "../../actions/projectActions";
import { getAccounts } from "../../actions/ActionComptes";

class AddProject extends Component {
  constructor() {
    super();

    this.state = {
      // a supprimer

      compte: {},
      statut: "enregistre",
      date_execution: "",
      motif: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.errors) {
      this.setState({ errors: nextprops.errors });
    }
  }
  componentDidMount() {
    this.props.getAccounts();
  }

  setText = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.compte);
    const newProject = {
      compte: JSON.parse(this.state.compte),
      statut: this.state.statut,
      date_execution: this.state.date_execution,
      motif: this.state.motif
    };
    // Object.assign(newProject, this.state);
    console.log(newProject);
    this.props.createProject(newProject, this.props.history);
  };

  render() {
    const { accounts } = this.props.account;
    console.log(accounts);
    return (
      <div>
        <div className="container">
          <h3>Creat form</h3>
          <hr className="mb-4" />
          <form className="mt-5 m-4 p-4" onSubmit={this.onSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Numero compte</label>
                <select
                  defaultValue={"-1"}
                  name="compte"
                  className="form-group col-md-6"
                  onChange={this.setText}
                >
                  {accounts.map(account => (
                    <option
                      value={JSON.stringify(account)}
                      key={account.numeroCompte}
                    >
                      {account.numeroCompte}
                    </option>
                  ))}
                  <option value="-1" disabled>
                    test
                  </option>
                </select>
                <p>{this.state.errors.statut}</p>
              </div>
              <div className="form-group col-md-6">
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
                <p>{this.state.errors.date_execution}</p>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>motif</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  name="motif"
                  value={this.state.motif}
                  onChange={this.setText}
                />
                <p>{this.state.errors.motif}</p>
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

AddProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  account: PropTypes.object.isRequired,
  getAccounts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  account: state.account
});

export default connect(
  mapStateToProps,
  { createProject, getAccounts }
)(AddProject);
