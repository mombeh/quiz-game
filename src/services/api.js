
export const getQuestion = async () => {
  try {
    const reponse = await fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
    // console.log(reponse)
    const resp = await reponse.json()
    console.log(resp.results)
    return resp.results
  } catch (error) {
    console.error("error to fetch api", error)
  }
}