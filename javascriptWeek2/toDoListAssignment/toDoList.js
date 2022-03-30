document.getElementById("addButton").onclick = function() {
    //First things first, we need our text:
    var text = document.getElementById('exampleFormControlInput1').Value; //.value gets input values

    //Now construct a quick list element
    var listNode = "<li>" + text + "</li>";

    //Now use appendChild and add it to the list!
    document.getElementById("listActual").appendChild(listNode);
}