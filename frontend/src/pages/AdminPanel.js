import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest';
import ClientsList from '../components/ClientsList'
import '../styles/Admin.css'
import authProvider from '../components/authProvider';
import { defaultTheme } from 'react-admin';
import { Login } from 'react-admin';
import image from '../assets/background.jpg'


const MyLoginPage = () => (
  <Login
    className='login'
    backgroundImage={image}
  />
);

const AdminPanel = () => {
  const theme = {
    ...defaultTheme,
    ...{
      palette: {
        mode: 'dark',
        primary: {
          main: "#8d7908b9",

        },
        secondary: {
          main: "#0089c1",
        },
      }
    }
  }

  const dataProvider = restProvider('http://localhost:3000');

  dataProvider.getList('contact', {
    pagination: { page: 1, perPage: 10 },
    sort: { field: 'title', order: 'ASC' },
    filter: { author_id: 12 }
  }).then(response => console.log(response));

  return (
    <div className="admin">
      <Admin basename='/admin' theme={theme} authProvider={authProvider} loginPage={MyLoginPage} dataProvider={dataProvider}>
        <Resource name='contact' list={ClientsList} />
      </Admin>
    </div>


  )
}

export default AdminPanel