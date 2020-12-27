function GetBookings(){
    let url = 'https://api.sheety.co/28fc25c7e1a149c6134da35538b12cd8/bookingApp/bookings';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
  // Do something with the data
  console.log(json.bookings);
});
}

let getBookingBtn = document.getElementById("getBooking");addEventListener
getBookingBtn.addEventListener("click", function () {
    GetBookings();
});