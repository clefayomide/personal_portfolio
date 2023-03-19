import { Portfolio } from "../components/portfolio/Portfolio";

export default {
  title: "portfolio/Portfolio",
  component: Portfolio,
};

const Template = (args) => <Portfolio {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "UI Currency Converter",
  stacks: "TYPESCRIPT + REACT + TSDX + NPM",
  desc: "A UI currency converter package library ",
};
