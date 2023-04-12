import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
Enzyme.configure({ adapter: new Adapter() });
jest.mock("react-router-dom");
jest.mock("axios");
import UserHeader from "../Components/User/UserGeneral/UserHeader";

describe("Userheader component", () => {
  it("renders a header with logo", () => {
    let wrapper = shallow(<UserHeader />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.exists(".mainLink")).toEqual(true);
  });

  it("Testing a tag ", () => {
    let wrapper = shallow(<UserHeader />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(".mainLink").text()).toEqual("MovieMate");
  });

  it("Testing tag elements", () => {
    let wrapper = shallow(<UserHeader />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(".logOutBtn").text()).toEqual("Log-Out");
  });
});
