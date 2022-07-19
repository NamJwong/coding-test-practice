function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  const bridge = [];
  let weightOnBridge = 0;

  const enter = () => {
    weightOnBridge += truck_weights[0];
    bridge.push({ weight: truck_weights[0], time: 1 });
    truck_weights.shift();
  };
  const out = () => {
    weightOnBridge -= bridge[0].weight;
    bridge.shift();
  };
  const passTime = () => {
    time++;
    if (!bridge.length) return;
    bridge.forEach((truck) => {
      truck.time += 1;
    });
  };

  while (truck_weights.length) {
    passTime();
    if (bridge.length && bridge[0].time > bridge_length) out();
    if (
      bridge.length + 1 <= bridge_length &&
      weightOnBridge + truck_weights[0] <= weight
    )
      enter();
  }

  while (bridge.length) {
    passTime();
    if (bridge[0].time > bridge_length) out();
  }

  return time;
}
