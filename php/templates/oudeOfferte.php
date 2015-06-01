<h1>Oude offertes</h1>
<table class="table table-hover">
    <thead>
        <tr>
            <th class="col-xs-1">
                ID
            </th>
            <th class="col-xs-2">
                naam
            </th>
            <th class="col-xs-6">
                omschrijving
            </th>
            <th class="col-xs-2">
                datum
            </th>
            <th class="col-xs-2">
                bedrijf
            </th>
            <th>
            </th>
            <th>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr ng-repeat="Werkzaamheid in WerkzaamhedenPHP">
            <td>
                {{ Werkzaamheid.ID }}
            </td>
            <td>
                {{ Werkzaamheid.naam }}
            </td>
            <td>
                {{ Werkzaamheid.omschrijving }}
            </td>
            <td>
                {{ Werkzaamheid.datum }}
            </td>
            <td>
                {{ Werkzaamheid.bedrijf }}
            </td>
            <td>
                <button class="btn btn-primary btn-sm" type="button" ng-click="showWerkzaamheden(Werkzaamheid.ID)">
                    <i style="color:white" class="fa fa-search"></i> Bekijk
                </button>
            </td>
            <td>
                <button class="btn btn-danger btn-sm" type="button" ng-click="deleteOfferte(Werkzaamheid.ID)">
                    <i style="color:white" class="fa fa-trash-o"></i>Verwijder
                </button>
            </td>
        </tr>
    </tbody>
</table>
<!-- Modal popup -->
<div id="bevestigOfferteModal" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Bevestiging</h4>
            </div>
            <div class="modal-body">
                <p>Weet u zeker dat u deze offerte wilt verwijderen: {{werkzaamheidID}}</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Sluit</button>
                <button ng-click="deleteOfferte2()" type="submit" class="btn btn-primary" data-dismiss="modal">Verwijder offerte</button>
            </div>
        </div>
    </div>
</div>