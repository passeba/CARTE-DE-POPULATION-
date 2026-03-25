var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Communes_Region_Nando2_1 = new ol.format.GeoJSON();
var features_Communes_Region_Nando2_1 = format_Communes_Region_Nando2_1.readFeatures(json_Communes_Region_Nando2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_Region_Nando2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_Region_Nando2_1.addFeatures(features_Communes_Region_Nando2_1);
var lyr_Communes_Region_Nando2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_Region_Nando2_1, 
                style: style_Communes_Region_Nando2_1,
                popuplayertitle: 'Communes_Region_Nando2',
                interactive: true,
    title: 'Communes_Region_Nando2<br />\
    <img src="styles/legend/Communes_Region_Nando2_1_0.png" /> 32 - 100<br />\
    <img src="styles/legend/Communes_Region_Nando2_1_1.png" /> 100 - 168<br />\
    <img src="styles/legend/Communes_Region_Nando2_1_2.png" /> 168 - 236<br />\
    <img src="styles/legend/Communes_Region_Nando2_1_3.png" /> 236 - 304<br />\
    <img src="styles/legend/Communes_Region_Nando2_1_4.png" /> 304 - 371<br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_Communes_Region_Nando2_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Communes_Region_Nando2_1];
lyr_Communes_Region_Nando2_1.set('fieldAliases', {'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'NAME_3': 'NAME_3', 'eff_Effect': 'eff_Effect', 'SUP_KM²': 'SUP_KM²', 'DENSITE': 'DENSITE', });
lyr_Communes_Region_Nando2_1.set('fieldImages', {'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_3': 'TextEdit', 'eff_Effect': 'TextEdit', 'SUP_KM²': 'TextEdit', 'DENSITE': 'TextEdit', });
lyr_Communes_Region_Nando2_1.set('fieldLabels', {'COUNTRY': 'inline label - always visible', 'NAME_1': 'inline label - always visible', 'NAME_3': 'inline label - always visible', 'eff_Effect': 'no label', 'SUP_KM²': 'no label', 'DENSITE': 'inline label - always visible', });
lyr_Communes_Region_Nando2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});