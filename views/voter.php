<?php include 'partials/header.php' ?>
<header class="header">
  <h1 class="question" data-question>Awaiting question..</h1>
</header>
<section class="section  voters" data-voters>
  <div class="yes">
    <label class="label">
      <button class="vote-option  button" data-vote="yes">Yep!</button>
      <h3 data-votes="yes">0</h3>
    </label>
    <div class="bar"></div>
  </div>
  <div class="no">
    <label class="label">
      <button class="vote-option  button" data-vote="no">Nope!</button>
      <h3 data-votes="no">0</h3>
    </label>
    <div class="bar"></div>
  </div>
</section>
<?php include 'partials/footer.php' ?>
