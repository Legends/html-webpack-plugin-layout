// Template Layout Wrapper
// Read more how this works here: https://webpack.js.org/guides/dependency-management/
module.exports = templateData => {
  // const { page } = templateData.htmlWebpackPlugin.options;
  const { page } = templateData;
  return (
    require("./templates/header.ejs")(templateData) +
    require("./templates/" + page + ".ejs")(templateData) +
    require("./templates/footer.ejs")(templateData)
  );
};
