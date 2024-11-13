import React from 'react';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Chào mừng đến với Trung tâm Môi giới Bất động sản</h1>
      <p>Trang chủ thông báo và các dịch vụ của trung tâm.</p>
      <div className="notifications">
        <h2>Thông báo mới nhất</h2>
        {/* Thông báo có thể lấy từ API hoặc mock */}
        <ul>
          <li>Thông báo 1: Đăng ký để nhận ưu đãi đặc biệt!</li>
          <li>Thông báo 2: Mua nhà trả góp, lãi suất ưu đãi!</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
