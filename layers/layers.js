var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ANTENNESDACCESEV3_1 = new ol.format.GeoJSON();
var features_ANTENNESDACCESEV3_1 = format_ANTENNESDACCESEV3_1.readFeatures(json_ANTENNESDACCESEV3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANTENNESDACCESEV3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANTENNESDACCESEV3_1.addFeatures(features_ANTENNESDACCESEV3_1);
var lyr_ANTENNESDACCESEV3_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ANTENNESDACCESEV3_1, 
                style: style_ANTENNESDACCESEV3_1,
                interactive: true,
                title: '<img src="styles/legend/ANTENNESDACCESEV3_1.png" /> ANTENNES D\'ACCES EV3'
            });
var format_EV3_2 = new ol.format.GeoJSON();
var features_EV3_2 = format_EV3_2.readFeatures(json_EV3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EV3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EV3_2.addFeatures(features_EV3_2);
var lyr_EV3_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EV3_2, 
                style: style_EV3_2,
                interactive: true,
                title: '<img src="styles/legend/EV3_2.png" /> EV3'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ANTENNESDACCESEV3_1.setVisible(true);lyr_EV3_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ANTENNESDACCESEV3_1,lyr_EV3_2];
lyr_ANTENNESDACCESEV3_1.set('fieldAliases', {'EPCI': 'EPCI', 'COMMUNE': 'COMMUNE', 'POLES_DESS': 'POLES_DESS', 'LINEAIRE': 'LINEAIRE', 'REMARQUE': 'REMARQUE', });
lyr_EV3_2.set('fieldAliases', {'id': 'id', });
lyr_ANTENNESDACCESEV3_1.set('fieldImages', {'EPCI': 'TextEdit', 'COMMUNE': 'TextEdit', 'POLES_DESS': 'TextEdit', 'LINEAIRE': 'TextEdit', 'REMARQUE': 'TextEdit', });
lyr_EV3_2.set('fieldImages', {'id': 'TextEdit', });
lyr_ANTENNESDACCESEV3_1.set('fieldLabels', {'EPCI': 'inline label', 'COMMUNE': 'inline label', 'POLES_DESS': 'inline label', 'LINEAIRE': 'inline label', 'REMARQUE': 'no label', });
lyr_EV3_2.set('fieldLabels', {'id': 'no label', });
lyr_EV3_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});