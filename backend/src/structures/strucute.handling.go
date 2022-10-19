package structures

type Error struct {
	Status  string `json:"status"`
	Message string `json:"message"`
}

type Success struct {
	Status string      `json:"status"`
	Data   interface{} `json:"data"`
}

type SuccessPing struct {
	Status     string `json:"status"`
	Message    string `json:"message"`
	StatusCode int    `json:"statusCode"`
}
