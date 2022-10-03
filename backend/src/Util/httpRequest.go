package util

import (
	"fmt"
	"log"
	"net/http"
)

func Get(url string) *http.Response {
	res, err := http.Get(url)

	if err != nil {
		fmt.Println(err)
	}

	if res.StatusCode != 200 {
		log.Fatalf("status code error: %d %s", res.StatusCode, res.Status)
	}

	return res
}
