import Frisbee from 'frisbee';
export let api = new Frisbee({
	  baseURI: 'https://api.github.com',
	  headers: {
	    'Accept': 'application/vnd.github.damage-preview',
	    'Content-Type': 'application/json',
	    'Authorization' : 'token'
	  }
	});