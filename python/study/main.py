from logging import PlaceHolder
from dash import Dash, html, dcc
import plotly.express as px
from data import countries_df
from data import totals_df, dropdown_options
from builders import make_table
from dash.dependencies import Input, Output

print(countries_df.values)

stylesheets = [
    "https://meyerweb.com/eric/tools/css/reset/reset.css",
    "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
]

app = Dash(__name__, external_stylesheets=stylesheets)

bubble_map = px.scatter_geo(countries_df,
                            locations="Country_Region",
                            locationmode="country names",
                            color="Confirmed",
                            hover_name="Country_Region",
                            hover_data={'Confirmed': ':,', "Recovered": True,
                                        "Deaths": True, "Country_Region": False},
                            size="Confirmed",
                            size_max=40,
                            template="plotly_dark",
                            projection="natural earth",
                            color_continuous_scale=px.colors.sequential.Oryel,
                            title="Confirmed By Country"
                            )

bubble_map.update_layout(
    margin=dict(l=0, r=0, t=50, b=0)
)

bar_graph = px.bar(totals_df,
                   x="condition",
                   y="count",
                   template="plotly_dark",
                   title="Total Global cases",
                   hover_data={"count": ":,"},
                   labels={
                       "conditon": "Condition",
                       "count": "Count",
                       "color": "Condition"
                   },
                   #    color=["Confirmed", "Deaths", "Recovered"]
                   )
bar_graph.update_traces(
    marker_color=["#e74c3c", "#9b59b6", "#1abc9c"]
)

app.layout = html.Div(
    style={
        "fontFamily": "Open Sans, sans-serif",
        "minHeight": "100vh",
        "backgroundColor": "black",
        "color": "white"},
    children=[
        html.Header(
            style={"textAlign": "center",
                   "paddingTop": "50px"},
            children=[html.H1("Corona Dashboard",
                              style={"fontSize": 50})],
        ),
        html.Div(
            style={"display": "grid",
                   "gridTemplateColumns": "repeat(4,1fr)",
                   "gap": 50,
                   },
            children=[html.Div(style={"grid-column": "span 3"}, children=[dcc.Graph(figure=bubble_map)]),
                      html.Div(children=[make_table(countries_df)])
                      ]
        ),
        html.Div(
            style={"display": "grid",
                   "gridTemplateColumns": "repeat(4,1fr)",
                   "gap": 50,
                   },

            children=[html.Div(children=[dcc.Graph(figure=bar_graph)]),
                      html.Div(
                          children=[
                              dcc.Dropdown(id="country",
                                           options=[
                                               {'label': country, 'value': country} for country in dropdown_options
                                           ]),
                              html.H1(id="country-output")
                          ]
            ),
            ]
        ),
    ],
)


@app.callback(
    Output("country-output", "children"),
    [
        Input("country", "value")
    ]
)
def update_hello(value):
    print(value)


if __name__ == '__main__':
    app.run_server(debug=True)
