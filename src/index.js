import React from 'react';
import ReactDOM from'react-dom';
import App from './App';

import{configureStore} from '@reduxjs/toolkit'
import{Provider} from 'react-redux'
import todoSlice from './Store/todoSlice'

const store=configureStore({reducer:{todoSlice}})

ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'));

