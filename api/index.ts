export default (req, res) => {
  const { method, url, headers, body } = req;
  const data = { method, url, headers, body };
  console.log(JSON.stringify(data, undefined, 4));
  res
    .status(200)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "*")
    .setHeader("Access-Control-Allow-Headers", "*")
    .json(data);
};
