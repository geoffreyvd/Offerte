<form class="form-signin">
    <h2 class="form-signin-heading">Voer wachtwoord in</h2>
    <br>
    <input type="password" ng-model="paswoord" class="form-control" placeholder="Wachtwoord">
    <br>
    <button class="btn  btn-primary btn-block" ng-click="checkPass(paswoord);" type="submit">Log in</button>
</form>