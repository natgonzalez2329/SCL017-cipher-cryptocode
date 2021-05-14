const cipher = {
  //...
};

export default cipher;





























//Metodo Encode
/*function codificarEntidad(str) {
  var array = [];
  for (var i=str.length-1;i>=0;i--) {
    array.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
  }
  return array.join('');
}*/


//Metodo Decode
/*function descodificarEntidad(str) {
  return str.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec);
  });
}*/
