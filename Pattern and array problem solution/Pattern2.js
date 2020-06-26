function iterate() {
  let i, j,k;
  var l = " ";
  const n = document.getElementById("ip").value;
  console.log(n);
  for (i = 1; i <= n; i++) {
    for (j = n-1; j >= i; j--) {
      l += "&nbsp;";
    }
    for (k = i-1; k >= -(i-1); k--) {
      l += (i-Math.abs(k));
    }
    l += "<br/>";
  }
  document.getElementById("pp").innerHTML = l;
}