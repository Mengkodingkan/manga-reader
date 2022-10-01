package main

import (
	"fmt"
	"log"
	"net/http"
	"strings"

	"github.com/PuerkitoBio/goquery"
)

func main() {
	res, err := http.Get("https://komikindo.id")

	if err != nil {
		fmt.Println(err)
	}
	defer res.Body.Close()

	if res.StatusCode != 200 {
		log.Fatalf("status code error: %d %s", res.StatusCode, res.Status)
	}

	doc, err := goquery.NewDocumentFromReader(res.Body)

	if err != nil {
		fmt.Println(err)
	}

	// rows := make([]string, 0)

	doc.Find(".odadingslider").Children().Each(func(i int, s *goquery.Selection) {
		info := s.Find(".animposx").Find("a")

		title := info.Find("img").AttrOr("title", "No title")
		link, _ := info.Attr("href")
		image, _ := info.Find("img").Attr("src")

		fmt.Println(title)
		fmt.Println(link)
		fmt.Println(strings.Split(image, "?")[0])
		fmt.Println("")
	})

}
