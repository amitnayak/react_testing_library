import React, {useState} from 'react';

import {Button, DatePicker, message} from 'antd';

const state = {
    date: null,
  };

const handleChange = date => {
    message.info(`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`);
    //this.setState({ date });
  };

function AntdExample(){
	 const { date } = state;
	return(
		<div>
			<div> AntdExample </div>
	

	        <DatePicker onChange={handleChange.bind(this)} />
	        <div style={{ marginTop: 20 }}>
	          Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
	        </div>

		</div>
	)
}
export default AntdExample;