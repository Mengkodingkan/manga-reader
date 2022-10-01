package route

import (
	"github.com/gin-gonic/gin"
)

func General(route *gin.Engine) {
	group := route.Group("/")

	group.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello World",
		})
	})
}
