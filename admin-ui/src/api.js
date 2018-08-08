import { API_URL } from 'constants';

async function request(endpoint, method, body) {
  const options = { method };

  if (['POST', 'PUT'].includes(method)) {
    options.body = JSON.stringify(body);
    options.headers = {
      'Content-Type': 'application/json',
    };
  }

  const response = await fetch(`${API_URL}${endpoint}`, options);

  if (response.status !== 200) {
    throw new Error(response);
  }

  return response.json();
}

function rget(endpoint) {
  return request(endpoint, 'GET');
}

function rpost(endpoint, body) {
  return request(endpoint, 'POST', body);
}

function rput(endpoint, body) {
  return request(endpoint, 'PUT', body);
}

function rdelete(endpoint) {
  return request(endpoint, 'DELETE');
}

export default {
  get: rget, post: rpost, put: rput, delete: rdelete,
};
