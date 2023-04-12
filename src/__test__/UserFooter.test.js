import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import UserFooter from "../Components/User/UserGeneral/UserFooter";
Enzyme.configure({ adapter: new Adapter() });
jest.mock("react-router-dom");

describe("UserFooter Test case", () => {
  it("class exists test1", () => {
    let wrapper = shallow(<UserFooter />);
    expect(wrapper.exists(".footerDiv")).toEqual(true);
  });

  it("Check text testCase1", () => {
    let wrapper = shallow(<UserFooter />);
    expect(
      wrapper.contains(
        <a className="text-dark" href="#">
          MovieMate
        </a>
      )
    ).toEqual(true);
  });

  it("Testing tag elements", () => {
    let wrapper = shallow(<UserFooter />);
    expect(wrapper.find("a").text()).toEqual("MovieMate");
  });
});
