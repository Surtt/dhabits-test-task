import axios from 'axios';

const url = 'http://164.90.161.80:3000/api/content';

const getData = async (dirId) => {
  const newUrl = new URL(url);
  if (dirId === '0') {
    return await axios.get(newUrl);
  } else {
    newUrl.search = new URLSearchParams({ dirId }).toString();
    return await axios.get(newUrl);
  }
}

export default getData;
