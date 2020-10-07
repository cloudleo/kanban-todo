import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



let Data = [
	{	
		firstIndex: true,
		styles: {"backgroundColor": "#8E6E95"},
		name: "Winnie",
		cards: [
			{
				text: " text 1 winnie"	
			},
			{
				text: "text 2 winnie"	
			}
		]
	},
	{   
		styles: {"backgroundColor": "#39A59C"},
		name: "Bob",
		cards: [
			{
				text: "text 1 Bob"	
			},
			{
				text: "text 2 Bob"	
			}
		]
	},
	{
		styles: {"backgroundColor": "#344759"},
		name: "Thomas",
		cards: [
			{
				text: "text 1 Thomas"	
			},
			{
				text: "text 2 Thomas"	
			}
		]
	},
	{
		lastIndex: true,
		styles: {"backgroundColor": "#E8741E"},
		name: "George",
		cards: [
			{
				text: "text 1 George"	
			},
			{
				text: "text 2 George"	
			}
		]
	}			
]

if(window.localStorage.getItem("data")){
	Data = JSON.parse(window.localStorage.getItem("data"));
}
ReactDOM.render(
  <React.StrictMode>
    <App data={Data}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
