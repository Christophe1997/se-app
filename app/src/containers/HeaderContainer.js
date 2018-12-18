import { connect } from 'react-redux'
import Header from '../components/Header'
import {toggleHeader} from "../actions";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  isOpen: state.isOpen
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...ownProps,
  toggle: () => dispatch(toggleHeader)
});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer