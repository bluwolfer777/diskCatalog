function loadXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("test").innerHTML = xhttp.responseText;
        }
    }
    xhttp.open("GET", "Asset/catalog.xml", true);
    xhttp.send();
}