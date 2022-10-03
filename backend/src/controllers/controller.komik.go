package controllers

import (
	"fmt"
	"strings"

	util "Mengkodingkan.com/manga-reader/src/Util"
	"github.com/PuerkitoBio/goquery"
	"github.com/gin-gonic/gin"
)

func KomikDetail(c *gin.Context) {
	endpoint := c.Param("endpoint")
	if endpoint == "" {
		c.JSON(500, gin.H{
			"status":  "error",
			"message": "Endpoint is required",
		})
	}

	resp := util.Get(util.GetKeyEnv("BASEURL") + "/komik/" + endpoint)
	if resp.StatusCode != 200 {
		c.JSON(500, gin.H{
			"status":  "error",
			"message": "Something went wrong",
		})
	}

	doc, err := goquery.NewDocumentFromReader(resp.Body)
	if err != nil {
		c.JSON(500, gin.H{
			"status":  "error",
			"message": "Something went wrong",
		})
	}

	var detail = doc.Find(".postbody")
	var title = strings.Replace(detail.Find(".entry-title").Text(), "Komik ", "", -1)
	var thumb = strings.Split(detail.Find(".thumb > img").AttrOr("src", "No thumb"), "?")[0]
	var alter = strings.Split(detail.Find(".spe > span").First().Text(), ": ")[1]
	arrAlter := strings.Split(alter, ", ")

	fmt.Println(title, thumb, arrAlter)

	c.JSON(200, gin.H{
		"status": "success",
		"data": gin.H{
			"title": title,
			"thumb": thumb,
			"alter": arrAlter,
		},
	})
}
