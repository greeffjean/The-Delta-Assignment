import React from "react";
import { render, screen, fireEvent, cleanup, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import AllDealsComponent from "../allDeals.component";
import { rest } from 'msw'
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get('https://www.cheapshark.com/api/*', (req, res, ctx) => {
    return res(
      ctx.json([{
        "internalName": "DEUSEXHUMANREVOLUTIONDIRECTORSCUT",
        "title": "Deus Ex: Human Revolution - Director's Cut",
        "metacriticLink": "/game/pc/deus-ex-human-revolution---directors-cut",
        "dealID": "HhzMJAgQYGZ%2B%2BFPpBG%2BRFcuUQZJO3KXvlnyYYGwGUfU%3D",
        "storeID": "1",
        "gameID": "102249",
        "salePrice": "2.99",
        "normalPrice": "19.99",
        "isOnSale": "1",
        "savings": "85.042521",
        "metacriticScore": "91",
        "steamRatingText": "Very Positive",
        "steamRatingPercent": "92",
        "steamRatingCount": "17993",
        "steamAppID": "238010",
        "releaseDate": 1382400000,
        "lastChange": 1621536418,
        "dealRating": "9.6",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/238010/capsule_sm_120.jpg?t=1619788192"
      }])
    )
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

const history = createMemoryHistory();

test("Component useEffect Hook works correctly and fetches data", async () => {
  render(
    <Router history={history}>
      <Provider store={store}>
      <AllDealsComponent />
      </Provider>
    </Router>
  );

  const list = await waitFor(() => screen.getByRole("gameCard"));
  expect(list).toBeInTheDocument();
  });

