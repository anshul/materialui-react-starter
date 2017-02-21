
const defaultSettings = {
  home: {
    heading: 'Home',
    subheading: 'Welcome visitor!',
  },
};

export default function (state = defaultSettings, action) {
  switch (action.type) {

    default:
      return state;
  }
}
