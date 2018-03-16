import React from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getUserInfo
} from '../../modules/user'

const Home = props => (
  <div>
    <div className="header">
      <h1>Home</h1>
    </div>
    {props.users.map((user, index) => {
      return (
        <div
          key={index}
          onClick={() => {
            props.getUserInfo(user);
            props.changePage();
          }}
          className="user-item"
        >
          <span>
            {user}
          </span>
        </div>
      )
    })}
  </div>
)

const mapStateToProps = state => ({
  users: state.user.users,
  userInfo: state.user.userProfile
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getUserInfo,
  changePage: () => push('/profile')
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);