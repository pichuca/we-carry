$(document).ready(function() {
    $('#mobileMenuIcon').on('click', function() {
        $('#mobileMenu .links').toggle(200);
        $('#mobileMenu .links').css('display', 'grid');
        $('#mobileMenuIcon').toggleClass('selected');
    });
    $('#mobileMenu .links a').on('click', function() {
        $('#mobileMenuIcon').click();
    });
});