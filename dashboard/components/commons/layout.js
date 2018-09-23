import Header from './Header.js';
import Section from './Section.js';

const layoutStyle = {
  margin: 0,
  padding: 0,
};

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    <Section>
      {props.children}
    </Section>
  </div>
);

export default Layout;