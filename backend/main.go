package main

import (
	"log"

	route "Mengkodingkan.com/manga-reader/src/routes"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	router := RouterInit()

	log.Fatal(router.Run(":3000"))
}

func RouterInit() *gin.Engine {

	router := gin.Default()
	router.Use(cors.Default())

	RouteApi := router.Group("/api/v1")
	route.General(RouteApi)

	router.NoRoute(func(c *gin.Context) {
		c.JSON(404, gin.H{"status": "error", "message": "Path not found"})
	})
	return router
}
