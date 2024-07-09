/* eslint-disable import/no-webpack-loader-syntax */
import MaterialStylesProvider from '@mui/styles/StylesProvider';
import '!style-loader!css-loader!sass-loader!../../styles/src/lib/index.scss';

export const parameters = {
  backgrounds: {
    default: 'CloudBrink',
    values: [
      {
        name: 'CloudBrink',
        value: 'hsla(214, 50%, 96%, 1);',
      },
      {
        name: 'White',
        value: 'white',
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <MaterialStylesProvider>
      <div
        className="app flat-light"
        style={{
          background: 'transparent',
        }}
      >
        <Story />
      </div>
    </MaterialStylesProvider>
  ),
];
