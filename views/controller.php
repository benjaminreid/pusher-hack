<?php include 'partials/header.php' ?>

<header class="header">
  <form action="" data-controller-send>
    <input data-controller-send-input class="question  field" type="text" placeholder="Enter your question"><!-- white space? get out
 --><input type="submit" class="question  submit">
    <span data-current-question></span>
  </form>
</header>

<section class="section  results" data-controller>
  <div class="yes">
    <div class="content">
      <h2 class="vote-option">Yep!</h2>
      <h3 data-votes="yes">0</h3>
    </div>
    <div class="bar"></div>
  </div>
  <div class="no">
    <div class="content">
      <h2 class="vote-option">Nope!</h2>
      <h3 data-votes="no">0</h3>
    </div>
    <div class="bar"></div>
  </div>
</section>

<?php include 'partials/footer.php' ?>
