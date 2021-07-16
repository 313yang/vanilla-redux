import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

const ToDo = ({ text, onBtnClick, id }) => {
  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={onBtnClick}>X</button>
      </Link>
    </li>
  );
};
const mapStateToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
};
export default connect(null, mapStateToProps)(ToDo);
