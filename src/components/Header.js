import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="/properties">Danh sách Bất động sản</Link></li>
          <li><Link to="/customers">Khách hàng</Link></li>
          <li><Link to="/staffs">Nhân viên</Link></li>
          <li><Link to="/notifications">Thông báo</Link></li>
          <li><Link to="/statistics">Thống kê</Link></li>
          <li><Link to="/login">Đăng nhập</Link></li>
          <li><Link to="/register">Đăng ký</Link></li>
          <li><Link to="/add-property">Đăng tin</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
