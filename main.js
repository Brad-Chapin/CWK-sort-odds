function sortArray(array) {
  let odds = [];
  if (!array) {
    return array;
}
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      odds.push(array[i]);
      array[i] = "x";
  }
}
  odds.sort(function (a,b){
    return (a-b);
});
  for (let k = 0; k <odds.length; k++) {
    let n = array.indexOf("x");
      array[n] = odds[k];
}
return array;
}
