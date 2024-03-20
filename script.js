document.addEventListener('DOMContentLoaded', function() {
    const games = document.querySelectorAll('.game');
    games.forEach(function(game) {
    game.addEventListener('mouseenter', function() {
    this.style.borderColor = 'red';
    });
    game.addEventListener('mouseleave', function() {
    this.style.borderColor = 'transparent';
    });
    });
    });
    