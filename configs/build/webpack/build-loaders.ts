import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';

export function buildLoaders(isDev: boolean): RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module\./,
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.tsx?$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [
              {
                name: 'convertColors',
                params: {
                  currentColor: true,
                },
              },
            ],
          },
        },
      },
    ],
  };

  const imageLoader = {
    test: /\.(png|jpg|jpeg)$/i,
    type: 'asset/resource',
  };

  return [tsLoader, sassLoader, svgLoader, imageLoader];
}
