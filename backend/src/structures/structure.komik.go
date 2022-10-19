package structures

type KomikResponse struct {
	Title       string       `json:"title"`
	Thumb       string       `json:"thumb"`
	Alter       []string     `json:"alter"`
	Status      string       `json:"status"`
	Author      string       `json:"author"`
	Illustrator string       `json:"illustrator"`
	Grafis      string       `json:"grafis"`
	Scores      string       `json:"scores"`
	Genre       []string     `json:"genre"`
	Synopsis    string       `json:"synopsis"`
	Chapters    []DetailData `json:"chapters"`
}

type KomikChapter struct {
	Title  string   `json:"title"`
	Thumb  string   `json:"thumb"`
	Images []string `json:"images"`
}
