function kangaroo(x1, v1, x2, v2) {
  if (v2 >= v1) return 'NO';

  while (x1 < x2) {
    x1 += v1;
    x2 += v2;
    if (x1 === x2) return 'YES';
  }

  return 'NO';
}
