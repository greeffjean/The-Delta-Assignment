import React from "react";
import { Link, Route } from "react-router-dom";

// Enums for Routes
export enum routePaths {
    ALL_DEALS = '/all-deals',
    ALL_STORES = '/all-stores',
    DEAL_DETAIL = '/deal/:dealId'
}

export enum routeTitles {
    ALL_DEALS = 'Deals',
    ALL_STORES = 'Stores',
    DEAL_DETAIL = 'Deal Details'
}

// Lazy Imports
const AllDeals = React.lazy(() => import('../pages/allDealsPage/allDeals'));
const AllStores = React.lazy(() => import('../pages/allStorePage/allStores'));
const DealDetails = React.lazy(() => import('../pages/dealDetailPage/dealDetail'));


// Route map
export const routesMap: { [key: string]: JSX.Element } = {
    allDeals: <Route key={routeTitles.ALL_DEALS} path={routePaths.ALL_DEALS} component={AllDeals} />,
    allStores: <Route key={routeTitles.ALL_STORES} path={routePaths.ALL_STORES} component={AllStores} />,
    dealDetails: <Route key={routeTitles.DEAL_DETAIL} path={routePaths.DEAL_DETAIL} component={DealDetails} />,
}

// Links Map
export const linksMap: { [key: string]: JSX.Element } = {
    allDeals: <Link data-testid="link" key={routeTitles.ALL_DEALS} to={routePaths.ALL_DEALS}>{routeTitles.ALL_DEALS}</Link>,
    allStores: <Link data-testid="link" key={routeTitles.ALL_STORES} to={routePaths.ALL_STORES}>{routeTitles.ALL_STORES}</Link>,
}
    
