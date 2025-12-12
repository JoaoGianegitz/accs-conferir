let count = 1;
document.getElementById("radio1").checked=true;

setInterval(function() {
    nextImage();
}, 2000)
function nextImage () {
    count++;
    if (count>4){
        count=1;
    }
    document.getElementById("radio"+count).checked=true;
}
<script>
    document.getElementById('meuForm').addEventListener('submit', function(e) {
    e.preventDefault(); // impede abrir outra aba

    const formData = new FormData(this);

    fetch("https://formsubmit.co/joao.gianegitz@gmail.com", {
    method: "POST",
    body: formData
})
    .then(() => {
    document.getElementById('status').innerText = "Mensagem enviada com sucesso!";
    document.getElementById('meuForm').reset();
})
    .catch(() => {
    document.getElementById('status').innerText = "Erro ao enviar!";
});
});
</script>