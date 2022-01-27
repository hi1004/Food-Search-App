const express = require('express');
const axios = require('axios');

const app = express();
const { API_KEY } = process.env;

app.use(express.json());
app.post('/', async (req, res) => {
  const payload = req.body;
  const { foodName, id } = payload;
  console.log('API_KEY: ', API_KEY);
  console.log('params: ', payload);

  const url = id
    ? `http://apis.data.go.kr/B553748/CertImgListService/getCertImgListService?serviceKey=${API_KEY}&prdlstReportNo=${id}&returnType=json`
    : `http://apis.data.go.kr/B553748/CertImgListService/getCertImgListService?serviceKey=${API_KEY}&prdlstNm=${encodeURIComponent(
        foodName
      )}&returnType=json&pageNo=1&numOfRows=30`;

  try {
    const { data } = await axios.get(`${url}`);
    if (data.Error) {
      res.status(400).json(data.Error);
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(error.response.status).json(error.message);
  }
});

module.exports = app;
