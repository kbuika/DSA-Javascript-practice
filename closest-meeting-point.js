// Given n people on a square grid, find the point that requires the least total distance covered by all people to meet at that point.

/*
To find the point on a square grid where the total distance covered by all people to meet at that point is minimized, 
you can calculate the median of both the x-coordinates and y-coordinates of all the people. 
The point with the median x-coordinate and the median y-coordinate will minimize the total distance.


In this implementation:

We first extract the x-coordinates and y-coordinates of all the points.
We sort the x-coordinates and y-coordinates to find their medians.
We calculate the median x-coordinate and median y-coordinate.
We iterate through all the points and calculate the total distance of each point to the median point.
We return the sum of all total distances as the minimum total distance for the meeting point.
You can call the minTotalDistance function with the array of points to find the point that requires the least total distance covered by all people to meet at that point.

*/

function minTotalDistance(points) {
  const xCoords = points.map((point) => point[0]);
  const yCoords = points.map((point) => point[1]);

  // Sort the coordinates to find the median
  xCoords.sort((a, b) => a - b);
  yCoords.sort((a, b) => a - b);

  // Calculate the median index
  const medianIndexX = Math.floor(xCoords.length / 2);
  const medianIndexY = Math.floor(yCoords.length / 2);

  // Calculate the median coordinates
  const medianX = xCoords[medianIndexX];
  const medianY = yCoords[medianIndexY];

  // Calculate the total distance
  let totalDistance = 0;
  for (const [x, y] of points) {
    totalDistance += Math.abs(x - medianX) + Math.abs(y - medianY);
  }

  return totalDistance;
}
