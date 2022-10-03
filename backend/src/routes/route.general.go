package route

import (
	controller "Mengkodingkan.com/manga-reader/src/controllers"
	"github.com/gin-gonic/gin"
)

func General(router *gin.RouterGroup) {
	router.GET("/", controller.Ping)
	router.GET("/home", controller.Home)
	router.GET("/daftar-komik", controller.ListKomik)
	router.GET("/daftar-komik/page/:page", controller.ListKomik)
	router.GET("/komik-terbaru", controller.ListKomikTerbaru)
	router.GET("/komik-terbaru/page/:page", controller.ListKomikTerbaru)
}
