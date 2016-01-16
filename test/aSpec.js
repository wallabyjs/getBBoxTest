describe('getBBox', function () {
  it('should work', function () {
    document.body.innerHTML =
      "<svg width=\"100px\" height=\"30px\">\n" +
      "  <text id=\"myText\" x=\"250\" y=\"150\" \n" +
      "        font-family=\"Verdana\" \n" +
      "        font-size=\"55\">\n" +
      "    Hello, out there\n" +
      "  </text>\n" +
      "</svg>";

    console.log(document.getElementById('myText').getBBox())
  });
});
