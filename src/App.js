import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { createUsers, deleteUser } from './actions';
import AddUserForm from './components/AddUserForm';
import UsersList from './components/UsersList';

class App extends Component {
  
  handleCreate = body => {
    const { dispatch } = this.props;
    if (body) {
      dispatch(createUsers(body));
    }
  };

  handleDelete = body => {
    const { dispatch } = this.props;
    if (body) {
      dispatch(deleteUser(body));
    }
  }

  render() {
    const { usersList } = this.props;
    return (
      <Fragment>
        <AddUserForm
          usersList={usersList}
          onHandleCreate={this.handleCreate}
        />
        <UsersList
          usersList={usersList}
          onHandleDelete={this.handleDelete}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  usersList: state.user.usersList
});

export default connect(mapStateToProps)(App);
