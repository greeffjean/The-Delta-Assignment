
import React, { FC } from "react";
import { Alert, CircularProgress } from "@mui/material";
import { connect } from "react-redux";
import { selectError, selectIsLoading } from "../../redux/main/selectors";
import { selectUserAccess } from "../../redux/user/selectors";
import { TAppState } from "../../types/appState";
import TheContent from "./theContent";

type TBodyProps = {
  userAccess: { [key: string]: boolean };
  isLoading: boolean;
  error: any;
};

const mapStateToProps = (state: TAppState) => ({
  userAccess: selectUserAccess(state),
  isLoading: selectIsLoading(state),
  error: selectError(state),
});

const Body: FC<TBodyProps> = ({ userAccess, isLoading, error }) => {
  return (
    <>
      {isLoading ? (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: '20px' }}
        >
          <CircularProgress />
        </div>
      ) : (
        <TheContent />
      )}
      {error && (
        <Alert severity="error">This is an error alert — {error}</Alert>
      )}
    </>
  );
};

export default connect(mapStateToProps)(Body);
