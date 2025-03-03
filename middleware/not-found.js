const notFound = (req, res) =>
  res
    .status(404)
    .send(
      "<div> <h1> Opps!</h1> <h2>Page does not Exist :( </h2> <a href='http://localhost:3000'> back to home page </a></div>"
    );

module.exports = notFound;

