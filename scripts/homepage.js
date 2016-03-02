/* Home page change text for each project */
function viewProjectText(event, projectName) {

    // Get all elements with class="tabcontent" and hide them
    var tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
/*  var tablinks;  
    tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tabcontent.length; i++) {
        tablinks[i].classList.remove("active");
    }
    */

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(projectName).style.display = "block";
    //event.currentTarget.classList.add("active");
}
window.onload=function(){
    document.getElementById('home-PropertyManagement').style.display = "block";
}