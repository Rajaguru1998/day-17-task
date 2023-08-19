   // Fetch data from REST Countries API
  fetch('https://restcountries.com/v2/all')
  .then(response => response.json())
  .then(data => {     
    const container = document.getElementById('container');      
    data.forEach(country => {        
      const countryElement = document.createElement('div');        
      
      countryElement.innerHTML = `
      <div class = "row" >
          <div class = "col-lg-4 col-sm-12">
              <div class="card" style="width: 18rem;">
                  <div class="cardrow">
                      <h1 class="card-title Text-center" id="title">${country.name}</h5>
                  </div>
                  <div class="card-body text-center">
                      <img class="card-img-top" src="${country.flags.png}" alt="Card image cap">
                      <p class="card-text">Capital: <spn>${country.capital}</spn></p>
                      <p class="card-text">Region: <spn>${country.region}</spn></p>
                      <p class="card-text">latlng: <spn>${country.latlng}</spn></p>                                                
                      <p class="card-text">Country Code: <spn>${country.cioc}</spn></p>
                      <a href="#" class="btn bg-transparent">Go somewhere</a>
                  </div>
              </div>
          </div>
      </div>       
      `;
      
      // Append the country element to the container
      container.appendChild(countryElement);
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });