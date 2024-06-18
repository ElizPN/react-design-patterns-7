import { Motion, spring } from "react-motion";

const Transition = () => (
  <Motion defaultStyle={{ opacity: 0.1 }} style={{ opacity: spring(5) }}>
    {(interpolatingStyle) => <h1 style={interpolatingStyle}>Hello React</h1>}
  </Motion>
);

export default Transition;
