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

	defer resp.Body.Close()

	c.JSON(200, structure.SuccessPing{
		Status:     "success",
		Message:    "Website is up",
		StatusCode: resp.StatusCode,
	})
}

func Home(c *gin.Context) {
	var homeResponse structure.HomeResponse

	resp := http.Get("https://komikindo.id")

	if resp.StatusCode != 200 {
		c.JSON(500, structure.Error{
			Status:  "error",
			Message: "Something went wrong",
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
			Thumb: strings.Replace(thumb, "https://", "https://cdn.statically.io/img/", -1),
			Url: structure.DetailData{
				Name:     name,
				Url:      url,
				Endpoint: endpoint,
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
			Thumb: strings.Replace(thumb, "https://", "https://cdn.statically.io/img/", -1),
			Url: structure.DetailData{
				Name:     name,
				Url:      url,
				Endpoint: endpoint,
			},
		})
	})

	defer resp.Body.Close()

	c.JSON(200, structure.Success{
		Status: "success",
		Data:   homeResponse,
	})
}

func ListKomik(c *gin.Context) {
	var listKomikResponse structure.ListKomikResponse

	page := c.Param("page")
	if page == "" {
		page = "1"
	}

	resp := http.Get("https://komikindo.id/daftar-manga/page/" + page)

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

	doc.Find(".animepost").Each(func(i int, s *goquery.Selection) {
		var name = s.Find("[itemprop='url']").AttrOr("title", "No title")
		var thumb = strings.Split(s.Find("img").AttrOr("src", "No thumb"), "?")[0]
		var url = s.Find("[itemprop='url']").AttrOr("href", "No url")
		var endpoint = strings.Replace(url, "https://komikindo.id/", "", -1)

		listKomikResponse.Komik = append(listKomikResponse.Komik, structure.ListKomik{
			Name:  name,
			Thumb: thumb,
			Url: structure.DetailData{
				Name:     name,
				Url:      url,
				Endpoint: endpoint,
			},
		})
	})

	doc.Find(".page-numbers").Each(func(i int, s *goquery.Selection) {
		var name = s.Text()
		var url = s.AttrOr("href", "No url")
		var endpoint = strings.Replace(url, "https://komikindo.id/daftar-manga/", "", -1)

		listKomikResponse.Pagination = append(listKomikResponse.Pagination, structure.DetailData{
			Name:     name,
			Url:      url,
			Endpoint: endpoint,
		})
	})

	defer resp.Body.Close()

	c.JSON(200, structure.Success{
		Status: "success",
		Data:   listKomikResponse,
	})
}

func ListKomikTerbaru(c *gin.Context) {
	var listKomikResponse structure.ListKomikResponse

	page := c.Param("page")
	if page == "" {
		page = "1"
	}

	resp := http.Get("https://komikindo.id/komik-terbaru/page/" + page)

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

	doc.Find(".animepost").Each(func(i int, s *goquery.Selection) {
		var name = s.Find("[itemprop='url']").AttrOr("title", "No title")
		var thumb = strings.Split(s.Find("img").AttrOr("src", "No thumb"), "?")[0]
		var url = s.Find("[itemprop='url']").AttrOr("href", "No url")
		var endpoint = strings.Replace(url, "https://komikindo.id/", "", -1)

		listKomikResponse.Komik = append(listKomikResponse.Komik, structure.ListKomik{
			Name:  name,
			Thumb: thumb,
			Url: structure.DetailData{
				Name:     name,
				Url:      url,
				Endpoint: endpoint,
			},
		})
	})

	doc.Find(".page-numbers").Each(func(i int, s *goquery.Selection) {
		var name = s.Text()
		var url = s.AttrOr("href", "No url")
		var endpoint = strings.Replace(url, "https://komikindo.id/daftar-manga/", "", -1)

		listKomikResponse.Pagination = append(listKomikResponse.Pagination, structure.DetailData{
			Name:     name,
			Url:      url,
			Endpoint: endpoint,
		})
	})

	defer resp.Body.Close()

	c.JSON(200, structure.Success{
		Status: "success",
		Data:   listKomikResponse,
	})
}

func SearchKomik(c *gin.Context) {
	var SearchKomikResponse structure.SearchKomikResponse
	page := c.Param("page")
	query := c.Query("s")

	if page == "" {
		page = "1"
	}

	if query == "" {
		c.JSON(400, structure.Error{
			Status:  "error",
			Message: "Query is required",
		})
	}

	resp := http.Get("https://komikindo.id/page/" + page + "/?s=" + query)
	if resp.StatusCode != 200 {
		c.JSON(500, structure.Error{
			Status:  "error",
			Message: "Something went wrong",
		})
	}

	doc, errs := goquery.NewDocumentFromReader(resp.Body)
	if errs != nil {
		fmt.Println(errs)
	}

	doc.Find(".animepost").Each(func(i int, s *goquery.Selection) {
		var name = s.Find("a").AttrOr("title", "No title")
		var thumb = strings.Split(s.Find("img").AttrOr("src", "No thumb"), "?")[0]
		var url = s.Find("a").AttrOr("href", "No url")
		var endpoint = strings.Replace(url, "https://komikindo.id/", "", -1)

		SearchKomikResponse.Komik = append(SearchKomikResponse.Komik, structure.ListKomik{
			Name:  name,
			Thumb: thumb,
			Url: structure.DetailData{
				Name:     name,
				Url:      url,
				Endpoint: endpoint,
			},
		})
	})

	doc.Find(".page-numbers").Each(func(i int, s *goquery.Selection) {
		var name = s.Text()
		var url = s.AttrOr("href", "No url")
		var endpoint = strings.Replace(url, "https://komikindo.id/", "", -1)

		SearchKomikResponse.Pagination = append(SearchKomikResponse.Pagination, structure.DetailData{
			Name:     name,
			Url:      url,
			Endpoint: endpoint,
		})
	})
	defer resp.Body.Close()

	c.JSON(200, structure.Success{
		Status: "success",
		Data:   SearchKomikResponse,
	})

}
