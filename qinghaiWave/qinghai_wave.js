function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  // 青海波を描く (x, y, x個数, y個数, サイズ, 色1, 色2)
  qinghaiWave(0, 130, 10, 20, 170, "limegreen", "white");
}

function qinghaiWave(ori_x, ori_y, n_x, n_y, max_size, color1, color2) {
  let x = ori_x,
    y = ori_y;
  let size = max_size;
  let colors = [color1, color2];

  for (let ny = 0; ny < n_y; ny++) {
    x = ori_x;
    if (ny % 2 != 0) {
      x = ori_x + max_size / 2;
    }
    for (let i = 0; i < 6; i++) {
      for (let nx = 0; nx < n_x; nx++) {
        // 円を描く (x, y, サイズ, 色)
        drawCircle(
          x + max_size * nx,
          y + (max_size / 4) * ny,
          size - (max_size / 6) * i,
          colors[i % 2]
        );
      }
    }
  }
}

function drawCircle(x, y, size, color) {
  fill(color);
  circle(x, y, size);
}
