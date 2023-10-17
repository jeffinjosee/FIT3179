{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Life Expectancy at Birth by HDI Rank (2021)",
    "width": 500,
    "height": 400,
    "data": {
      "url": "https://raw.githubusercontent.com/jeffinjosee/FIT3179/main/Life_Expectancy_at_Birth1.csv"
    },
    "params": [
      {
        "name": "Continent",
        "bind": {
          "input": "select",
          "options": [null, "Europe", "America", "Africa", "Asia", "Oceania"],
          "labels": [
            "Show All",
            "Europe",
            "America",
            "Africa",
            "Asia",
            "Oceania"
          ],
          "name": "Continent: "
        }
      }
    ],
    "transform": [
      {"filter": "Continent == null || datum.Continent == Continent"}
    ],
    "encoding": {
      "x": {
        "field": "HDI Rank (2021)",
        "axis": {"tickCount": 10},
        "type": "quantitative",
        "scale": {"type": "linear", "domain": [0, 200]}
      },
      "y": {
        "field": "Life Expectancy at Birth (2021)",
        "type": "quantitative",
        "axis": {"tickCount": 6},
        "scale": {"type": "linear", "domain": [40, 100]}
      }
    },
    "layer": [
      {
        "mark": "point",
        "encoding": {
          "color": {
            "field": "Continent",
            "type": "nominal",
            "scale": {
              "domain": ["Europe", "America", "Africa", "Asia", "Oceania"],
              "range": ["#2ca25f", "#984ea3", "#ff7f00", "#e41a1c", "#2c7fb8"]
            }
          },
          "opacity": {"value": 0.6},
          "tooltip": [
            {"field": "Country", "type": "nominal"},
            {"field": "HDI Rank (2021)", "type": "quantitative"},
            {"field": "Life Expectancy at Birth (2021)", "type": "quantitative"},
            {"field": "Continent", "type": "nominal"}
          ]
        }
      },
      {
        "mark": {
          "type": "text",
          "align": "right",
          "baseline": "middle",
          "dx": 15,
          "dy": 10,
          "fontSize": 9,
          "fontStyle": "bold"
        },
        "encoding": {
          "text": {"field": "Country", "type": "nominal"},
          "color": {"value": "black"},
          "opacity": {
            "condition": {
              "test": "datum['Country'] == 'Monaco' || datum['Country'] == 'Somalia'",
              "value": 1
            },
            "value": 0
          },
          "tooltip": [
            {"field": "Country", "type": "nominal"},
            {"field": "HDI Rank (2021)", "type": "quantitative"},
            {"field": "Life Expectancy at Birth (2021)", "type": "quantitative", "format": ".1f"},
            {"field": "Continent", "type": "nominal"}
          ]
        }
      }
    ],
    "config": {}
  }
