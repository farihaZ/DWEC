import axios from "axios";

const API_BASE_URL = "https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData";

class UserService {
  getUsers() {
    return axios.get(API_BASE_URL);
  }

  createUser(User) {
    return axios.post(API_BASE_URL, User);
  }

  getUserById(id) {
    return axios.get(API_BASE_URL + "/" + id);
  }

  deleteUser(id) {
    return axios.delete(API_BASE_URL + "/" + id);
  }
}
export default new UserService();
