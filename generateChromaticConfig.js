require('dotenv').config();

const fs = require('fs');

const config = {
  projectId: `Project:${process.env.CHROMATIC_PROJECT_ID}`,
  storybookConfigDir: 'src/storybook',
  zip: true,
};

if (!config.projectId) {
  console.error('CHROMATIC_PROJECT_ID is not set in the environment variables.');
  process.exit(1);
}

fs.writeFileSync('chromatic.config.json', JSON.stringify(config, null, 2));
console.log('chromatic.config.json has been generated');
