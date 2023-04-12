import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
Enzyme.configure({ adapter: new Adapter() });
jest.mock("react-router-dom");
jest.mock("axios");
import Home from "../Components/Home/Home.js";

describe("Home component", () => {
  it("Logo link class checking", () => {
    let wrapper = shallow(<Home />);
    expect(wrapper.find(".logolink").text()).toEqual("MovieMate");
  });
});
