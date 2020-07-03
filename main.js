
let regions = [];

let username = 'micoleAPI';
let password = 'M9^&yAzHTvVedh4=';

fetch('https://cors-anywhere.herokuapp.com/https://www.micole.net/api/regions/14', {
  method: 'GET',
  mode: 'cors',
  headers: new Headers({
     'Authorization': 'Basic ' + btoa(username + ":" + password),
     'Content-Type': 'application/json; charset=utf-8'
  }),
  credentials: 'omit',
  method: 'GET',
  redirect: 'follow'
})
.then(resp => resp.json())
.then(
  data => {
  regions = data;
})
.catch(function(error) {
  console.log(error);
}); 


const createElements = () => {
  const newList = regions.filter(region => region.name.match(/[aeiou]$/));
  for (let i = 0; i < newList.length; i++) {
    const elementLi = document.createElement('li');
    const elementSpan = document.createElement('section');
    elementSpan.innerHTML = 'Madrid, ' + newList[i].name
    list.appendChild(elementLi);
    elementLi.appendChild(elementSpan);
  }
}


$('#city').click(function(event) {
  $('#list');
  createElements();

});