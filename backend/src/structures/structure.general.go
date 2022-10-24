package structures

type HomeResponse struct {
	Menu        []DetailData  `json:"menu"`
	HomePopular []HomePopular `json:"homePopular"`
	HomeLatest  []HomeLatest  `json:"homeLatest"`
}

type HomePopular struct {
	Name        string       `json:"name"`
	Thumb       string       `json:"thumb"`
	Url         string       `json:"url"`
	Endpoint    string       `json:"endpoint"`
	LastUpload  string       `json:"lastUpload"`
	LastChapter []DetailData `json:"lastChapter"`
}

type HomeLatest struct {
	Name     string `json:"name"`
	Thumb    string `json:"thumb"`
	Url      string `json:"url"`
	Endpoint string `json:"endpoint"`
}

type ListKomikResponse struct {
	Komik      []ListKomik  `json:"komik"`
	Pagination []DetailData `json:"pagination"`
}
type ListKomik struct {
	Name     string `json:"name"`
	Thumb    string `json:"thumb"`
	Url      string `json:"url"`
	Endpoint string `json:"endpoint"`
}

type SearchKomikResponse struct {
	Komik      []ListKomik  `json:"komik"`
	Pagination []DetailData `json:"pagination"`
}

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
	Title       string     `json:"title"`
	Thumb       string     `json:"thumb"`
	Images      []string   `json:"images"`
	PrevChapter DetailData `json:"prevChapter"`
	NextChapter DetailData `json:"nextChapter"`
}
type DetailData struct {
	Name     string `json:"name"`
	Url      string `json:"url"`
	Endpoint string `json:"endpoint"`
}
