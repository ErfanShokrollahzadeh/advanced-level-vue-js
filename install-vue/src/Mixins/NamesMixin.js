export const NameMixin = {
  data() {
    return {
      names: ["mohamad", "milad", "iman", "elnaz", "reza", "shirin"],
      filterText: "",
    };
  },
  computed: {
    filteredNames() {
      return this.names.filter((name) => {
        return name.match(this.filterText);
      });
    },
  },
  created() {
    console.log("log in mixin.js");
  },
};
