import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/auth/Login';



// import { Provider } from 'react-redux';
// import { store } from './store';
// import { loadUser } from './actions/auth';
// import { LOGOUT } from './actions/types';
// import setAuthToken from './utils/setAuthToken';

function App() {
  return (
    // <Provider store={store}>
      <BrowserRouter>
        {/* <Navbar /> */}

        {/* <Alert /> */}

        <Routes>
          {/* <Route path='/' element={<Landing />} />
          <Route path='register' element={<Register />} /> */}
          <Route path='login' element={<Login />} />
          {/* <Route path='profiles' element={<Profiles />} />
          <Route path='profile/:id' element={<Profile />} /> */}
          {/* <Route
            path='dashboard'
            element={<PrivateRoute component={Dashboard} />}
          />
          <Route
            path='create-profile'
            element={<PrivateRoute component={ProfileForm} />}
          />
          <Route
            path='edit-profile'
            element={<PrivateRoute component={ProfileForm} />}
          />
          <Route
            path='add-experience'
            element={<PrivateRoute component={AddExperience} />}
          />
          <Route
            path='add-education'
            element={<PrivateRoute component={AddEducation} />}
          />
          <Route path='posts' element={<PrivateRoute component={Posts} />} />
          <Route path='posts/:id' element={<PrivateRoute component={Post} />} />
          <Route path='/*' element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    // </Provider>
  );
}

export default App;
