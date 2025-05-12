const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Fetch data from the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Log the result to the browser console
    // You can also display the data in the browser, for example:
    const list = document.createElement('ul');
    data.forEach(post => {
      const listItem = document.createElement('li');
      listItem.textContent = post.title;
      list.appendChild(listItem);
    });
    document.body.appendChild(list); // Append the list to the body
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
