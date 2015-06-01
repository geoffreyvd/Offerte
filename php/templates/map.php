<h1>Map</h1>

<div ng-controller="SearchBoxController">
    <div id="searchBoxParent"></div>
    <div>
        <ui-gmap-google-map center="map.center" zoom="map.zoom" dragging="map.dragging" bounds="map.bounds" events="map.events" options="map.options" pan="true" control="map.control">
            <!--to add as a map control -->
            <ui-gmap-search-box options="searchbox.options" template="searchbox.template" events="searchbox.events" position="searchbox.position" ng-model="searchModel.searchTerm"></ui-gmap-search-box>

            <!--to add to a parent div-->
            <!--<ui-gmap-search-box options="searchbox.options" template="searchbox.template" events="searchbox.events" parentdiv="searchbox.parentdiv"></ui-gmap-search-box>-->


            <ui-gmap-markers idkey="map.idkey" models="map.markers" coords="'self'" icon="'icon'" click="'onClicked'" labelContent="'title'" labelAnchor="22 0" labelClass="marker-labels" fit="true">
                <ui-gmap-windows show="'showWindow'" closeClick="'closeClick'" ng-cloak>
                    <p ng-non-bindable>This is an info window at {{ latitude | number:4 }}, {{ longitude | number:4 }}!</p>

                    <p class="muted">My marker will stay open when the window is popped up!</p>
                </ui-gmap-windows>
            </ui-gmap-markers>
            <ui-gmap-window coords="selected" idkey="selected.place_id" templateurl="selected.templateurl" templateparameter="selected.templateparameter" options="selected.options" closeClick='selected.closeClick()' ng-cloak>

            </ui-gmap-window>


        </ui-gmap-google-map>
    </div>
    <div ng-repeat="marker in map.markers">
        {{marker.name}}  <button class="btn" type="button" ng-click="removeMarker($index)">Verwijder</button>
    </div>
</div>