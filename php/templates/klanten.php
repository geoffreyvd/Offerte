<h1>Klanten</h1>
<table class="table table-hover">
    <thead>
        <tr>
            <th class="col-xs-1">
                ID
            </th>
            <th class="col-xs-3">
                contact
            </th>
            <th class="col-xs-3">
                company
            </th>
            <th class="col-xs-3">
                adres
            </th>
            <th class="col-xs-1">
                postcode
            </th>
            <th class="col-xs-1">
                city
            </th>
            <!--<th class="col-xs-1">
            </th>-->
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
            <!--<td>
                <button class="btn" type="button" ng-click="showWerkzaamheden(Werkzaamheid.ID)">kijk</button>
            </td>-->
        </tr>
    </tbody>
</table>