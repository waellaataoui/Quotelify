import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fechQuoteOfDay } from "src/state/actions/qot";
import QuoteOfDay from "../QuoteOfDay";

const QuoteOfDayPage = ({ fechQuoteOfDay, history }) => {
  useEffect(() => {
    fechQuoteOfDay();
  }, [fechQuoteOfDay]);
  return (
    <main
      className="content-container center-content"
      style={{ height: "60vh" }}
    >
      <QuoteOfDay history={history}></QuoteOfDay>
    </main>
  );
};
const mapDispatchToProps = (dispatch) => ({
  fechQuoteOfDay: () => dispatch(fechQuoteOfDay())
});

export default connect(
  undefined,
  mapDispatchToProps
)(QuoteOfDayPage);
