import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <br />I am fluent in classics like
          <i>
            <b className="purple"> Solidity, Solana, Web3, React, Node, TypeScript, Three.js, and Unity </b>
          </i>
          <br />
          <br />
          Highly skilled and experienced <b className="purple">Full-Stack, Game, and Blockchain Engineer </b>with expertise in cutting-edge technologies such
          as <b className="purple">Solidity, Web3, React.js, Vue.js, Node.js, Three.js, Unity3D, Various HTML5 Game Engines like Phaser, Pixi, Cocos2D, PlayCanvas, and WebGL. </b>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
