var i,j,k;
var n=prompt("Enter the number of value");
for(i=1;i<=n;i++){
  for(k=1;k<=(n-i);k++){
       document.write("&nbsp");
}
for(j=1;j<=i;j++){
     document.write("*");
}
    document.write("<br>");
}