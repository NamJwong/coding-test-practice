export const BASE_URL =
  'https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev';

const request = async (url) => {
  const res = await fetch(url);

  // console.log(res);
  // console.log(res.json());
  if (res.ok) return await res.json();

  throw new Error('요청 실패');
};

export const getLanguagesByKeyword = async (keyword) =>
  request(`${BASE_URL}/languages?keyword=${keyword}`);
