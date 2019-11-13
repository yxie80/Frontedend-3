import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
//const monthFormat = 'YYYY/MM';

//const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

class DateRange extends React.Component {
    render() {
        return (
            <div>
                <RangePicker
                defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                format={dateFormat}
                />
            </div>
        );
    }
}

export default DateRange;