import ResourceApi from '../resourceApi';
import axiosClient from '../axiosClient';

class Test extends ResourceApi {
  constructor() {
    super('/test');
  }
  list() {
    return axiosClient({
      url: this.uri,
      method: 'GET',
    });
  }
}

export default Test;
