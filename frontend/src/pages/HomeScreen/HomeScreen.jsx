import { Row, Col, Image } from "react-bootstrap";
import Typewriter from "typewriter-effect";

//local
import classes from "./HomeScreen.module.css";
import HeroImage from "../../assets/images/hero-image.png";

const HomeScreen = () => {
  return (
    <div className={classes.main}>
      <Row>
        <Col md="5">
          <h1 className={classes.title}>
            Where Flavor Meets
            <Typewriter
              className={classes.sd}
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: ["Elegance", "Excellence", "Delight"],
                cursor: "",
              }}
            />
          </h1>

          <div className={classes.subTitle}>
            At Bandhan, we take pride in serving up unmatched flavor and quality
            every day
          </div>
        </Col>
        <Col md="2"></Col>
        <Col className={classes.imagee} md="5">
          <Image fluid src={HeroImage} />
        </Col>
      </Row>
    </div>
  );
};

export default HomeScreen;
