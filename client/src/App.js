import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddCars from './adminPages/addCar/AddCars';
import Admin from './adminPages/admin/Admin';
import AllCars from './adminPages/allCars/AllCars';
import DeletedCars from './adminPages/deletedCar/DeletedCars';
import EditeCar from './adminPages/editeCar/EditeCar';
import UpdateSettings from './adminPages/updateSettings/UpdateSettings';
import './App.css';
import Auth from './auth/Auth';
import Filter from './filter/Flter';
import MyNav from './nav/MyNav';
import CarProfile from './pages/carProfile/CarProfile';
import Connect from './pages/connect/Connect';
import Home from './pages/home/Home';
import NoMatch from './pages/noMatch/NoMatch';
import Serche from './pages/serche/Serche';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div className='App'>
      <Router>
        <Filter />
        <MyNav />
        <Toaster />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contactus' element={<Connect />} />
          <Route path='/search/:serche' element={<Serche />} />
          <Route path='/filter/:filter' element={<Serche />} />
          <Route path='/car/:name' element={<CarProfile />} />

          <Route element={<Auth />}>
            <Route path='/admin' element={<Admin />}>
              <Route index element={<AllCars />} />
              <Route path='/admin/Addcars' element={<AddCars />} />
              <Route
                path='/admin/AllCars/EditeCar/:id'
                element={<EditeCar />}
              />
              <Route
                path='/admin/DeletedCars/EditeCar/:id'
                element={<EditeCar />}
              />
              <Route path='/admin/EditeCar/:id' element={<EditeCar />} />
              <Route path='/admin/DeletedCars' element={<DeletedCars />} />
              <Route path='/admin/AllCars' element={<AllCars />} />
              <Route path='/admin/car/:name' element={<CarProfile />} />
              <Route
                path='/admin/UpdateSettings'
                element={<UpdateSettings />}
              />
            </Route>
          </Route>
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
