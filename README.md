# miranews-backend
Backend side for miranews, an amazing news portal for you
## Info & Dependencies
	{
	  "name": "miranews-backend",
	  "version": "0.0.0",
	  "private": true,
	  "scripts": {
	    "start": "node ./bin/www",
	    "dev": "nodemon ./bin/www"
	  },
	  "dependencies": {
	    "axios": "^0.17.1",
	    "body-parser": "~1.18.2",
	    "cors": "^2.8.4",
	    "debug": "~2.6.9",
	    "dotenv": "^5.0.0",
	    "express": "~4.15.5",
	    "fb": "^2.0.0",
	    "get-json": "^1.0.0",
	    "mongoose": "^5.0.3",
	    "morgan": "~1.9.0",
	    "newsapi": "^2.2.0",
	    "nexmo": "^2.2.0"
	  }
	}

## How To Use It
	>npm start
	OR
	>npm run dev

And don't forget to clone this repository to know how the app looks like	https://github.com/miranorth/miranews

Then, 
	
	>python -m SimpleHTTPServer
	OR
	>live-server