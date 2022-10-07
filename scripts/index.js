$(document).ready(function(){
  getBackground().then(function(response){
    if(typeof response != 'undefined'){
      console.log(response.urls.full);
      $('#godBod').css('background-image', 'url(' + response.urls.full + ')');
    }
  });
});

async function getBackground() {
  var data;
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "ugid=7eccd5f9b75bd50dccdf4a645b0cf7305550298");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  await fetch("https://api.unsplash.com/photos/random?client_id=X-dmYeqoKxNvyCdcdsg4OJUOYhhhtQXnYMzF6RDfnNI", requestOptions)
    .then(response => data = response.json())
    .then(result => data = result)
    .catch(error => console.log('error', error));
  return data;
}
