{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "GDP by Country in 2000",
    "width": 800,
    "height": 400,
    "data": {
      "url": "https://raw.githubusercontent.com/FIT3179/Vega-Lite/main/3_choropleth_map/js/ne_110m_admin_0_countries.topojson",
      "format": {"type": "topojson", "feature": "ne_110m_admin_0_countries"}
    },
    "projection": {"type": "equalEarth"},
    "layer": [
      {
        "transform": [
          {
            "calculate": "'Data is not available in ' + datum.properties.NAME",
            "as": "note"
          }
        ],
        "mark": {"type": "geoshape", "fill": "lightgray", "stroke": "white"},
        "encoding": {"tooltip": {"field": "note"}}
      },
      {
        "data": {
          "url": "https://raw.githubusercontent.com/FIT3179/Vega-Lite/main/7_others/oceans.topojson",
          "format": {"type": "topojson", "feature": "oceans"}
        },
        "mark": {"type": "geoshape", "fill": "skyblue"}
      },
      {
        "data": {
          "url": "https://raw.githubusercontent.com/FIT3179/Vega-Lite/main/2_symbol_map/js/WorldMapWithGraticules.topojson",
          "format": {"type": "topojson", "feature": "ne_110m_graticules_30"}
        },
        "mark": {"type": "geoshape", "fill": null, "stroke": "lightgray"}
      },
      {
        "transform": [
          {
            "lookup": "properties.NAME",
            "from": {
              "data": {
                "url": "https://raw.githubusercontent.com/jeffinjosee/FIT3179/main/GDP%202000.csv"
              },
              "key": "Country",
              "fields": ["Year"]
            }
          },
          {"calculate": "datum.Year+1", "as": "GDP per billion"}
        ],
        "mark": {"type": "geoshape", "stroke": "grey"},
        "encoding": {
          "color": {"field": "GDP per billion", "type": "quantitative", "scale": {"scheme": "greens"}},
          "tooltip": [
            {"field": "properties.NAME", "type": "nominal", "title": "Country"},
            {"field": "GDP per billion", "type": "quantitative"}
          ]
        }
      }
    ],
    "config": {}
  }