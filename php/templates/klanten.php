<h1>Klanten</h1>
<table class="table table-hover">
    <thead>
        <tr>
            <th class="col-xs-1">
                ID
            </th>
            <th class="col-xs-2">
                contactnaam
            </th>
            <th class="col-xs-3">
                bedrijfsnaam
            </th>
            <th class="col-xs-3">
                adres
            </th>
            <th class="col-xs-1">
                postcode
            </th>
            <th class="col-xs-2">
                stad
            </th>
            <th ng-if="invoerKlanten" class="col-xs-1">
            </th>
        </tr>
    </thead>
    <tbody>
        <tr ng-repeat="klant in alleKlanten">
            <td>
                {{ klant.clientID }}
            </td>
            <td>
                {{ klant.contact }}
            </td>
            <td>
                {{ klant.company }}
            </td>
            <td>
                {{ klant.address }}
            </td>
            <td>
                {{ klant.zipcode }}
            </td>
            <td>
                {{ klant.city }}
            </td>
            <td ng-if="invoerKlanten">
                <i ng-click="deleteKlant(klant.clientID)" class="fa fa-trash-o"></i>
            </td>
        </tr>
        <tr ng-if="invoerKlanten">
            <td>
                <input class="form-control" type="text" placeholder="A/I" disabled />
            </td>
            <td>
                <input class="form-control" type="text" ng-model="nieuwklant.contactNaam" placeholder="Contact naam" />
            </td>
            <td>
                <input class="form-control" type="text" ng-model="nieuwklant.bedrijfsNaam" placeholder="Bedrijfsnaam" />
            </td>
            <td>
                <input class="form-control" type="text" ng-model="nieuwklant.adres" placeholder="Adres" />
            </td>
            <td>
                <input class="form-control" type="text" ng-model="nieuwklant.postcode" placeholder="Postcode" />
            </td>
            <td>
                <input class="form-control" type="text" ng-model="nieuwklant.stad" placeholder="Stad" />
            </td>
        </tr>
    </tbody>
</table>

<div class="text-center">
    <button class="btn btn-primary" ng-click="addKlant()">Nieuwe/verwijder klant</button>
    <button ng-if="invoerKlanten" class="btn btn-success" ng-click="saveKlant()">Opslaan</button>
</div>

<!-- Modal popup -->
<div id="bevestigModal" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Bevestiging</h4>
            </div>
            <div class="modal-body">
                <p>Weet u zeker dat u deze klant wilt verwijderen: {{klantid}}</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Sluit</button>
                <button ng-click="deleteKlant2()" type="submit" class="btn btn-primary" data-dismiss="modal">Verwijder klant</button>
            </div>
        </div>
    </div>
</div>