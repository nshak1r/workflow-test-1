const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "index.js"),
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            sassOptions: {
                                fiber: false
                            }
                        }
                    }
                ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "..", "assets"),
        filename: "main.bundle.js"
    }
}