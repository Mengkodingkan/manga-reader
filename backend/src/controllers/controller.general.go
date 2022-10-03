package controllers

import (
	"fmt"
	"strings"

	http "Mengkodingkan.com/manga-reader/src/Util"
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
	type Menu struct {
		Name     string `json:"name"`
		Url      string `json:"url"`
		Endpoint string `json:"endpoint"`
	}

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

	var menu []Menu
	doc.Find("#menu-second-menu").Children().Each(func(i int, s *goquery.Selection) {
		var name = s.Find("a").Text()
		var url = s.Find("a").AttrOr("href", "No url")
		var endpoint = strings.Replace(url, "https://komikindo.id/", "", -1)

		menu = append(menu, Menu{
			Name:     name,
			Url:      url,
			Endpoint: endpoint,
		})
	})

	defer resp.Body.Close()

	c.JSON(200, gin.H{
		"status": "success",
		"menu":   menu,
	})
}
