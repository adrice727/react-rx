
import api from './Api';

var login = {
  j_username: 'adrice727@gmail.com',
  j_password: 'password'
};

// var data = new FormData(login);
export default login = () => {
  api.post('login/S1xjmb5x0eoqivSzs210iuytlfj', { data: login }).then(function (r) {
    return console.log('login response!!!!', r);
  });
}
