/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const startColor = image[sr][sc];
  // If the starting pixel is already the desired color, no need to fill
  if (startColor === color) return image;
  // Start the fill process
  fill(image, sr, sc, color, image[sr][sc]);
  return image;

  //The fill function does not need to return the image at each step, as the image is passed by reference
  function fill(image, sr, sc, color, startColor) {
    //The boundary checks for rows and columns should occur before checking if the current pixel matches
    if (sr < 0 || sc < 0 || sr >= image.length || sc > image[0].length) return;
    if (image[sr][sc] !== startColor) return;

    image[sr][sc] = color;
    // Recursively fill the neighboring pixels
    fill(image, sr - 1, sc, color, startColor);
    fill(image, sr + 1, sc, color, startColor);
    fill(image, sr, sc - 1, color, startColor);
    fill(image, sr, sc + 1, color, startColor);
  }
};

let image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  sr = 1,
  sc = 1,
  color = 2;

console.log(floodFill(image, sr, sc, color));
