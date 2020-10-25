import { makeShip, createGameboard } from "./index";

test("Ship hits positions correctly", () => {
  let newShip = makeShip(5);
  newShip.hit(3);
  expect(newShip.positions).toEqual([false, false, true, false, false]);
});

test("Ship doesn't hit over its length", () => {
  let newShip = makeShip(5);
  newShip.hit(7);
  expect(newShip.positions).toEqual([false, false, false, false, false]);
});

test("Gameboard places ship in correct coordinates", () => {
  let gb = createGameboard();
  gb.addShip((x = 5), (y = 10), (length = 6));
  expect(gb.coordinates[5][9]).toBe("S");
});
