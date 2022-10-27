package util

import (
	"strconv"
)

func ToInt(string string) int {
	int, _ := strconv.Atoi(string)
	return int
}

func ToString(int int) string {
	string := strconv.Itoa(int)
	return string
}
