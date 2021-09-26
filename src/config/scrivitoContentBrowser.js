function defaultFilters() {
  return {
    _objClass: {
      options: {
        All: {
          title: "All",
          icon: "folder",
          query: Scrivito.Obj.all(),
          selected: true,
        },
        Product: filterOptionsForObjClass("Product"),
        Image: filterOptionsForObjClass("Image"),
// …
}

const FILTER_PRESENTATIONS = {
// …
  SearchResults: { title: "Search results", icon: "lens" },
  Video: { title: "Videos", icon: "video" },
  Product: { title: "Products", icon: "tag" },
};
// …