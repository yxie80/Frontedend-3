import React from 'react';
import {Card} from 'antd';
import WeatherApp from '../WeatherAPP/WeatherApp';

class WeatherCard extends React.Component {
    render() {
        return (
            <div>
                <Card title="Weather Card" style={{ width: 300 }}>
                    <WeatherApp />
                </Card>
            </div>
        );
    }
}

export default WeatherCard;