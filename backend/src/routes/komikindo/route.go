package komikindo

import (
	controller "Mengkodingkan.com/manga-reader/src/controllers/komikindo"
	"github.com/gin-gonic/gin"
)

func Routes(router *gin.RouterGroup) {
	router.GET("/", controller.Ping)
	router.GET("/home", controller.Home)
	router.GET("/daftar-komik", controller.ListKomik)
	router.GET("/daftar-komik/page/:page", controller.ListKomik)
	router.GET("/komik-terbaru", controller.ListKomikTerbaru)
	router.GET("/komik-terbaru/page/:page", controller.ListKomikTerbaru)
	router.GET("/search", controller.SearchKomik)
	router.GET("/search/page/:page", controller.SearchKomik)
	router.GET("/komik/:endpoint", controller.KomikDetail)
	router.GET("/chapter/:endpoint", controller.ChapterDetail)
}
