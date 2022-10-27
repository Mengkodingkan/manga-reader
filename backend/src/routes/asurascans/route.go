package asurascans

import (
	controller "Mengkodingkan.com/manga-reader/src/controllers/asurascans"
	"github.com/gin-gonic/gin"
)

func Routes(router *gin.RouterGroup) {
	router.GET("/", controller.Ping)
	router.GET("/home", controller.Home)
	router.GET("/manga/:endpoint", controller.GetComic)
	router.GET("/chapter/:endpoint", controller.GetChapter)
}
