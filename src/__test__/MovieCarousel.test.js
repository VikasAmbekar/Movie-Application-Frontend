import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import MovieCarousel from "../Components/User/Dashboard/MovieCarousel";
Enzyme.configure({ adapter: new Adapter() });
jest.mock("react-router-dom");
jest.mock("axios");

describe("MovieCarousel component testing", () => {
  it("Main class existance", () => {
    let wrapper = shallow(<MovieCarousel />);
    expect(wrapper.exists()).toBe(true);
  });

  it("Main div element testing", () => {
    let wrapper = shallow(<MovieCarousel />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(".dashCarousel")).toHaveLength(1);
  });
});
