module.exports = {
  codeProduct: {
    notEmpty: {
      errorMessage: "codeProduct field is required",
      bail: true,
    },
  },
  name: {
    notEmpty: {
      errorMessage: "name is required",
      bail: true,
    },
  },
  img: {
    notEmpty: {
      errorMessage: "img field is required",
      bail: true,
    },
  },
  description: {
    notEmpty: {
      errorMessage: "description field is required",
      bail: true,
    },
  },
  price: {
    notEmpty: {
      errorMessage: "price field is required",
      bail: true,
    },
  },
  quantity: {
    notEmpty: {
      errorMessage: "quantity field is required",
      bail: true,
    },
  },
};
