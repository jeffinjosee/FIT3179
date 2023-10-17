{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Percentage of Countries by Human Development Groups",
    "width": 400,
    "height": 400,
    "data": {
      "values": [
        {"Human Development Groups": "Low", "Count": 33, "Percentage": "16.9%"},
        {"Human Development Groups": "Medium", "Count": 45, "Percentage": "23.1%"},
        {"Human Development Groups": "High", "Count": 51, "Percentage": "26.2%"},
        {"Human Development Groups": "Very High", "Count": 66, "Percentage": "33.8%"}
      ]
    },
    "mark": "arc",
    "encoding": {
      "theta": {"field": "Count", "type": "quantitative"},
      "color": {
        "field": "Human Development Groups",
        "type": "nominal",
        "scale": {
          "domain": ["Low", "Medium", "High", "Very High"],
          "range": ["#e41a1c", "#ff7f00", "#984ea3", "#2ca25f"]
        }
      },
      "tooltip": [
        {"field": "Human Development Groups", "type": "nominal"},
        {"field": "Count", "type": "quantitative"},
        {"field": "Percentage", "type": "nominal"}
      ]
    },
    "config": {
      "view": {
        "stroke": "transparent"
      }
    }
}
