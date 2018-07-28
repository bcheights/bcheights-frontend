# BC Heights Front-End

## Setup Project

### Pre-Requisites:

1. NPM & Node installed 
   - If you don't have it installed go here: https://nodejs.org/en/ (Install the LTS version). NPM is bundled with the Node installation.
2. Python & Pip
   - Pip is bundled with most Python installations

### Setup Virtual Environment

If you don't have virtualenv installed then run `pip install virtualenv` in the terminal. 

Note: Run the above command with `sudo` if you want installed globally.

1. Navigate to directory where you want the project to be
2. Run `virtualenv {name of project folder}`
3. Run `cd {name of project folder}`
4. Run `source bin/activate`

You are now in the virtual environment!

### Install Project

1. Open terminal to directory where you want the project to be
2. Clone the repository: `git clone https://github.com/bcheights/bcheights-frontend.git`
3. Change into the directory: `cd bcheights-frontend`
4. Run `npm install` (This will install all of the dependencies needed)
5. Start the front-end: `npm run dev`
6. Navigate to `localhost:3000` in a web browser
