import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  const IMGStyle = {
    width: "200px",
    height: "200px",
    marginLeft: "auto",
    marginRight: "auto",
  };
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} style={IMGStyle} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
