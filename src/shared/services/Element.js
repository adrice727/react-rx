var element = {};

element.e = (query) => document.querySelector(query);
element.a = (query) => document.querySelectorAll(query);
element.form = (query) => new formData(element.e(query));

export default element;
