import axiosClient from './axiosClient';

class ResourceApi {
  constructor(uri) {
    this.uri = uri;
  }
  list(query) {
    return axiosClient({
      url: this.uri,
      method: 'GET',
      params: query,
    });
  }
  all() {
    return axiosClient({
      url: `${this.uri}/all`,
      method: 'GET',
    });
  }
  get(id) {
    return axiosClient({
      url: `${this.uri}/edit/${id}`,
      method: 'GET',
    });
  }
  store(resource) {
    return axiosClient({
      url: `${this.uri}/create`,
      method: 'POST',
      data: resource,
    });
  }
  update(resource, id) {
    return axiosClient({
      url: `${this.uri}/edit/${id}`,
      method: 'POST',
      data: resource,
    });
  }
  destroy(id) {
    return axiosClient({
      url: `${this.uri}/delete/${id}`,
      method: 'DELETE',
    });
  }
  destroyMulti(resource) {
    return axiosClient({
      url: `${this.uri}`,
      method: 'DELETE',
      params: resource,
    });
  }
  copy(resource, id) {
    return axiosClient({
      url: `${this.uri}/${id}`,
      method: 'GET',
      data: resource,
    });
  }
}

export default ResourceApi;
