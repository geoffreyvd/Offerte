<!-- invoer word niet gezien in het print scherm -->
<div class="hidden-print invoer">
    <h1>Offerte Maken</h1>
    <div class="row">
        <!-- Offerte titel en klant & bedrijf naam -->
        <div class="col-md-4 col-sm-3 form-group">
            <input class="form-control" type="text" ng-model="parentVariables[0].titel" placeholder="Offerte titel" />
        </div>
        <div class="col-md-4 col-sm-4 form-group">
            <select class="form-control" ng-model="selectedKlant" ng-options="klant as klant.company for klant in klanten">
                <option value="" ng-hide="selectedKlant">Bedrijf naam</option>
            </select>
        </div>
        <div class="col-md-3 col-sm-3 form-group">
            <input class="form-control" type="text" ng-model="selectedKlant.contact" placeholder="Contact naam" readonly/>
        </div>
        <div class="col-md-1 col-sm-2 form-group">
            <input class="form-control" type="text" ng-model="selectedKlant.clientID" placeholder="ID" class="text-center" readonly/>
        </div>

        <!--omschrijving -->
        <div class="col-sm-12 form-group">
            <textarea class="form-control" rows="3" ng-model="offerteParent[0].Offerte[0].omschrijving" placeholder="Omschrijving"></textarea>
        </div>

        <!-- werkzaamheden, prijs en delete knop-->
        <div ng-repeat="Werkzaamheid in Werkzaamheden">
            <hr>
            <div class="col-md-9 col-sm-7 form-group">
                <input class="form-control" type="text" ng-model="Werkzaamheid.name" placeholder="Werkzaamheden" />
            </div>
            <div class="col-md-2 col-sm-3 form-group">
                <div class="input-group">
                    <div class="input-group-addon">€</div>
                    <input class="form-control" type="text" ng-model="Werkzaamheid.price" placeholder="Bedrag" />
                </div>
            </div>
            <div class="col-md-1 col-sm-2 form-group">
                <button class="btn" type="button" ng-click="removePerson($index)">Verwijder</button>
            </div>
        </div>


        <button class="btn btn-primary pull-right" ng-click="addPerson()">Nieuw werkzaamheid</button>

        <!-- button group -->
        <div class="text-center">
            <div class="btn-group">
                <a ng-click="bekijkPDF();" class="hidden-print btn btn-default">Bekijk PDF</a>
                <div class="btn-group">
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                        Opslaan als<span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" role="menu">
                        <li>
                            <a ng-click="uploadOfferte();" class="btn">huidige offerte</a>
                        </li>
                        <li>
                            <a ng-click="uploadOfferte();" class="btn">nieuwe offerte</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- uitvoer -->
<div class="uitvoer">
    <img src="libs/images/Minty-Media-2015.png" class="img-responsive" alt="Logo">
    <div class="pull-left">
        <h5>Offerte naam: {{parentVariables[0].titel}} </h5>
        <p>{{date | date:'yyyy-MM-dd'}}</p>
        <br>
    </div>
    <div class="clearfix">
        <div class="pull-right">
            <p></p>
            <p ng-bind="selectedKlant.company"></p>
            <p ng-bind="selectedKlant.contact"></p>
        </div>
    </div>
    <br>
    <p>Omschrijving: {{offerteParent[0].Offerte[0].omschrijving}}</p>
    <br>
    <br>

    <!-- Tabel Werkzaamheden en bedrag -->
    <table class="table table-hover">
        <thead>
            <tr>
                <th class="col-xs-11">
                    Naam van Werkzaamheden
                </th>
                <th class="col-xs-1">
                    Bedrag
                </th>
            </tr>
        </thead>
        <tbody>
            <tr ng-repeat="Werkzaamheid in Werkzaamheden">
                <td class="col-sm-11">
                    {{ Werkzaamheid.name }}
                </td>
                <td class="col-sm-1">
                    €{{ Werkzaamheid.price }}
                </td>
            </tr>
        </tbody>
    </table>
    <div class="clearfix">
        <div class="pull-right">
            <table class="table noborder">
                <tr>
                    <td class="text-right">Subtotaal: </td>
                    <td class="text-right">€{{ getTotal().toFixed(2) }}</td>
                </tr>
                <tr>
                    <td class="text-right">21% BTW: </td>
                    <td class="text-right">€{{ (getTotal() * 0.21).toFixed(2) }}</td>
                </tr>
                <tr>
                    <td class="text-right"><strong>Totaal bedrag: </strong>
                    </td>
                    <td class="text-right"><strong>€{{ (getTotal() * 1.21).toFixed(2) }}</strong>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>
<!-- Modal popup -->
<div id="myModal" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Titel</h4>
            </div>
            <div class="modal-body">
                <p>Vul de titel voor uw PDF in.</p>
                <input class="form-control" type="text" ng-model="nieuweTitel" placeholder="Titel" />
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button ng-click="veranderTitel()" type="submit" class="btn btn-primary" data-dismiss="modal">Save changes</button>
            </div>
        </div>
    </div>
</div>