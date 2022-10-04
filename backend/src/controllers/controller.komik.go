package controllers

import (
	"strings"

	util "Mengkodingkan.com/manga-reader/src/Util"
	"Mengkodingkan.com/manga-reader/src/structures"
	"github.com/PuerkitoBio/goquery"
	"github.com/gin-gonic/gin"
)

func KomikDetail(c *gin.Context) {
	var KomikResponse structures.KomikResponse
	endpoint := c.Param("endpoint")
	if endpoint == "" {
		c.JSON(500, structures.Error{
			Status:  "error",
			Message: "Endpoint tidak boleh kosong",
		})
	}

	resp := util.Get(util.GetKeyEnv("BASEURL") + "/komik/" + endpoint)
	if resp.StatusCode != 200 {
		c.JSON(500, structures.Error{
			Status:  "error",
			Message: "Terjadi kesalahan saat mengambil data",
		})
	}

	doc, err := goquery.NewDocumentFromReader(resp.Body)
	if err != nil {
		c.JSON(500, structures.Error{
			Status:  "error",
			Message: "Terjadi kesalahan saat mengambil data",
		})
	}

	var detail = doc.Find(".postbody")
	KomikResponse.Title = strings.Replace(detail.Find(".entry-title").Text(), "Komik ", "", -1)
	KomikResponse.Thumb = strings.Split(detail.Find(".thumb > img").AttrOr("src", "No thumb"), "?")[0]
	var _alter = strings.Split(detail.Find(".spe > span").First().Text(), ": ")[1]
	KomikResponse.Alter = strings.Split(_alter, ", ")
	KomikResponse.Status = strings.Split(detail.Find(".spe > span").Eq(1).Text(), ": ")[1]
	KomikResponse.Author = strings.Split(detail.Find(".spe > span").Eq(2).Text(), ": ")[1]
	KomikResponse.Illustrator = strings.Split(detail.Find(".spe > span").Eq(3).Text(), ": ")[1]
	KomikResponse.Grafis = strings.Split(detail.Find(".spe > span").Eq(4).Text(), ": ")[1]
	KomikResponse.Scores = strings.Split(detail.Find(".spe > span").Eq(5).Text(), ": ")[1]

	detail.Find(".genre-info").Children().Each(func(i int, s *goquery.Selection) {
		KomikResponse.Genre = append(KomikResponse.Genre, s.Text())
	})

	KomikResponse.Synopsis = strings.Split(detail.Find("[itemprop='description']").Text(), "\n")[1]

	detail.Find("#chapter_list").Find(".lchx").Each(func(i int, s *goquery.Selection) {
		KomikResponse.Chapters = append(KomikResponse.Chapters, structures.DetailData{
			Name:     s.Find("a").Text(),
			Url:      s.Find("a").AttrOr("href", ""),
			Endpoint: strings.Replace(s.Find("a").AttrOr("href", ""), util.GetKeyEnv("BASEURL"), "", -1),
		})
	})

	c.JSON(200, structures.Success{
		Status: "success",
		Data:   KomikResponse,
	})
}

func ChapterDetail(c *gin.Context) {
	var KomikChapter structures.KomikChapter

	endpoint := c.Param("endpoint")
	if endpoint == "" {
		c.JSON(500, structures.Error{
			Status:  "error",
			Message: "Endpoint tidak boleh kosong",
		})
	}

	resp := util.Get(util.GetKeyEnv("BASEURL") + endpoint)
	if resp.StatusCode != 200 {
		c.JSON(500, structures.Error{
			Status:  "error",
			Message: "Terjadi kesalahan saat mengambil data",
		})
	}

	doc, err := goquery.NewDocumentFromReader(resp.Body)
	if err != nil {
		c.JSON(500, structures.Error{
			Status:  "error",
			Message: "Terjadi kesalahan saat mengambil data",
		})
	}
	KomikChapter.Title = doc.Find(".entry-title").Text()

	thumb := doc.Find("meta[property='og:image']").AttrOr("content", "")
	thumb = strings.Replace(thumb, "https://", "https://cdn.statically.io/img/", -1)
	KomikChapter.Thumb = thumb

	var chapterLink = doc.Find("#chimg-auh").Children()
	if chapterLink.Length() == 0 {
		var alternateLink = doc.Find("head").Find("link[type='application/json']").AttrOr("href", "")

		resp := util.Get(alternateLink)
		if resp.StatusCode != 200 {
			c.JSON(500, structures.Error{
				Status:  "error",
				Message: "Terjadi kesalahan saat mengambil data",
			})
		}

		doc, err := goquery.NewDocumentFromReader(resp.Body)
		if err != nil {
			c.JSON(500, structures.Error{
				Status:  "error",
				Message: "Terjadi kesalahan saat mengambil data",
			})
		}

		doc.Find("img").Each(func(i int, s *goquery.Selection) {
			var img = s.AttrOr("src", "")
			img = strings.TrimSpace(img)
			img = strings.Replace(img, "\\", "", -1)
			KomikChapter.Images = append(KomikChapter.Images, strings.Replace(img, "\"", "", -1))
		})

		defer resp.Body.Close()
	} else {
		chapterLink.Each(func(i int, s *goquery.Selection) {
			KomikChapter.Images = append(KomikChapter.Images, s.AttrOr("src", ""))
		})
	}

	c.JSON(200, structures.Success{
		Status: "success",
		Data:   KomikChapter,
	})
}
