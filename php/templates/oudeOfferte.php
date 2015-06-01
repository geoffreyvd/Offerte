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
            <th class="col-xs-1">
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
                <button class="btn" type="button" ng-click="showWerkzaamheden(Werkzaamheid.ID)">Bekijk</button>
            </td>
        </tr>
    </tbody>
</table>