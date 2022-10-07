
function getBackgroundURL(){
  var settings = {
    "url": "https://api.unsplash.com/photos/random?client_id=X-dmYeqoKxNvyCdcdsg4OJUOYhhhtQXnYMzF6RDfnNI",
    "method": "GET",
    "timeout": 0
  };
  var responseObject;
  $.ajax(settings).done(function (response) {
    responseObject = response;
  });
  if(typeof responseObject != 'undefined'){
    return responseObject.urls.full;
  }
}
