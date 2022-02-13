import { Button } from "@mui/material";
import React, { FC } from "react";
import { TDealLookup } from "../../../../redux/main/reducer";
import { TData } from "../../../../types/commonTypes";


type TOtherDealsProps = {
  deal: TDealLookup | null;
  stores: TData[] | null;
  handleViewNewDeal: (id: string) => void
};

const OtherDealsComponent: FC<TOtherDealsProps> = ({ deal, stores, handleViewNewDeal }) => {

  const viewDeal = (id: string) => handleViewNewDeal(id)

  return (
    <>
      <div className="store-tab">
        <h4>Other Deals for this game</h4>
      </div>

      {deal &&
        deal.cheaperStores.map((i: any) => (
          <div key={`b-${i.dealID}`} className="mini-deal-bars">
            <div className="deal-bar-item" >
              <div>
                <p style={{ fontWeight: "bold" }}>
                  {stores && stores[i.storeID]}
                </p>
                {i.salePrice ? (
                  <>
                    <span style={{ textDecoration: "line-through" }}>
                      {"$" + i.retailPrice + "  "}
                    </span>
                    <span style={{ color: "darkcyan" }}>
                      {"$" + i.salePrice}
                    </span>
                  </>
                ) : (
                  <span>{"$" + i.retailPrice}</span>
                )}
              </div>

              <div>
                <Button onClick={() => viewDeal(i.dealID)} variant="outlined" size="small">
                  View More
                </Button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default OtherDealsComponent;

