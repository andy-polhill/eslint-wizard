import netlify from 'netlify-auth-providers';

export class ApiRequestFailedError extends Error {
  constructor(message, code) {
    super(message);
    this.name = 'ApiRequestFailedError';
    this.message = message;
    this.code = code;
  }
}

export const callGithubApi = (token, method, url, body) =>
  fetch(`https://api.github.com/${url}`, {
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`,
      'Accept': 'application/vnd.github.hellcat-preview+json',
    },
    method,
  })
  .then(response => {
    if (response.ok) return response.json();

    return response.json().then(({ errors }) => {
      throw new ApiRequestFailedError(errors);
    });
  });


const authenticator = new netlify({ site_id: 'ab865611-1498-4642-9a59-a265e37248a9' });

export const apiLogin = () => new Promise((resolve, reject) => {
  authenticator.authenticate({ provider: 'github', scope: 'user, gist' }, (error, data) => {
    if (error) reject(error);
    resolve(data);
  });
});

export const apiGetUser = (token) => callGithubApi(token, 'GET', 'user');
export const apiGetTeams = (token) => callGithubApi(token, 'GET', 'user/teams');
export const apiCreateGist = (token) => callGithubApi(token, 'POST', 'gists', {
  'description': 'the description for this gist',
  'public': true,
  'files': {
    'file1.txt': {
      'content': 'String file contents',
    },
  },
});
