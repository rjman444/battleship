export function makeShip(length) {
  let positions = [];
  for (var i = 0; i < length; i++) {
    positions[i] = false;
  }

  let Ship = {
    positions,
    hit: function (n) {
      if (n + 1 < positions.length) {
        this.positions[n - 1] = true;
      }
    },
    isSunk: function () {
      this.positions.every(Boolean);
    },
  };

  return Ship;
}

export function createGameboard() {
  let coordinates = [];
  for (var i = 0; i < 10; i++){
    coordinates[i] = ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"]
  }

  let Gameboard = {
    coordinates,
    addShip = function(x, y, length) {
      let newShip = makeShip(length);
      
    }
  }
}


export default makeShip;
