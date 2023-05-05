var mainContainer = document.getElementById("myData");

fetch('data.json')
.then(function (response) {
    //Retrieve JSON Data
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    //Catch error
    console.log("Error:" + err);
})
function appendData(data) {
for (var i = 0; i < data.length; i++) {
    //append each attribute to display card
    var div = document.createElement("div");
    div.innerHTML = 'Category:' + data[i].category + "<br>" + 'Score:' + data[i].score;
    mainContainer.appendChild(div);
}}