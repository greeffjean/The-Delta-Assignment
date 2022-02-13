import { Alert, CircularProgress } from "@mui/material";
import React, { FC, memo, useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import { requestDealLookup, requestGamesData } from "../../redux/main/actions";
import {
  selectError,
  selectGamesData,
  selectIsLoading,
} from "../../redux/main/selectors";
import { TAppState } from "../../types/appState";
import { TData, TPayloadData } from "../../types/commonTypes";
import GameCard from "../common/gameCard/gameCard";
import HeaderBar from "./components/headerBar";
import "./style/style.scss";
import FilterToolbar from "./components/filterBar";
import { TDeal } from "../../redux/main/reducer";
import { useHistory } from "react-router-dom";

const mapStateToProps = (state: TAppState) => ({
  isLoading: selectIsLoading(state),
  games: selectGamesData(state),
  error: selectError(state),
});

const mapDispatchToProps = { requestGamesData, requestDealLookup };

type TGameProps = {
  isLoading: boolean;
  games: TData[] | null;
  error: any;
  requestGamesData: () => void;
  requestDealLookup: (id: string) => void
};

const AllDealsComponent: FC<TGameProps> = ({
  isLoading,
  games,
  error,
  requestGamesData,
  requestDealLookup
}) => {
  const [search, setSearch] = useState<string>("");
  const [selection, setSelection] = useState<TData[] | null>(null);

  const data: TData[] | null = selection || games;
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    isMounted && !data && requestGamesData();
    return () => {
      isMounted = false;
    };
  }, []);

  const filterByTitle = (t: string) => {
    let result: TData[] = [];
    if (selection && t === "") {
      result = games as TData[];
    } else if (games) {
      games.forEach((i) => {
        const title = i.title as string;
        title.includes(t) && result.push(i);
      });
    }
    setSelection(result);
  };

  const handleFilterResults = (f: string) => {
    let result: TData[] = [];
    if (f === "") {
      result = data as TData[];
    } else if (data) {
      data.forEach((i) => {
        const filterBy = i[f] as string;
        filterBy && result.push(i);
      });
    }

    setSelection(result);
  };

  const handleViewDeal = (id: string) => {
    requestDealLookup(id);
    history.push(`deal/${id}`)
  };


  const gamesList =
    data &&
    data.map((i) => {
      const id = i.dealID as string;
      const title = i.title as string;
      const normalPrice = i.normalPrice as string;
      const salePrice = i.salePrice as string;

      return (
        <GameCard
          id={id}
          key={id}
          size={350}
          title={title}
          description={[normalPrice, salePrice]}
          button={"View More"}
          handleViewDeal={(id: string) => handleViewDeal(id)}
        />
      );
    });

  return (
    <>
      {!isLoading && !error && (
        <>
          <HeaderBar handleTitleChange={(t) => filterByTitle(t)} />
          <FilterToolbar filterResults={(f) => handleFilterResults(f)} />

          {data ? (
            <div className="games-list">{gamesList}</div>
          ) : (
            <Alert severity="info">There are no games available!</Alert>
          )}
          {selection && selection.length < 1 && (
            <Alert severity="info">There are no filter matches here!</Alert>
          )}
        </>
      )}

      {error && (
        <Alert severity="error">This is an error alert — {error}</Alert>
      )}
    </>
  );
};

export default memo(
  connect(mapStateToProps, mapDispatchToProps)(AllDealsComponent)
);

// dealID: "IVj099Jarz6odiHw35jmGZyckpjmQeAmYI0%2BFyn8i1A%3D"
// dealRating: "9.9"
// gameID: "145838"
// internalName: "XCOM2"
// isOnSale: "1"
// lastChange: 1644537572
// metacriticLink: "/game/pc/xcom-2"
// metacriticScore: "88"
// normalPrice: "59.99"
// releaseDate: 1454630400
// salePrice: "3.60"
// savings: "93.999000"
// steamAppID: "268500"
// steamRatingCount: "75498"
// steamRatingPercent: "84"
// steamRatingText: "Very Positive"
// storeID: "1"
// thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/268500/capsule_sm_120.jpg?t=1643925173"
// title: "XCOM 2"
