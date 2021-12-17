let nav = document.querySelector("#navbar-custom");

nav.innerHTML = `

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<a class="navbar-brand" href="/">
  <img src="./img/sammatilogo.png" width="150px" loading="lazy"/>
</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav ml-auto">
    <li class="nav-item">
      <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./vote.html">Cast Vote</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./how-it-works.html">Help</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./blockvote-card.html">My Sammati Card</a>
    </li>

  </ul>
</div>
</nav>`;
