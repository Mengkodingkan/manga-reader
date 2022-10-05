package structures

type HomeResponse struct {
	Menu        []DetailData  `json:"menu"`
	HomePopular []HomePopular `json:"homePopular"`
	HomeLatest  []HomeLatest  `json:"homeLatest"`
}

type HomePopular struct {
	Name        string       `json:"name"`
	Thumb       string       `json:"thumb"`
	Url         interface{}  `json:"url"`
	LastUpload  string       `json:"lastUpload"`
	LastChapter []DetailData `json:"lastChapter"`
}

type HomeLatest struct {
	Name  string      `json:"name"`
	Thumb string      `json:"thumb"`
	Url   interface{} `json:"url"`
}

type ListKomikResponse struct {
	Komik      []ListKomik  `json:"komik"`
	Pagination []DetailData `json:"pagination"`
}
type ListKomik struct {
	Name  string     `json:"name"`
	Thumb string     `json:"thumb"`
	Url   DetailData `json:"url"`
}

type SearchKomikResponse struct {
	Komik      []ListKomik  `json:"komik"`
	Pagination []DetailData `json:"pagination"`
}
type DetailData struct {
	Name     string `json:"name"`
	Url      string `json:"url"`
	Endpoint string `json:"endpoint"`
}
