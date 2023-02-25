function getYear() {
    var year = new Date().getFullYear();
    var location = document.getElementById('date');
    
    location.innerHTML = year;
  }
  
  getYear();