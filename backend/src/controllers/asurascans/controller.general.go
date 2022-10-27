package asurascans

import (
	"strings"

	util "Mengkodingkan.com/manga-reader/src/Util"
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

func GetComic(c *gin.Context) {
	// get endpoint
	endpoint := c.Param("endpoint")
	if endpoint == "" {
		c.JSON(400, structures.Error{
			Status:  "error",
			Message: "endpoint is required",
		})
		return
	}

	res := http.Get(BASE_URL + "/" + endpoint)
	if res.StatusCode != 200 {
		c.JSON(400, structures.Error{
			Status:  "error",
			Message: "failed to get data",
		})
		return
	}

	doc, err := goquery.NewDocumentFromReader(res.Body)
	if err != nil {
		c.JSON(400, structures.Error{
			Status:  "error",
			Message: "failed to get data",
		})
		return
	}

	var MangaDetail asura_structure.MangaDetailResponse

	MangaDetail.Title = strings.Replace(doc.Find("title").Text(), " - Asura Scans", "", -1)
	MangaDetail.Thumb = doc.Find(".thumbook").Find(".wp-post-image").AttrOr("src", "No Thumbnail")
	MangaDetail.Synopsis = doc.Find("div[itemprop='description']").Find("p").Text()
	MangaDetail.Scores = doc.Find(".thumbook").Find("div[itemprop='ratingValue']").Text()
	MangaDetail.Status = doc.Find(".tsinfo").Find("i").Text()

	type_title := doc.Find(".tsinfo").Find("a").Text()
	type_url := doc.Find(".tsinfo").Find("a").AttrOr("href", "No URL")
	type_endpoint := strings.Replace(type_url, BASE_URL, "", -1)
	MangaDetail.Type = struct {
		Title    string `json:"title"`
		Url      string `json:"url"`
		Endpoint string `json:"endpoint"`
	}{
		Title:    type_title,
		Url:      type_url,
		Endpoint: type_endpoint,
	}

	MangaDetail.Released = doc.Find(".flex-wrap").Eq(0).Find(".fmed").Eq(0).Find("span").Text()
	MangaDetail.Released = strings.TrimFunc(MangaDetail.Released, func(r rune) bool {
		return r == '\n' || r == '\t'
	})
	MangaDetail.Author = doc.Find(".flex-wrap").Eq(0).Find(".fmed").Eq(1).Find("span").Text()
	MangaDetail.Author = strings.TrimFunc(MangaDetail.Author, func(r rune) bool {
		return r == '\n' || r == '\t'
	})

	MangaDetail.Artist = doc.Find(".flex-wrap").Eq(1).Find(".fmed").Eq(0).Find("span").Text()
	MangaDetail.Artist = strings.TrimFunc(MangaDetail.Artist, func(r rune) bool {
		return r == '\n' || r == '\t'
	})

	MangaDetail.Serialization = doc.Find(".flex-wrap").Eq(2).Find(".fmed").Eq(0).Find("span").Text()
	MangaDetail.Serialization = strings.TrimFunc(MangaDetail.Serialization, func(r rune) bool {
		return r == '\n' || r == '\t'
	})

	MangaDetail.PostedBy = doc.Find(".flex-wrap").Eq(2).Find(".fmed").Eq(1).Find("span").Text()
	MangaDetail.PostedBy = strings.TrimFunc(MangaDetail.PostedBy, func(r rune) bool {
		return r == '\n' || r == '\t'
	})

	MangaDetail.PostedOn = doc.Find(".flex-wrap").Eq(3).Find(".fmed").Eq(0).Find("span").Text()
	MangaDetail.PostedOn = strings.TrimFunc(MangaDetail.PostedOn, func(r rune) bool {
		return r == '\n' || r == '\t'
	})

	MangaDetail.UpdatedOn = doc.Find(".flex-wrap").Eq(3).Find(".fmed").Eq(1).Find("span").Text()
	MangaDetail.UpdatedOn = strings.TrimFunc(MangaDetail.UpdatedOn, func(r rune) bool {
		return r == '\n' || r == '\t'
	})

	var genres []interface{}
	doc.Find(".wd-full").Find(".mgen").Children().Each(func(i int, s *goquery.Selection) {
		name := s.Text()
		url := s.AttrOr("href", "No URL")
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
	MangaDetail.Genres = genres

	// var keywords []string
	doc.Find(".bottom").Find("strong").Remove()
	var txt = doc.Find(".bottom").Text()
	txt = strings.TrimFunc(txt, func(r rune) bool {
		return r == '\n' || r == '\t'
	})
	MangaDetail.Keywords = strings.Split(txt, ", ")

	var chapters []interface{}
	doc.Find("#chapterlist").Find("ul").Children().Each(func(i int, s *goquery.Selection) {
		title := "Chapter " + s.AttrOr("data-num", "Missing Chapter")
		posted_at := s.Find("span").Eq(1).Text()
		url := s.Find("a").AttrOr("href", "No URL")
		endpoint := strings.Replace(url, BASE_URL, "", -1)

		chapters = append(chapters, struct {
			Name     string `json:"name"`
			PostedAt string `json:"posted_at"`
			Url      string `json:"url"`
			Endpoint string `json:"endpoint"`
		}{
			Name:     title,
			PostedAt: posted_at,
			Url:      url,
			Endpoint: endpoint,
		})
	})
	MangaDetail.Chapters = chapters

	defer res.Body.Close()

	c.JSON(200, structures.Success{
		Status: "success",
		Data:   MangaDetail,
	})

}

func GetChapter(c *gin.Context) {
	endpoint := c.Param("endpoint")
	if endpoint == "" {
		c.JSON(400, structures.Error{
			Status:  "error",
			Message: "Missing Endpoint",
		})
		return
	}

	res := http.Get(BASE_URL + "/" + endpoint)
	if res.StatusCode != 200 {
		c.JSON(404, structures.Error{
			Status:  "error",
			Message: "Not Found",
		})
	}

	doc, err := goquery.NewDocumentFromReader(res.Body)
	if err != nil {
		c.JSON(400, structures.Error{
			Status:  "error",
			Message: "Bad Request",
		})
	}

	var ChapterResponse asura_structure.ChapterResponse

	ChapterResponse.Title = doc.Find(".entry-title").Text()

	ChapterResponse.Images = make([]interface{}, 0)
	doc.Find("#readerarea").Find("img").Each(func(i int, s *goquery.Selection) {

		ChapterResponse.Images = append(ChapterResponse.Images, struct {
			Url    string `json:"url"`
			Width  string `json:"width"`
			Height string `json:"height"`
		}{
			Url:    s.AttrOr("src", "No URL"),
			Width:  s.AttrOr("width", "No Width"),
			Height: s.AttrOr("height", "No Height"),
		})
	})

	name := strings.Split(endpoint, "-")
	chapter_num := util.ToInt(name[len(name)-1])

	next_num := chapter_num + 1
	name[len(name)-1] = util.ToString(next_num)
	next_res := http.Head(BASE_URL + "/" + strings.Join(name, "-"))
	if next_res.StatusCode == 404 {
		ChapterResponse.NextChapter = nil
	} else {
		ChapterResponse.NextChapter = struct {
			Name     string `json:"name"`
			Url      string `json:"url"`
			Endpoint string `json:"endpoint"`
		}{
			Name:     "Chapter " + util.ToString(chapter_num),
			Url:      BASE_URL + "/" + strings.Join(name, "-"),
			Endpoint: strings.Join(name, "-"),
		}
	}

	prev_num := chapter_num - 1
	name[len(name)-1] = util.ToString(prev_num)
	prev_res := http.Head(BASE_URL + "/" + strings.Join(name, "-"))
	if prev_res.StatusCode == 404 {
		ChapterResponse.PrevChapter = nil
	} else {
		ChapterResponse.PrevChapter = struct {
			Name     string `json:"name"`
			Url      string `json:"url"`
			Endpoint string `json:"endpoint"`
		}{
			Name:     "Chapter " + util.ToString(chapter_num),
			Url:      BASE_URL + "/" + strings.Join(name, "-"),
			Endpoint: strings.Join(name, "-"),
		}
	}

	defer res.Body.Close()

	c.JSON(200, structures.Success{
		Status: "success",
		Data:   ChapterResponse,
	})
}
