
const sectionStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Section = (props) => (
  <section style={sectionStyle}>
    {props.children}
    <style jsx>{`
      section {
        font-family: 'Roboto', sans-serif;
        margin: 78px 10px 10px !important;
        border-radius: 5px;
      }
    `}</style>
  </section>
);

export default Section;
