package http

import (
	"fmt"
	"net/http"
)

func Get(url string) *http.Response {
	res, err := http.Get(url)

	if err != nil {
		fmt.Println(err)
	}

	return res
}

func Head(url string) *http.Response {
	res, err := http.Head(url)

	if err != nil {
		fmt.Println(err)
	}

	return res
}
