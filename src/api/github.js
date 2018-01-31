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


export const apiLogin = () => window.open('https://github.com/login/oauth/authorize?state=1234&client_id=Iv1.68985488fd0176d3&redirect_uri=http://localhost:8080/success');

export const apiGetToken = (code) => callGithubApi(null, 'POST', 'login/oauth/access_token', {
  client_id: 'Iv1.68985488fd0176d3',
  client_secret: '53746d0c509a0596114642c1e43faddfacaede8e',
  code,
  redirect_uri: 'http://localhost:8080/loggedin',
  state: '1234',
});

export const apiGetTeams = (token) => callGithubApi(token, 'GET', 'user/teams');
