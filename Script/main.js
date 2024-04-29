
function filter(title, artist) {
    search = document.getElementById("search").value.toLowerCase();
    if (title.toLowerCase().indexOf(search) > -1 || artist.toLowerCase().indexOf(search) > -1) {
        return true
    }
    else {
        return false
    }
}


function loadXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            writeXML(xhttp);
        }
    }
    xhttp.open("GET", "Asset/catalog.xml", true);
    xhttp.send();
}

function writeXML(xml) {
    var x, i, xmlDoc, txt;
    xmlDoc = xml.responseXML;
    txt = "<tr><th>Title</th><th>Artist</th><th>Country</th><th>Company</th><th>Price</th><th>Year</th></tr>";
    x = xmlDoc.getElementsByTagName("CD");
    let added = 0;
    for (i = 0; i < x.length; i++) {
        if (filter(x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue, x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue)) {
            txt += "<tr>";
            txt += "<td class='main-table-content'>" + x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue + "</td>";
            txt += "<td class='main-table-content'>" + x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue + "</td>";
            txt += "<td class='main-table-content'>" + x[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue + "</td>";
            txt += "<td class='main-table-content'>" + x[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue + "</td>";
            txt += "<td class='main-table-content'>" + x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue + "</td>";
            txt += "<td class='main-table-content'>" + x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue + "</td>";
            txt += "</tr>";
            added++;
        }
    }
    if (added == 0) {
        document.getElementById("test").innerHTML = "<tr><th>Nothing Found</th></tr>";
    } else {
        document.getElementById("test").innerHTML = txt;
    }
}