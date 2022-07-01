function solution(cacheSize, cities) {
  let answer = 0;
  const cache = [];
  cities = cities.map((city) => city.toUpperCase());

  if (cacheSize === 0) {
    return cities.length * 5;
  }

  for (const city of cities) {
    if (cache.includes(city)) {
      answer++;
      cache.splice(cache.indexOf(city), 1);
    } else {
      answer += 5;
      if (cache.length === cacheSize) cache.shift();
    }
    cache.push(city);
  }
  return answer;
}
