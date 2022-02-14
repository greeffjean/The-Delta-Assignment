import { CircularProgress, Container } from "@mui/material";
import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { selectError, selectIsLoading } from "../../redux/main/selectors";
import { selectUserAccess } from "../../redux/user/selectors";
import { TAppState } from "../../types/appState";
import { routesMap } from "../../utils/routes.utils";

type TProps = {
  userAccess: { [key: string]: boolean };
  isLoading: boolean;
  error: any;
};

const mapStatetoProps = (state: TAppState) => ({
  userAccess: selectUserAccess(state),
  isLoading: selectIsLoading(state),
  error: selectError(state)
});

const TheContent: FunctionComponent<TProps> = ({ userAccess, isLoading, error }) => {
  // Map over allowed routes and add to App respectively
  const routes = [];
  for (const [key, value] of Object.entries(userAccess)) {
    value && routes.push(routesMap[key]);
  }

  return (
    <Container maxWidth={"lg"}>
      {routes}
    </Container>
  );
};

export default connect(mapStatetoProps)(TheContent);
