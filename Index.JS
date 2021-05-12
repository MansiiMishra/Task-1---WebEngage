function myFunction1() {
    var copyText = document.getElementById("myInput1");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }
  function myFunction2() {
    var copyText = document.getElementById("myInput2");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }
  function myFunction3() {
    var copyText = document.getElementById("myInput3");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }
  function myFunction4() {
    var copyText = document.getElementById("myInput4");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }

  var whoops = new Whoops({
    message: "Hello World!",
    type: "warning" // success, danger
});