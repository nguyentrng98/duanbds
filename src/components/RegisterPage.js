import React, { useState } from 'react';
import './RegisterPage.css'; // CSS riêng cho trang đăng ký
import axios from 'axios';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setMessage('Mật khẩu xác nhận không khớp!');
      return;
    }

    try {
      // Gửi yêu cầu POST đến json-server để thêm người dùng mới
      await axios.post('http://localhost:5000/users', {
        email,
        password
      });
      
      setMessage('Đăng ký thành công!');
    } catch (error) {
      setMessage('Có lỗi xảy ra khi đăng ký');
      console.error('Error:', error);
    }
  };

  return (
    <div className="register-page">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Đăng Ký</h2>
        
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Nhập email"
          required
        />
        
        <label>Mật khẩu:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Nhập mật khẩu"
          required
        />
        
        <label>Xác nhận mật khẩu:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Xác nhận mật khẩu"
          required
        />

        <button type="submit">Đăng Ký</button>

        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default RegisterPage;
