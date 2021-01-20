const options = {
  rules: {},
  formData: {
    area: [],
    CommunityName: ""
  },
  form: {
    inline: true,
    size: "small"
  },
  itemColumns: [
    {
      span: 7,
      label: "",
      prop: "area",
      type: "area",
      level: 2
    },
    {
      span: 5,
      append: true,
      prop: "CommunityName",
      type: "text",
      class: "",
      methods: "search"
    }
  ]
};
export default options;
