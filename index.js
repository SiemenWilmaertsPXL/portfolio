function toggleMode(){
    var element=document.body;
    element.classList.toggle("dark");
}
document.addEventListener('DOMContentLoaded', function() {
    var acc = document.getElementsByClassName('accordion_btn');

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function() {
            // Toggle de "active" class op de knop zelf
            this.classList.toggle('active');

            // Zoek de bijbehorende content sectie
            var content = this.nextElementSibling;

            // Controleer of de content al zichtbaar is
            if (content.style.display === "block") {
                // Als de content zichtbaar is, verberg deze
                content.style.display = "none";
            } else {
                // Als de content verborgen is, toon deze
                content.style.display = "block";
            }
        });
    }
});