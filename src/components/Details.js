import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';
import { useLoaderData } from 'react-router-dom';
import { Card, Row, Col } from 'antd';

const Details = () => {
  const { user } = useContext(AuthContext);
  const reading = useLoaderData();

  const getColor = (value) => {
    // Define your color logic based on the sensor reading value
    if (value > 80) return '#ff4d4f'; // Red
    if (value > 60) return '#fa8c16'; // Orange
    if (value > 40) return '#ffec3d'; // Yellow
    return '#52c41a'; // Green
  };

  return (
    <div>
      <h2>
        Hi, <span className='text-xl italic font-semibold'>{user?.email}</span>
      </h2>
      <h5 className='text-xl italic font-semibold'>
        Here is your date:{' '}
        <span className='text-2xl font-semibold'>{reading.timestamp}</span>{' '}
        Sensor Readings:
      </h5>

      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card
            title='Nitrogen'
            bordered
            style={{ backgroundColor: getColor(reading.nitrogen) }}
          >
            <p>{reading.nitrogen}</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title='Phosphorus'
            bordered
            style={{ backgroundColor: getColor(reading.phosphorus) }}
          >
            <p>{reading.phosphorus}</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title='Potassium'
            bordered
            style={{ backgroundColor: getColor(reading.potassium) }}
          >
            <p>{reading.potassium}</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title='Temperature'
            bordered
            style={{ backgroundColor: getColor(reading.temperature) }}
          >
            <p>{reading.temperature}</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title='Humidity'
            bordered
            style={{ backgroundColor: getColor(reading.humidity) }}
          >
            <p>{reading.humidity}</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title='Soil Moisture'
            bordered
            style={{ backgroundColor: getColor(reading.soil_moisture) }}
          >
            <p>{reading.moisture_level}</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title='Electric Conductivity'
            bordered
            style={{ backgroundColor: getColor(reading.k) }}
          >
            <p>{reading.k}</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Details;
