import { Summary } from "../components/summary/Summary";
import {
  Designation,
  Photo,
  ShortIntro,
} from "../components/summary/profile/Profile";

export default {
  title: "portfolio/Summary",
  component: Summary,
};

const Template = (args) => <Summary {...args} />;

export const Profile = Template.bind({});
Profile.args = {
  content_one: <Designation />,
  content_two: <Photo />,
  content_three: <ShortIntro/>,
};

// export const Information = Template.bind({});
