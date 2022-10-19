package util

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

func GetKeyEnv(key string) string {
	env := make(chan string, 1)
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatal("Error loading .env file")
	}

	env <- os.Getenv(key)

	return <-env
}
