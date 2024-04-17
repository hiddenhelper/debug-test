const Domain = 'http://127.0.0.1:8009';

const SSOToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZW1haWwuY29tIiwiaWQiOiJ1c2VyLmlkIiwibmFtZSI6InVzZXIubmFtZSIsImlhdCI6MTcxMzM0NzM1N30.1dwynmopyUISjxwZ8p1sAd7SjDd0WBSHkjj9cwXFI2I';

export function getSSOToken() {
  return SSOToken;
}

export async function get(url, parameters) {
  const params = {
    ...parameters,
    ssoToken: getSSOToken(),
  };
  const paramString =
    '?' +
    Object.keys(params)
      .map((key) => {
        return key + '=' + params[key];
      })
      .join('&');
  const response = await fetch(Domain + url + paramString);
  const body = await response.text();
  return JSON.parse(body);
}
