function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const isHouse = (position) => position >= s && position <= t;
  console.log(apples.filter((apple) => isHouse(a + apple)).length);
  console.log(oranges.filter((orange) => isHouse(b + orange)).length);
}
