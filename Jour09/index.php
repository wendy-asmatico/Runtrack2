<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Maquette Bootstrap - Réalisation</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<?php include_once 'header.php'; ?>

    <main class="py-4" style="background:#e0e0e0;">
  <div class="container">

    <div class="text-center mb-4">
      <h1 class="display-6">LaPlateforme_</h1>
    </div>

    <div class="row g-4">

      <div class="col-12 col-lg-3">
        <div class="card shadow-sm">
          <img src="https://www.sciencesetavenir.fr/assets/img/2025/03/07/cover-r4x3w1200-67caf291c2635-article-26.jpg" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">Un Papillon</h5>
            <p class="card-text">
              Un papillon, c'est un peu comme une chenille, mais avec des ailes.
              Ne pas ingérer.
            </p>
            <button id="buy" class="btn btn-primary w-100">Commander votre propre papillon</button>
          </div>
        </div>
      </div>

      <div class="modal fade" id="confirmModal" tabindex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="confirmModalLabel">Confirmation</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
      </div>
      <div class="modal-body">
        Êtes-vous sûr de vouloir commander ?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
        <button type="button" class="btn btn-danger" id="confirmBtn">Confirmer</button>
      </div>
    </div>
  </div>
</div>

      <div class="col-12 col-lg-6">
        <div class="card shadow-sm p-4">
          <h2>Bonjour, monde!</h2>
          <p class="text-muted">Il existe plusieurs visions du terme :</p>

          <p id="change">Le monde est la matière, l'espace et les phénomènes accessibles par les sens.<br>
          Le sens le plus courant désigne notre planète, la Terre.</p>
          <hr>
          <p>Le sens étendu désigne l'univers dans son ensemble.</p>

          <div class="d-flex align-items-center gap-3">
            <button id="reboot" class="btn btn-danger">Rebooter le Monde</button>
            <div class="spinner-border text-primary"></div>
          </div>

          <div class="mt-4 d-flex justify-content-end">
            <ul class="pagination pagination-sm">
              <li class="page-item"><a class="page-link" href="#">«</a></li>
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">»</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-3">
        <div id="liste" class="list-group shadow-sm">
          <a class="list-group-item active">Limbes</a>
          <a class="list-group-item">Luxure</a>
          <a class="list-group-item">Gourmandise</a>
          <a class="list-group-item">Avarice</a>
          <a class="list-group-item">Colère</a>
          <a class="list-group-item">Hérésie</a>
          <a class="list-group-item">Violence</a>
          <a class="list-group-item">Ruse et Tromperie</a>
          <a class="list-group-item">Trahison</a>
          <a class="list-group-item">Internet Explorer</a>
        </div>
      </div>
    </div>

<div class="mt-5">
  <p class="text-end fw-bold">Installation de AI 9000</p>
  <div class="d-flex align-items-center mx-auto w-75">
    <button id="decrease" class="btn btn-sm me-2">&#8810;</button>

  <div class="progress flex-grow-1">
      <div id="progressBar" class="progress-bar progress-bar-striped progress-bar-animated bg-warning" 
           style="width: 75%"></div>
    </div>

    <button id="increase" class="btn btn-sm ms-2">&#8811;</button>
  </div>
</div>
    </div>

    <div class="row mt-5 g-4 mb-4 mx-auto w-75">
      <div class="col-md-6">
        <h5>Recevez votre copie gratuite d'internet 2 !</h5>
        <input class="form-control mb-2" placeholder="Login">
        <div class="input-group mb-2">
          <input type="password" class="form-control" placeholder="Mot de passe">
          <span class="input-group-text">@example.com</span>
        </div>
        <input class="form-control mb-2" placeholder="DogeCoin">
        <input class="form-control" value="https://133t.lptf/dkwb/berlusconimkt/">
      </div>

      <div class="col-md-6">
        <label>Email address</label>
        <input class="form-control mb-2">
        <label>Password</label>
        <input type="password" class="form-control mb-2">
        <div class="form-check mb-2">
          <input class="form-check-input" type="checkbox">
          <label class="form-check-label">Check me out</label>
        </div>
        <button class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</main>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<script src="script.js"></script>

</body>
</html>
