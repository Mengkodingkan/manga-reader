package asura_structure

// HomeResponse is a struct for home response
type HomeResponse struct {
	Caraousel    []CaraouselContent    `json:"caraousel"`
	PopularToday []PopularTodayContent `json:"popular_today"`
	LatestUpdate []LatestUpdateContent `json:"latest_update"`
	Popular      PopularList           `json:"popular"`
}

type CaraouselContent struct {
	Title       string        `json:"title"`
	Url         string        `json:"url"`
	Endpoint    string        `json:"endpoint"`
	Type        string        `json:"type"`
	Scores      string        `json:"scores"`
	Thumb       string        `json:"thumb"`
	Description string        `json:"description"`
	Genres      []interface{} `json:"genres"`
}

type PopularTodayContent struct {
	Title    string `json:"title"`
	Thumb    string `json:"thumb"`
	Url      string `json:"url"`
	Endpoint string `json:"endpoint"`
	Type     string `json:"type"`
	Chapter  string `json:"chapter"`
	Scores   string `json:"scores"`
}

type LatestUpdateContent struct {
	Title    string        `json:"title"`
	Thumb    string        `json:"thumb"`
	Url      string        `json:"url"`
	Endpoint string        `json:"endpoint"`
	Chapters []interface{} `json:"chapters"`
}

type PopularList struct {
	Weekly  []PopularContent `json:"weekly"`
	Monthly []PopularContent `json:"month"`
	All     []PopularContent `json:"all"`
}
type PopularContent struct {
	Title    string        `json:"title"`
	Thumb    string        `json:"thumb"`
	Url      string        `json:"url"`
	Endpoint string        `json:"endpoint"`
	Genres   []interface{} `json:"genres"`
	Scores   string        `json:"scores"`
}
