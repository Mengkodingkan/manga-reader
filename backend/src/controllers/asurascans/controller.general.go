package asurascans

import (
	"strings"

	http "Mengkodingkan.com/manga-reader/src/http"
	"Mengkodingkan.com/manga-reader/src/structures"
	asura_structure "Mengkodingkan.com/manga-reader/src/structures/asurascans"
	"github.com/PuerkitoBio/goquery"
	"github.com/gin-gonic/gin"
)

const BASE_URL = "https://asura.gg"

func Ping(c *gin.Context) {
	res := http.Head(BASE_URL)

	if res.StatusCode != 200 {
		c.JSON(500, gin.H{
			"status":  "error",
			"message": "Something went wrong",
		})
	}

	defer res.Body.Close()

	c.JSON(200, structures.SuccessPing{
		Status:     "success",
		Message:    "Website is up",
		StatusCode: res.StatusCode,
	})
}

func Home(c *gin.Context) {
	var HomeResponse asura_structure.HomeResponse
	res := http.Get(BASE_URL)

	if res.StatusCode != 200 {
		c.JSON(500, gin.H{
			"status":  "error",
			"message": "Something went wrong",
		})
	}

	doc, err := goquery.NewDocumentFromReader(res.Body)
	if err != nil {
		c.JSON(500, structures.Error{
			Status:  "error",
			Message: "Something went wrong",
		})
	}

	doc.Find(".loop.owl-carousel.full").Children().Each(func(i int, s *goquery.Selection) {
		thumb := s.Find(".slide-bg > img").AttrOr("src", "No Thumbnail")
		title := s.Find(".ellipsis").Text()
		_type := s.Find(".release-year").Text()
		score := s.Find(".fa-star").Text()
		description := s.Find(".excerpt").Find("p").Text()
		url := s.Find(".ellipsis > a").AttrOr("href", "No URL")
		endpoint := strings.Replace(url, BASE_URL, "", -1)

		var genres []interface{}
		s.Find(".extra-category").Children().Each(func(i int, se *goquery.Selection) {
			name := se.Text()
			url := se.AttrOr("href", "No URL")
			endpoint := strings.Replace(url, BASE_URL, "", -1)

			genres = append(genres, struct {
				Name     string `json:"name"`
				Url      string `json:"url"`
				Endpoint string `json:"endpoint"`
			}{
				Name:     name,
				Url:      url,
				Endpoint: endpoint,
			})
		})

		HomeResponse.Caraousel = append(HomeResponse.Caraousel, asura_structure.CaraouselContent{
			Title:       title,
			Type:        _type,
			Scores:      score,
			Thumb:       thumb,
			Genres:      genres,
			Description: description,
			Url:         url,
			Endpoint:    endpoint,
		})
	})

	doc.Find(".hothome").Find(".listupd").Children().Each(func(i int, s *goquery.Selection) {
		title := s.Find(".bsx > a").AttrOr("title", "No Title")
		thumb := s.Find("img").AttrOr("src", "No Thumbnail")
		url := s.Find(".bsx > a").AttrOr("href", "No URL")
		endpoint := strings.Replace(url, BASE_URL, "", -1)
		_type := s.Find(".type").Text()
		chapter := s.Find(".epxs").Text()
		score := s.Find(".numscore").Text()

		HomeResponse.PopularToday = append(HomeResponse.PopularToday, asura_structure.PopularTodayContent{
			Title:    title,
			Thumb:    thumb,
			Url:      url,
			Endpoint: endpoint,
			Type:     _type,
			Chapter:  chapter,
			Scores:   score,
		})
	})

	doc.Find(".styletwo").Each(func(i int, s *goquery.Selection) {
		title := s.Find(".imgu > a").AttrOr("title", "No Title")
		thumb := s.Find("img").AttrOr("src", "No Thumbnail")
		url := s.Find(".imgu > a").AttrOr("href", "No URL")
		endpoint := strings.Replace(url, BASE_URL, "", -1)

		var chapters []interface{}
		s.Find("ul").Children().Each(func(i int, se *goquery.Selection) {
			name := se.Find("a").Text()
			last_update := se.Find("span").Text()
			url := se.Find("a").AttrOr("href", "No URL")
			endpoint := strings.Replace(url, BASE_URL, "", -1)

			chapters = append(chapters, struct {
				Name       string `json:"name"`
				LastUpdate string `json:"last_update"`
				Url        string `json:"url"`
				Endpoint   string `json:"endpoint"`
			}{
				Name:       name,
				LastUpdate: last_update,
				Url:        url,
				Endpoint:   endpoint,
			})
		})

		HomeResponse.LatestUpdate = append(HomeResponse.LatestUpdate, asura_structure.LatestUpdateContent{
			Title:    title,
			Thumb:    thumb,
			Url:      url,
			Endpoint: endpoint,
			Chapters: chapters,
		})
	})

	doc.Find("#wpop-items").Children().Each(func(i int, s *goquery.Selection) {
		// if class contains "wpop-weekly"
		var genres []interface{}
		if s.HasClass("wpop-weekly") {
			s.Find("ul").Children().Each(func(i int, se *goquery.Selection) {
				title := se.Find(".leftseries > h2 > a").Text()
				thumb := se.Find(".imgseries").Find("img").AttrOr("src", "No Thumbnail")
				url := se.Find(".imgseries").Find("a").AttrOr("href", "No URL")
				endpoint := strings.Replace(url, BASE_URL, "", -1)
				scores := se.Find(".numscore").Text()

				se.Find(".leftseries").Find("span > a").Each(func(i int, ses *goquery.Selection) {
					name := ses.Text()
					url := ses.AttrOr("href", "No URL")
					endpoint := strings.Replace(url, BASE_URL, "", -1)

					genres = append(genres, struct {
						Name     string `json:"name"`
						Url      string `json:"url"`
						Endpoint string `json:"endpoint"`
					}{
						Name:     name,
						Url:      url,
						Endpoint: endpoint,
					})
				})

				HomeResponse.Popular.Weekly = append(HomeResponse.Popular.Weekly, asura_structure.PopularContent{
					Title:    title,
					Thumb:    thumb,
					Url:      url,
					Endpoint: endpoint,
					Scores:   scores,
					Genres:   genres,
				})
			})
		}

		// if class contains "wpop-monthly"
		if s.HasClass("wpop-monthly") {
			s.Find("ul").Children().Each(func(i int, se *goquery.Selection) {
				title := se.Find(".leftseries > h2 > a").Text()
				thumb := se.Find(".imgseries").Find("img").AttrOr("src", "No Thumbnail")
				url := se.Find(".imgseries").Find("a").AttrOr("href", "No URL")
				endpoint := strings.Replace(url, BASE_URL, "", -1)
				scores := se.Find(".numscore").Text()

				se.Find(".leftseries").Find("span > a").Each(func(i int, ses *goquery.Selection) {
					name := ses.Text()
					url := ses.AttrOr("href", "No URL")
					endpoint := strings.Replace(url, BASE_URL, "", -1)

					genres = append(genres, struct {
						Name     string `json:"name"`
						Url      string `json:"url"`
						Endpoint string `json:"endpoint"`
					}{
						Name:     name,
						Url:      url,
						Endpoint: endpoint,
					})
				})

				HomeResponse.Popular.Monthly = append(HomeResponse.Popular.Monthly, asura_structure.PopularContent{
					Title:    title,
					Thumb:    thumb,
					Url:      url,
					Endpoint: endpoint,
					Scores:   scores,
					Genres:   genres,
				})
			})
		}

		// if class contains "wpop-all"
		if s.HasClass("wpop-alltime") {
			s.Find("ul").Children().Each(func(i int, se *goquery.Selection) {
				title := se.Find(".leftseries > h2 > a").Text()
				thumb := se.Find(".imgseries").Find("img").AttrOr("src", "No Thumbnail")
				url := se.Find(".imgseries").Find("a").AttrOr("href", "No URL")
				endpoint := strings.Replace(url, BASE_URL, "", -1)
				scores := se.Find(".numscore").Text()

				se.Find(".leftseries").Find("span > a").Each(func(i int, ses *goquery.Selection) {
					name := ses.Text()
					url := ses.AttrOr("href", "No URL")
					endpoint := strings.Replace(url, BASE_URL, "", -1)

					genres = append(genres, struct {
						Name     string `json:"name"`
						Url      string `json:"url"`
						Endpoint string `json:"endpoint"`
					}{
						Name:     name,
						Url:      url,
						Endpoint: endpoint,
					})
				})

				HomeResponse.Popular.All = append(HomeResponse.Popular.All, asura_structure.PopularContent{
					Title:    title,
					Thumb:    thumb,
					Url:      url,
					Endpoint: endpoint,
					Scores:   scores,
					Genres:   genres,
				})
			})
		}
	})

	c.JSON(200, structures.Success{
		Status: "success",
		Data:   HomeResponse,
	})

}
