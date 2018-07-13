import React from 'react';
import ReactDOM from 'react-dom';
import MyCv from './my-cv/my-cv.component';

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import './styles.css'

ReactDOM.render(<MyCv defaultLanguage='fr' />, document.getElementById('root'));
