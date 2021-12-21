export default function handler(req, res) {
  if (req.method === "GET") {
    let data = new Array(Math.round(Math.random() * 100)).fill(1);
    let numbers = data.map((number) => Math.round(Math.random() * 100));
    res.status(200).json({ numbers });
  } else {
    res.status(400);
  }
}
