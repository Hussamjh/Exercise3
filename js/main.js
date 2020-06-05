function submit() {

    var message = $('input[name=message]:checked').val();
 var urgent = document.getElementById('urgent').checked;
 if(urgent) {
     localStorage.setItem('urgent','Yes');
 }else{
     localStorage.setItem('urgent','No');
 }
 localStorage.setItem('message', message);
}
function displayOutPut(){
    $('#message').text(localStorage.getItem('message'));
    $('#urgent').text(localStorage.getItem('urgent'));
}

$('#send').on('click', function(e){
    e.preventDefault();
    submit();
    window.location.href = 'output.html';
});


