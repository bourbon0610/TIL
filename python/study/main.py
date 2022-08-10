from dash import Dash, html, dcc
import plotly.express as px
from data import countries_df
from builders import make_table

print(countries_df.values)

stylesheets=[
    "https://meyerweb.com/eric/tools/css/reset/reset.css",
    "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
]

app = Dash(__name__, external_stylesheets=stylesheets)

app.layout = html.Div(
        style={
            "fontFamily":"Open Sans, sans-serif",
            "minHeight":"100vh",
            "backgroundColor":"black",
            "color":"white"},
        children=[
            html.Header(
                style={"textAlign":"center",
                    "paddingTop":"50px"},
                children=[html.H1("Corona Dashboard",
                                style = {"fontSize":50})],
                ),
            html.Div(
                children=[
                    html.Div(
                        children=[
                            make_table(countries_df)
                            ]
                    )
                ]
            )
            ],
)

map_figure = px.scatter_geo(countries_df)
map_figure.show()


if __name__ == '__main__':
    app.run_server(debug=True)
