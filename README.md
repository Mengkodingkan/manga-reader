# Manga Reader
Manga reader, manga source scraped from komikindo

# Installation
## Prequisite
1. [Go](https://go.dev/dl/) 
2. [NodeJS v16](https://nodejs.org/en/)
## Backend
```bash
$ cd backend
$ go get
$ go run main.go
```

## Frontend
```bash
$ cd frontend
$ npm i
$ npm start
```

# Usage
1. Run the script
2. Enjoy
3. Read your favorite manga as you want

# API PATH
**MAIN PATH**: http://localhost:3568/api/v1/

## Home
```
/home
```
Usage: http://localhost:3568/api/v1/home

## List Komik
```
/daftar-komik (default page 1)
/daftar-komik/page/:page
```
Usage: http://localhost:3568/api/v1/daftar-komik/page/1

## Komik Terbaru
```
/komik-terbaru (default page 1)
/komik-terbaru/page/:page
```
Usage: http://localhost:3568/api/v1/komik-terbaru/page/1

## Search Komik
```
/search/?s=yourquery (default page 1)
/search/page/:page/?s=yourquery
```
Usage: http://localhost:3568/api/v1/search/page/1/?s=naruto