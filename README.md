# Python Scrape Kits
A simple tool to quickly generate a boilerplate project structure for web scraping with Python.

# Features

Generates a ready-to-use project structure for web scraping.
Includes folders for data, scraper, configs, tests, and more.
Pre-populated template files for settings, base scraper logic, and MongoDB setup.
Easy to install and use globally.

# Installation
Install the package globally using npm:

```bash
Copy code
npm install -g python-scrape-kits 
```
Usage
Generate a new web scraping project:
Run the following command in your terminal:

```bash 
python-scrape-kits <project_name>
```
Replace <project_name> with the name of your new project.

Example:

```bash 
python-scrape-kits my_scraper_project
```
This will create a new project structure in the folder my_scraper_project with the following hierarchy:

my_scraper_project/
│
├── configs/
│   └── settings.py       # Configuration settings
│
├── data/
│   ├── raw/              # Raw data files
│   ├── processed/        # Processed data files
│   └── logs/             # Logs
│
├── database/
│   └── mongo_client.py   # MongoDB setup
│
├── scraper/
│   ├── __init__.py       # Scraper module
│   ├── base_scraper.py   # Base scraper logic
│   └── utils.py          # Utility functions
│
├── tests/                # Test cases
│
├── main.py               # Entry point for the scraper
├── requirements.txt      # Required Python packages
├── .env                  # Environment variables
└── README.md             # Project documentation