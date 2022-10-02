package route

import (
	controller "Mengkodingkan.com/manga-reader/src/controllers"
	"github.com/gin-gonic/gin"
)

func General(router *gin.RouterGroup) {

	router.GET("/ping", controller.Ping)
	router.GET("/home", controller.Home)
}
