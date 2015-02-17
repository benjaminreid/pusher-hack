<?php include 'partials/header.php' ?>

<header class="header  question">
  <input class="question" type="text" placeholder="Enter your question">
  <input type="submit">
</header>

<section class="section  results" data-controller>
  <div class="yes">
    <h2>Yep!</h2>
    <span data-votes="yes">0</span>
  </div>
  <div class="no">
    <h2>Nope!</h2>
    <span data-votes="no">0</span>
  </div>
</section>

<?php include 'partials/footer.php' ?>
