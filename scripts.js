//create new request variable
var request = new XMLHttpRequest();
var city_id_js = city_id;
//Open new connection

request.open('GET', 'https://developers.zomato.com/api/v2.1/cuisines?city_id='+city_id);
request.setRequestHeader('Api-Key', 'd150c843411d21a3a23e0ea967319814');

var data = this.response;
console.log(this.response);