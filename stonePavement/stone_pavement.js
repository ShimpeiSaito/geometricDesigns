function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  // 石畳を描く (x, y, x個数, y個数, サイズ, 色1, 色2)
  stonePavement(0, 50, 7, 7, 60, "green", "white");
}

function stonePavement(x, y, n_x, n_y, max_size, color1, color2) {
  let colors = [color1, color2];

  for (let ny = 0; ny < n_y; ny++) {
    for (let nx = 0; nx < n_x; nx++) {
      // 四角を描く (x, y, w, h, サイズ, 色)
      drawRect(
        x + max_size * nx,
        y + max_size * ny,
        max_size,
        max_size,
        colors[(ny + nx) % 2]
      );
    }
  }
}

function drawRect(x, y, w, h, color) {
  fill(color);
  rect(x, y, w, h);
}
