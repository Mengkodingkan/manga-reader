package controllers

import (
	"fmt"
	"strings"

	http "Mengkodingkan.com/manga-reader/src/Util"
	structure "Mengkodingkan.com/manga-reader/src/structures"
	"github.com/PuerkitoBio/goquery"
	"github.com/gin-gonic/gin"
)

func Ping(c *gin.Context) {
	resp := http.Get("http://komikindo.id/")

	if resp.StatusCode != 200 {
		c.JSON(500, gin.H{
			"status":  "error",
			"message": "Something went wrong",
		})
	}

	c.JSON(200, gin.H{
		"status":     "success",
		"message":    resp.Status,
		"statusCode": resp.StatusCode,
	})
}

func Home(c *gin.Context) {
	var homeResponse structure.HomeResponse

	resp := http.Get("https://komikindo.id")

	if resp.StatusCode != 200 {
		c.JSON(500, gin.H{
			"status":  "error",
			"message": "Something went wrong",
		})
	}

	doc, errs := goquery.NewDocumentFromReader(resp.Body)
	if errs != nil {
		fmt.Println(errs)
	}

	doc.Find("#menu-second-menu").Children().Each(func(i int, s *goquery.Selection) {
		var name = s.Find("a").Text()
		var url = s.Find("a").AttrOr("href", "No url")
		var endpoint = strings.Replace(url, "https://komikindo.id/", "", -1)

		homeResponse.Menu = append(homeResponse.Menu, structure.DetailData{
			Name:     name,
			Url:      url,
			Endpoint: endpoint,
		})
	})

	doc.Find(".mangapopuler").Find(".animepost").Each(func(i int, s *goquery.Selection) {
		var name = s.Find("[itemprop='url']").AttrOr("title", "No title")
		var thumb = strings.Split(s.Find("img").AttrOr("src", "No thumb"), "?")[0]
		var url = s.Find("[itemprop='url']").AttrOr("href", "No url")
		var endpoint = strings.Replace(url, "https://komikindo.id/", "", -1)
		var lastUpload = s.Find(".datech").Text()

		var lastChapterName = s.Find(".lsch").Find("a").Text()
		var lastChapterUrl = s.Find(".lsch").Find("a").AttrOr("href", "No url")
		var lastChapterEndpoint = strings.Replace(lastChapterUrl, "https://komikindo.id/", "", -1)

		homeResponse.HomePopular = append(homeResponse.HomePopular, structure.HomePopular{
			Name:  name,
			Thumb: thumb,
			Url: []structure.DetailData{
				{
					Name:     name,
					Url:      url,
					Endpoint: endpoint,
				},
			},
			LastUpload: lastUpload,
			LastChapter: []structure.DetailData{
				{
					Name:     lastChapterName,
					Url:      lastChapterUrl,
					Endpoint: lastChapterEndpoint,
				},
			},
		})
	})

	doc.Find(".latestupdate-v2").Find(".animepost").Each(func(i int, s *goquery.Selection) {
		var name = s.Find("[itemprop='url']").AttrOr("title", "No title")
		var thumb = strings.Split(s.Find("img").AttrOr("src", "No thumb"), "?")[0]
		var url = s.Find("[itemprop='url']").AttrOr("href", "No url")
		var endpoint = strings.Replace(url, "https://komikindo.id/", "", -1)

		homeResponse.HomeLatest = append(homeResponse.HomeLatest, structure.HomeLatest{
			Name:  name,
			Thumb: thumb,
			Url: []structure.DetailData{
				{
					Name:     name,
					Url:      url,
					Endpoint: endpoint,
				},
			},
		})
	})

	defer resp.Body.Close()

	c.JSON(200, gin.H{
		"status": "success",
		"data":   homeResponse,
	})
}
