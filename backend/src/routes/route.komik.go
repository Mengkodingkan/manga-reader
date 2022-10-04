package route

import (
	controller "Mengkodingkan.com/manga-reader/src/controllers"
	"github.com/gin-gonic/gin"
)

func Komik(router *gin.RouterGroup) {
	router.GET("/komik/:endpoint", controller.KomikDetail)
	router.GET("/chapter/:endpoint", controller.ChapterDetail)
}
