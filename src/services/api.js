
export const getCategories = async () => {
  try {
    const response = await fetch("https://opentdb.com/api_category.php")
    const resp = await response.json()
    return resp.trivia_categories
  } catch (error) {
    console.error("error to fetch categories", error)
  }
}

export const getQuestion = async (category = null) => {
  try {
    let url = "https://opentdb.com/api.php?amount=10"
    if (category) {
      url += `&category=${category}`
    }
    const response = await fetch(url)
    // console.log(response)
    const resp = await response.json()
    console.log(resp.results)
    return resp.results
  } catch (error) {
    console.error("error to fetch api", error)
  }
}