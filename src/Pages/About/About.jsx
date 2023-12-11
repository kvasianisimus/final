import React from "react";
import "./About.scss";
import InfoCard from "./InfoCard/InfoCard";

const About = () => {
  return (
    <div className="about">
      <div className="name">
        <div>
          <h1 className="txt">AB</h1>
          <h1 className="txt">OU</h1>
        </div>

        <h1 className="txt lg">T</h1>

        <div className="me">ME</div>
      </div>

      <div className="info">
        <InfoCard
          sectionTitle="About Me"
          sectionDetails="Кроме удобства, MaxText обеспечивает гибкость в выборе тем и стилей. 
          В частности, можно заказать текст по описанию, детализировать требования и даже 
          указать ключевые слова для SEO. Просто подробно распишите какой материал нужно 
          написать, какие ключевые слова заголовки использовать. Это обеспечивает высокую 
          адаптивность контента под конкретные нужды."
        />

        <InfoCard
          sectionTitle="Education"
          sectionDetails="Кроме удобства, MaxText обеспечивает гибкость в выборе тем и стилей. 
          В частности, можно заказать текст по описанию, детализировать требования и даже 
          указать ключевые слова для SEO. Просто подробно распишите какой материал нужно 
          написать, какие ключевые слова заголовки использовать. Это обеспечивает высокую 
          адаптивность контента под конкретные нужды."        />

        <InfoCard
          sectionTitle="Skills"
          sectionDetails="Кроме удобства, MaxText обеспечивает гибкость в выборе тем и стилей. 
          В частности, можно заказать текст по описанию, детализировать требования и даже 
          указать ключевые слова для SEO. Просто подробно распишите какой материал нужно 
          написать, какие ключевые слова заголовки использовать. Это обеспечивает высокую 
          адаптивность контента под конкретные нужды."        />

        <InfoCard
          sectionTitle="Social Life"
          sectionDetails="Кроме удобства, MaxText обеспечивает гибкость в выборе тем и стилей. 
          В частности, можно заказать текст по описанию, детализировать требования и даже 
          указать ключевые слова для SEO. Просто подробно распишите какой материал нужно 
          написать, какие ключевые слова заголовки использовать. Это обеспечивает высокую 
          адаптивность контента под конкретные нужды."        />
      </div>
    </div>
  );
};

export default About;
