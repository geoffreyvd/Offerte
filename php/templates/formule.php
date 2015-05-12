<h1>Formule</h1>
<table class="table table-striped table-bordered table-hover noborder">
    <tr>
        <td class=" col-xs-4">Verbruik per m2: </td>
        <td class="text-center col-xs-3">{{ (_result = (((100 / (_stWidth + _vgWidth)) + (100 / (_stLength + _vgWidth))) * ((100 * _vgWidth * _vgDepth) * 1.35) / 1000) * 1.1).toFixed(2) }} kg</td>
        <td class=" col-xs-5">U heeft {{ (resultaat = _result * _surface).toFixed(2) }} kg nodig voor uw project!</td>
    </tr>
    <tr>
        <td class="">Steenbreedte</td>
        <td class="text-right">
            <div class="input-group">
                <input class="form-control" type="number" ng-model="_stWidth" />
                <div class="input-group-addon">cm</div>
            </div>
        </td>
        <td>Geef hier de breedte van de steen op</td>
    </tr>
    <tr>
        <td class="">Steenlengte</td>
        <td class="">
            <div class="input-group">
                <input class="form-control" type="number" ng-model="_stLength" />
                <div class="input-group-addon">cm</div>
            </div>
        </td>
        <td>Geef hier de lengte van de steen op</td>
    </tr>
    <tr>
        <td class="">Voegbreedte</td>
        <td class="text-right">
            <div class="input-group">
                <input class="form-control" type="number" ng-model="_vgWidth" />
                <div class="input-group-addon">cm</div>
            </div>
        </td>
        <td >Geef hier de breedte van de voeg op</td>
    </tr>
    <tr>
        <td class="">Voegdiepte</td>
        <td class="text-right">
            <div class="input-group">
                <input class="form-control" type="number" ng-model="_vgDepth" />
                <div class="input-group-addon">cm</div>
            </div>
        </td>
        <td >Let op! moet minimaal 3 cm zijn</td>
    </tr>
    <tr>
        <td class="">Oppervlakte Project</td>
        <td class="text-right">
            <div class="input-group">
                <input class="form-control" type="number" ng-model="_surface" />
                <div class="input-group-addon">m2</div>
            </div>
        </td>
        <td>Oppervlakte van uw project</td>
    </tr>
</table>