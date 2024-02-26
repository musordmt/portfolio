import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import metaverse from "../../Assets/Projects/metaverse.gif";
import aviator from "../../Assets/Projects/aviator.gif";
import niuniu from "../../Assets/Projects/niuniu.gif";
import exmoc from "../../Assets/Projects/exmoc.gif";
import bao from "../../Assets/Projects/bao.gif";
import slot from "../../Assets/Projects/slot.gif";
import kohai from "../../Assets/Projects/kohai.gif";
import museum from "../../Assets/Projects/museum.gif";
import playzelo from "../../Assets/Projects/playzelo.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={playzelo}
              isBlog={false}
              title="PlayZelo"
              description="Crypto Casino Online Game Platform"
              demoLink="http://162.255.116.172:5000"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={museum}
              isBlog={false}
              title="NFT Museum"
              description="React Three.js Metaverse"
              demoLink="https://privateemail.com/ajax/share/0f2571c30c0b2040f0093dbc0b204bbea7aa5c3e28a00cb5/1/8/NzY/NzYvNTA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={metaverse}
              isBlog={false}
              title="CocaCola"
              description="3D City Based Metaverse Game"
              demoLink="https://privateemail.com/ajax/share/0e1a3ab50f25c141e3fd8adf25c14d579675f13dfa6f33ad/1/8/NzY/NzYvNDE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aviator}
              isBlog={false}
              title="Aviator"
              description="Unity Based Crash Game"
              demoLink="https://privateemail.com/ajax/share/075423e10bc52044771c1f9bc52049f688803f53966b7aa9/1/8/NzY/NzYvNzA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={niuniu}
              isBlog={false}
              title="NiuNiu"
              description="Unity Based Card Game"
              demoLink="https://privateemail.com/ajax/share/0674377f0752ff49651d567752ff4742a9f88f6cc1fc3042/1/8/NzY/NzYvNjk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exmoc}
              isBlog={false}
              title="EXMOC"
              description="Unity Web3 MultiPlayer Card Game"
              demoLink="https://privateemail.com/ajax/share/094d856d080612479686775806124865b47671a1e0f965f4/1/8/NzY/NzYvNjA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bao}
              isBlog={false}
              title="BaoCou"
              description="Web Based Online Betting Game"
              demoLink="https://privateemail.com/ajax/share/091da0220db83057938423adb830475fbf1331ae200f63d8/1/8/NzY/NzYvNTI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={slot}
              isBlog={false}
              title="CRYPTOSLOTS"
              description="Web3 Slot Game"
              demoLink="https://privateemail.com/ajax/share/041e92160f91e35043b700ef91e341b4998bb424d5d5f62b/1/8/NzY/NzYvNTU"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kohai}
              isBlog={false}
              title="KOHAI WARZ"
              description="OpenGL Shooting Game and Web Portal"
              demoLink="http://ec2-13-114-30-24.ap-northeast-1.compute.amazonaws.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
