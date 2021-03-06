const express = require('express');
const axios = require('axios');

const app = express();
const { API_KEY } = process.env;

app.use(express.json());
app.post('/', async (req, res) => {
  const payload = req.body;
  const { foodName, pageNo, id } = payload;
  const url = id
    ? `http://apis.data.go.kr/B553748/CertImgListService/getCertImgListService?serviceKey=${API_KEY}&prdlstReportNo=${id}&returnType=json`
    : `http://apis.data.go.kr/B553748/CertImgListService/getCertImgListService?serviceKey=${API_KEY}&prdlstNm=${encodeURIComponent(
        foodName
      )}&returnType=json&pageNo=${pageNo}&numOfRows=12`;
  try {
    const { data } = await axios.get(`${url}`);
    if (!data) {
      res.status(400).json(data);
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(error.response.status).json(error.message);
  }
});

module.exports = {
  path: '/api/food',
  handler: app,
};
