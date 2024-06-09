export default (req, res) => {
  const { method, url, headers, body } = req;
  const host = "https://example.com";
  let uri: any = new URL(host + url);
  uri.searchParams.delete("...slug");
  uri = uri.href.replace(host, "");
  const data = { method, url: uri, headers, body };
  console.log(JSON.stringify(data, undefined, 4));
  res
    .status(200)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "*")
    .setHeader("Access-Control-Allow-Headers", "*")
    .json(data);
};
