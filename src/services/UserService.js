import axios from 'axios';

const COURSE_API_URL = 'http://localhost:8090/api/v1';
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/user/`;

class UserService {
  // eslint-disable-next-line class-methods-use-this
  async getAllUsers() {
    return axios.get(INSTRUCTOR_API_URL);
  }
}

export default new UserService();
