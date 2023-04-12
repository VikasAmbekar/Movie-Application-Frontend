import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import AdminHeader from "../Components/Admin/AdminHeader";
Enzyme.configure({ adapter: new Adapter() });
jest.mock("react-router-dom");
jest.mock("axios");

describe("AdminHeader component testing", () => {
  it("Main navigation testing", () => {
    let wrapper = shallow(<AdminHeader />);
    expect(wrapper.exists()).toBe(true);
  });

  it("Logo link checking", () => {
    let wrapper = shallow(<AdminHeader />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(".mainLink").text()).toEqual("MovieMate");
  });

  // checking elements inside class
  it("renders an admin button", () => {
    const wrapper = shallow(<AdminHeader />);
    expect(wrapper.find(".mainNav1")).toHaveLength(1);
  });
});
