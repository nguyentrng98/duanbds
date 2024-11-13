import React, { useState, useEffect } from 'react';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  // Tải dữ liệu từ dp.json khi component mount
  useEffect(() => {
    // Giả sử dp.json được lưu trong thư mục public
    fetch('/dp.json')
      .then((response) => response.json())  // Chuyển dữ liệu thành đối tượng JSON
      .then((data) => setProperties(data.properties))  // Lưu danh sách bất động sản vào state
      .catch((error) => console.error('Error loading data:', error)); // Bắt lỗi nếu có
  }, []); // useEffect chỉ chạy một lần khi component mount

  return (
    <div className="property-list">
      <h2>Danh sách Bất động sản</h2>
      <ul>
        {properties.map((property) => (
          <li key={property.id} className="property-item">
            <img src={property.image} alt={property.title} className="property-image" />
            <div className="property-title">{property.title}</div>
            <div className="property-description">{property.description}</div>
            <div className="property-location">{property.location}</div>
            <div className="property-price">{property.price.toLocaleString()} VND</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
