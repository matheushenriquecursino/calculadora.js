<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<script src="matematica.js";></script>
</body>
</html>
const calculadora =
(function() {
return {
somar; (a,b) => a + b,
subtrair (a,b) => a - b,
multiplicar (a,b) => a * b,
dividir (a,b) => b === 0 ? "erro, nao tem como dividir por 0" : a/b
};
})();
