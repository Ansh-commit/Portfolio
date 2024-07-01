<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Arrays</h1>
<h2>The map() Method</h2>

<p>Create a new array by performing a function on each array element:</p>

<p id="demo"></p>

<script>
const numbers1 = [30, 3, 8, 15, 55];
const numbers2 = numbers1.map(myFunction);

document.getElementById("demo").innerHTML = numbers2;

function myFunction(value) {
  return value * 5 ;
}
</script>

</body>
</html>
