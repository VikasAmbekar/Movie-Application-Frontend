import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import AdminFooter from "../Components/Admin/AdminFooter";
Enzyme.configure({ adapter: new Adapter() });
jest.mock("react-router-dom");

describe("AdminFooter test case", () => {
  it("class test", () => {
    let wrapper = shallow(<AdminFooter />);
    expect(wrapper.exists(".footerDiv")).toEqual(true);
  });

  it("Testing tag elements", () => {
    let wrapper = shallow(<AdminFooter />);
    expect(wrapper.find("a").text()).toEqual("MovieMate");
  });
});
