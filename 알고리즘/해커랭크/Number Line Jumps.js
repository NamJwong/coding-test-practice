function kangaroo(x1, v1, x2, v2) {
  if (v1 <= v2) return 'NO';

  while (x1 < x2) {
    x1 += v1;
    x2 += v2;
    if (x1 === x2) return 'YES';
  }

  return 'NO';
}
