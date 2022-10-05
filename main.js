function count(){
    var input = document.getElementById('input').value;
    var split = input.split(" ");
    var n = split.length;
    document.getElementById('ans').innerHTML = "Word Count : "+n ;
}
function reset(){
    document.getElementById('input').value = null;
    document.getElementById('ans').innerHTML = " ";
}