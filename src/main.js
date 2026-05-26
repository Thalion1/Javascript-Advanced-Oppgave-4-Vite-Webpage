import { roleDice } from './roleDise';
import './style.css'

document.querySelector('#app').innerHTML = `
<input type="submit" id="role-btn" value="Role agin">
<div id="display"></div>
`

const roleBtn = document.getElementById('role-btn');
const display = document.getElementById('display')

roleDice(roleBtn, display)