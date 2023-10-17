{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": {"text": "Top 10 Countries with Highest Life Expectancy in 2021"},
    "width": 300,
    "height": 300,
    "description": "Life Expectancy in 2021",
    "data": {
      "url": "https://raw.githubusercontent.com/jeffinjosee/FIT3179/main/LifeExpectancy2021.csv",
      "format": {
        "type": "csv"
      }
    },
    "mark": {
      "type": "bar",
      "color": "#31a354"
    },
    "encoding": {
      "x": {
        "field": "Country",
        "type": "nominal",
        "title": "Top 10 Countries"
      },
      "y": {
        "field": "Life Expectancy at Birth (2021)",
        "type": "quantitative",
        "scale": {"domain": [80, 86], "clamp": true}
      },
      "tooltip": [
        {"field": "Country", "title": "Country"},
        {"field": "Life Expectancy at Birth (2021)", "title": "Life Expectancy (2021)"}
      ]
    },
    "transform": [
      {
        "window": [{"op": "rank", "as": "rank"}],
        "sort": [{"field": "Life Expectancy at Birth (2021)", "order": "descending"}]
      },
      {
        "filter": {"field": "rank", "lte": 10}
      }
    ]
  }
