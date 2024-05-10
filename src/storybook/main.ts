/* eslint-disable no-param-reassign */
import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  staticDirs: ['../../public'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
  docs: {
    autodocs: 'tag',
  },
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
  webpackFinal: async (webpackConfig) => {
    webpackConfig.resolve!.modules!.push('../src');

    const imageRule = webpackConfig.module?.rules?.find((rule) => {
      if (!rule || typeof rule === 'string') {
        return false;
      }
      const { test } = rule;

      if (!test || !(test instanceof RegExp)) {
        return false;
      }

      return test.test('.svg');
    });

    if (imageRule && typeof imageRule !== 'string') {
      imageRule.exclude = /\.svg$/;
    }

    webpackConfig.module?.rules?.push({
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
    });

    return webpackConfig;
  },
};

export default config;
