package route

import (
	"github.com/gin-gonic/gin"
)

func General(router *gin.RouterGroup) {

	router.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
}
