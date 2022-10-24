package asurascans

type HomeResponse struct {
	Caraousel []CaraouselContent `json:"caraousel"`
}

type CaraouselContent struct {
	Title   string `json:"title"`
	Chapter string `json:"chapter"`
	Scores  string `json:"scores"`
	Thumb   string `json:"thumb"`
}
