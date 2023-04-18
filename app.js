document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('playButton').addEventListener('click', function() {
    document.getElementById('playButton').style.display = 'none';
    document.getElementById('gameArea').style.display = 'block';
  });

  document.getElementById('backButton').addEventListener('click', function() {
    document.getElementById('gameArea').style.display = 'none';
    document.getElementById('playButton').style.display = 'block';
  });
});
