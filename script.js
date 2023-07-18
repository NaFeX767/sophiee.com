var yesButton = document.querySelector('.button[href="yes.html"]');
    var noButton = document.querySelector('.button[href="no.html"]');

    yesButton.addEventListener('click', function() {
      window.location.href = 'yeah.html'; // Replace with your custom "yes" page URL
    });

    noButton.addEventListener('click', function() {
      window.location.href = 'custom-no-page.html'; // Replace with your custom "no" page URL
    });