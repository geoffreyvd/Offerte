<!-- invoer word niet gezien in het print scherm -->
<div class="hidden-print invoer">
    <div class="row">
        <div class="col-sm-12 form-group">
            <h1>Offerte Maken</h1>
            <textarea class="form-control" rows="3" ng-model="omschrijving" placeholder="Omschrijving"></textarea>

        </div>
    </div>
    <div class="row" ng-repeat="Werkzaamheid in Werkzaamheden">
        <br>
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
            <button class="btn" type="button" ng-click="removePerson($index)">delete</button>
        </div>
    </div>
    <br>
    <button class="center-block btn btn-primary" ng-click="addPerson()">New Item</button>
</div>
<!-- uitvoer -->
<div class="uitvoer">
    <img src="libs/images/Minty-Media-2015.png" class="img-responsive" alt="Logo">
    <h5>Dit is een offerte van MintyMedia</h5>
    <p></p>
    <br>
    <p>Omschrijving: {{omschrijving}}</p>
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
    <a ng-click="bekijkPDF();" class="hidden-print btn btn-default">Bekijk PDF</a>
    <a ng-click="uploadOfferte();" class="hidden-print btn btn-default">Upload PDF</a>
    <!-- Totaal bedrag -->
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

<div class="visible-print-block" id="footer">
    <div class="container">
        <p class="text-center"><small>Minty Media | Mollerusweg 82 | 2031 BZ Haarlem | 023-2302134 | info@mintymedia.nl.<br> Op alle werkzaamheden van Minty Media gelden de Algemene voorwaarden, deze zijn te raadplegen op www.mintymedia.nl</small>
        </p>
    </div>
</div>