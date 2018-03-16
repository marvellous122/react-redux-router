import React from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Profile = props => (
  <div>
    <div className="header">
      <div className="back-btn" onClick={() => props.changePage()}>Back</div>
      <h1>Profile</h1>
    </div>
    <h2>{(props.userInfo && props.userInfo.name) ? props.userInfo.name : ""}</h2>
    <p>{(props.userInfo && props.userInfo.location) ? props.userInfo.location : ""}</p>
  </div>
)

const mapStateToProps = state => ({
  userInfo: state.user.userProfile
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/')
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile);