
function fetch(url) {
    return new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = function() {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject('Request failed. Status code: ' + xhr.status);
        }
      };
      xhr.onerror = function() {
        reject('Request failed. Network error.');
      };
      xhr.send();
    });
  }

  fetch('https://api.unsplash.com/photos/?client_id=nv6BjyGTad-uvdkE6sSG5CHEz_nx1f52PPioyZF36r8')
  .then(function(response) {
    console.log('Success:', response);
  })
  .catch(function(error) {
    console.error('Error:', error);
  });
