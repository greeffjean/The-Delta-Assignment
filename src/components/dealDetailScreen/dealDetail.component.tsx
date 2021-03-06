import React, { FC, memo, useEffect } from "react";
import { Grid } from "@mui/material";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { requestDealLookup } from "../../redux/main/actions";
import { TDealLookup } from "../../redux/main/reducer";
import {
  selectError,
  selectIsLoading,
  selectStoresData,
  selectDealLookup,
} from "../../redux/main/selectors";
import { TAppState } from "../../types/appState";
import { TData } from "../../types/commonTypes";
import DealInfoComponent from "./components/dealInfo/dealInfo";
import OtherDealsComponent from "./components/otherDeals/otherDeals";
import "./style/style.scss";

type TDealDetailProps = {
  isLoading: boolean;
  error: any;
  stores: TData[] | null;
  requestDealLookup: (id: string) => void;
  dealLookup: TDealLookup | null;
};

const mapDispatchToProps = { requestDealLookup };

const mapStateToProps = (state: TAppState) => ({
  isLoading: selectIsLoading(state),
  error: selectError(state),
  stores: selectStoresData(state),
  dealLookup: selectDealLookup(state),
});

const DealDetailComponent: FC<TDealDetailProps> = ({
  isLoading,
  error,
  stores,
  dealLookup,
  requestDealLookup,
}) => {

  const history = useHistory();

  useEffect(() => { 
    history.listen(location => {
      if (history.action === 'POP') {
        const id = location.pathname.split("/deal/")
        requestDealLookup(id[1])
      }
    });

  }, [dealLookup])


  const handleViewNewDeal = (id: string) => {
    requestDealLookup(id);
    setTimeout(() => {
      history.push(`/deal/${id}`);
    }, 300);
  };

  return (
    <>
      {!isLoading && (
        <Grid container spacing={2}>
          <Grid item xs={10} md={5} sx={{ margin: 1 }}>
            {dealLookup && (
              <DealInfoComponent deal={dealLookup} stores={stores} />
            )}
          </Grid>
          <Grid item xs={10} md={5} sx={{ margin: 1 }}>
            {dealLookup && (
              <OtherDealsComponent
                handleViewNewDeal={(id: string) => handleViewNewDeal(id)}
                deal={dealLookup}
                stores={stores}
              />
            )}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default memo(
  connect(mapStateToProps, mapDispatchToProps)(DealDetailComponent)
);
