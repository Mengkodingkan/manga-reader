package asurascans

import (
	http "Mengkodingkan.com/manga-reader/src/http"
	"Mengkodingkan.com/manga-reader/src/structures"

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
	res := http.Get(BASE_URL)

	if res.StatusCode != 200 {
		c.JSON(500, gin.H{
			"status":  "error",
			"message": "Something went wrong",
		})
	}

	defer res.Body.Close()
}
