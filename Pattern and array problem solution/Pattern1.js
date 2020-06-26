
function iterate() {
  let k = "";
  let i, j;
  const n = document.getElementById("ip").value;
  let num = 65;
  for (i = 0; i < n; i++, num += j, k += "<br/>") {
    for (j = 0; j <= i; j++) {
      k += String.fromCharCode(num + j);
    }
  }
  document.getElementById("pp").innerHTML = k;
}