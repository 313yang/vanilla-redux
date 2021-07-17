import { connect } from "react-redux";
import { actionCreators } from "../store";

const Detail = ({ toDo, deleteToDo }) => {
  return (
    <>
      <h1>
        {toDo?.text} / create at: {toDo?.id}
      </h1>
      <button onClick={deleteToDo}>DELETE</button>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === +id) };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return {
    deleteToDo: () => {
      dispatch(actionCreators.deleteToDo(+id));
      ownProps.history.goBack();
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
