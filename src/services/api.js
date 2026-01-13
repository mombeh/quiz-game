const TOKEN_KEY = "opentdb_token";

const getToken = async () => {
  const res = await fetch("https://opentdb.com/api_token.php?command=request");
  const data = await res.json();
  return data.token;
};

export const getCategories = async () => {
  try {
    const response = await fetch("https://opentdb.com/api_category.php");
    const resp = await response.json();
    return resp.trivia_categories;
  } catch (error) {
    console.error("error to fetch categories", error);
    return null;
  }
};


const requestToken = async () => {
  const res = await fetch("https://opentdb.com/api_token.php?command=request");
  const data = await res.json();
  return data.token;
};

const resetToken = async () => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (!token) return;

  await fetch(`https://opentdb.com/api_token.php?command=reset&token=${token}`);
};

export const getQuestion = async (category = null, retry = true) => {
  try {
    let token = localStorage.getItem(TOKEN_KEY);

    if (!token) {
      token = await requestToken();
      localStorage.setItem(TOKEN_KEY, token);
    }

    let url = `https://opentdb.com/api.php?amount=10&token=${token}`;
    if (category) url += `&category=${category}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const resp = await response.json();

    if (resp.response_code === 0) {
      return resp.results;
    }

    if ((resp.response_code === 3 || resp.response_code === 4) && retry) {
      console.warn("Token invalid/exhausted, resetting token...");
      await resetToken();
      localStorage.removeItem(TOKEN_KEY);
      return getQuestion(category, false);
    }

    console.warn("OpenTDB error code:", resp.response_code);
    return null;

  } catch (error) {
    console.error("error to fetch questions", error);
    return null;
  }
};

