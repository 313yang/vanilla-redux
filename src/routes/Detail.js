import { connect } from "react-redux";

const Detail = ({ toDo }) => {
  return (
    <h1>
      {toDo?.text} / create at: {toDo?.id}
    </h1>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === +id) };
};

export default connect(mapStateToProps)(Detail);
