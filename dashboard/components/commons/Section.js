
const sectionStyle = {
  margin: '78px 10px 10px',
  padding: 20,
  border: '1px solid #DDD',
  borderRadius: 5,
  fontFamily: "'Roboto', sans-serif",
};

const Section = (props) => (
  <section style={sectionStyle}>
    {props.children}
  </section>
);

export default Section;
