import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

const ToDo = ({ text, onBtnClick, id }) => {
  return (
    <li>
      <Link to={{ pathname: `/${id}` }}>{text}</Link>
      <button onClick={onBtnClick}>X</button>
    </li>
  );
};

const mapDispatchProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
};
export default connect(null, mapDispatchProps)(ToDo);
