import { Typography } from "@mui/material";
import React, { FC, memo } from "react";
import { TDeal, TDealLookup } from "../../../../redux/main/reducer";
import { TData } from "../../../../types/commonTypes";

type TDealInfoProps = {
  deal: TDealLookup | null;
  stores: TData[] | null;
};

const DealInfoComponent: FC<TDealInfoProps> = ({ deal, stores }) => {

    const saving = deal && parseInt(deal.gameInfo.retailPrice) - parseInt(deal.gameInfo.salePrice)

  return (
    <>
      {deal && (
        <>
          <div className="heading">
            <h3>{deal.gameInfo.name}</h3>

            <div
              className="pricing"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                {deal.gameInfo.salePrice ? (
                  <>
                    <span style={{ textDecoration: "line-through" }}>
                      {"$" + deal.gameInfo.retailPrice + "  "}
                    </span>
                    <span style={{ color: "darkcyan" }}>
                      {"$" + deal.gameInfo.salePrice}
                    </span>
                  </>
                ) : (
                  <span>{"$" + deal.gameInfo.retailPrice}</span>
                )}
              </div>
              <div>You save {"$" + saving}</div>
            </div>
          </div>

          <div className="store-tab"><h4>{stores && stores[parseInt(deal.gameInfo.storeID)]}</h4></div>

          <div className="thumb">
            <img src={deal.gameInfo.thumb} />
          </div>
        </>
      )}
    </>
  );
};

export default DealInfoComponent;
