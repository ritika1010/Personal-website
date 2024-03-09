import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Projects
        </h1>
        <p >
          
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">

            <ProjectCard
              // imgPath={githubimage}
              title="GitGlance: Github Contribution Discovery App"
              description="Built upon a robust serverless cloud architecture using AWS Lambda, API Gateway, SQS, and Kinesis, GitGlance ensures efficient user interactions while seamlessly integrating AWS Personalize for tailored recommendations and DynamoDB for dynamic data storage. With scalable and secure storage powered by S3, GitGlance offers users a comprehensive insight into their GitHub activity, empowering them to track their progress and achieve their goals effortlessly."
              // ghLink=""
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={databasimage}
              title="DBCon: Tool to Convert Conventional Database to Graph Databases"
              description="DBCon id designed to simplify the conversion process from conventional databases to graph databases. Leveraging Python libraries, we ensured a remarkable 99% data consistency in extracting metadata and records from the source database, guaranteeing accuracy and reliability throughout the conversion process.  Smooth migration of data to Neo4j, prioritizing both data integrity and cost reduction. With DBCon, you can trust that your database conversion is in capable hands, delivering unparalleled results with precision and efficiency."
              // ghLink=""
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={mealimage}
              title="MealPlannerAI: Your Smart Meal Assistant"
              description="MealPlannerAI is your go-to app for effortless meal planning, recipe creation, and grocery list generation. Powered by AI, it tailors meal plans to your preferences, creates new recipes, and generates grocery lists based on your chosen dishes. Say goodbye to mealtime stress and hello to delicious meals with MealPlannerAI."
              // ghLink=""
              // demoLink=""              
            />
          </Col>   
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
