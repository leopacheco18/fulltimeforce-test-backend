import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN,
    GITHUB_API: process.env.GITHUB_API,
    GITHUB_OWNER: process.env.GITHUB_OWNER,
    GITHUB_REPO: process.env.GITHUB_REPO,
  };
});
