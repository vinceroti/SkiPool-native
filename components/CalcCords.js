export default function CalcCords(points) {
  // points should be an array of { latitude: X, longitude: Y }
  let minX, maxX, minY, maxY;

  // init first point
  minX = points.latitude;
  maxX = points.latitude;
  minY = points.longitude;
  maxY = points.longitude;

  // calculate rect
  minX = Math.min(minX, points.latitude);
  maxX = Math.max(maxX, points.latitude);
  minY = Math.min(minY, points.longitude);
  maxY = Math.max(maxY, points.longitude);

  const midX = (minX + maxX) / 2;
  const midY = (minY + maxY) / 2;
  const deltaX = (maxX - minX);
  const deltaY = (maxY - minY);

  return {
    latitude: midX,
    longitude: midY,
    latitudeDelta: deltaX,
    longitudeDelta: deltaY
  };
}
