var vg_4 = "js/donut.vg.json";
vegaEmbed("#vg_4", vg_4, { "actions": false }).then(function (result) { }).catch(console.error);

var vg_3 = "js/annual.vg.json";
vegaEmbed("#vg_3", vg_3, { "actions": false }).then(function (result) { }).catch(console.error);

var vg_2 = "js/station_patronage.vg.json";
vegaEmbed("#vg_2", vg_2, { "actions": false }).then(function (result) {
    var view = result.view;
    var lines = [
        'Alamein',
        'Belgrave',
        'City Loop',
        'Craigieburn',
        'Cranbourne',
        'Frankston',
        'Glen Waverley',
        'Hurstbridge',
        'Lilydale',
        'Mernda',
        'Pakenham',
        'Sandringham',
        'Sunbury',
        'Upfield',
        'Werribee',
        'Williamstown'
    ];

    // Bind checkboxes to Vega-Lite parameters
    lines.forEach(function (line) {
        var paramName = 'line2_' + line.replace(/\s+/g, '_');
        var checkbox = document.getElementById(paramName);
        checkbox.addEventListener('change', function () {
            view.signal(paramName, checkbox.checked).run();
        });
    });
}).catch(console.error);
 
var vg_1 = "js/bar.vg.json";
vegaEmbed("#vg_1", vg_1, { "actions": false }).then(function (result) {
    var view = result.view;
    var lines = [
        'Alamein',
        'Belgrave',
        'City Loop',
        'Craigieburn',
        'Cranbourne',
        'Frankston',
        'Glen Waverley',
        'Hurstbridge',
        'Lilydale',
        'Mernda',
        'Pakenham',
        'Sandringham',
        'Sunbury',
        'Upfield',
        'Werribee',
        'Williamstown'
    ];

    // Bind checkboxes to Vega-Lite parameters
    lines.forEach(function (line) {
        var paramName = 'line_' + line.replace(/\s+/g, '_');
        var checkbox = document.getElementById(paramName);
        checkbox.addEventListener('change', function () {
            view.signal(paramName, checkbox.checked).run();
        });
    });
}).catch(console.error);

