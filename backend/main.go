package main

import (
	"log"

	"Mengkodingkan.com/manga-reader/src/routes/komikindo"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	router := RouterInit()

	log.Fatal(router.Run(":3568"))
}

func RouterInit() *gin.Engine {

	router := gin.Default()
	router.Use(cors.Default())

	RouteApi := router.Group("/api/v1")
	KomikindoRoute := RouteApi.Group("/komikindo")
	komikindo.Routes(KomikindoRoute)

	router.NoRoute(func(c *gin.Context) {
		c.JSON(404, gin.H{"status": "error", "message": "Path not found"})
	})
	return router
}
