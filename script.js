function validateForm() {
  var institution = document.forms["myForm"]["institution"].value;
  var date = document.forms["myForm"]["date"].value;
  var time = document.forms["myForm"]["time"].value;
  var visitors = document.forms["myForm"]["visitors"].value;

  if (institution == "") {
    alert("Institution name must be filled out");
    return false;
  }

  if (date == "") {
    alert("Date must be filled out");
    return false;
  }

  if (time == "") {
    alert("Time must be filled out");
    return false;
  }

  if (visitors == "" || visitors <= 0) {
    alert("Number of visitors must be a positive integer");
    return false;
  }


  generateQRCode(institution, date, time, visitors);
  
  return false;
}

function generateQRCode(institution, date, time, visitors) {
  var qrCodeDiv = document.getElementById("qr-code");
  

  var qrCodeData = "Institution: " + institution + "\n" +
                   "Date: " + date + "\n" +
                   "Time: " + time + "\n" +
                   "Visitors: " + visitors;
                   

  var qrCodeImage = document.createElement("img");
  qrCodeImage.setAttribute("src", "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(qrCodeData));
  
 
  qrCodeDiv.appendChild(qrCodeImage);
}
