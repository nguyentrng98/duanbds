import React, { useState, useEffect } from 'react'; // Chỉ khai báo một lần
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import PropertyList from './components/PropertyList';
import PropertyDetail from './components/PropertyDetail';
import AddProperty from './components/AddProperty';
import CustomerList from './components/CustomerList';
import StaffList from './components/StaffList';
import NotificationList from './components/NotificationList';
import ChangePassword from './components/ChangePassword';
import StatisticsPage from './components/StatisticsPage';
import './styles.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Gọi API hoặc các hành động cần thiết
    axios.get('/api/some-endpoint')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []); // Chạy một lần khi component mount

  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          {data ? (
            <div>Data: {JSON.stringify(data)}</div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <main>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/properties" element={<PropertyList />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
            <Route path="/add-property" element={<AddProperty />} />
            <Route path="/customers" element={<CustomerList />} />
            <Route path="/staffs" element={<StaffList />} />
            <Route path="/notifications" element={<NotificationList />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/statistics" element={<StatisticsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
