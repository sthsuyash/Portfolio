import React from 'react';
import { DiPython, DiJava, DiMysql, DiReact, DiLinux, DiDocker } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider style={{ marginTop: "2rem", marginBottom: "5rem" }} />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've worked with a range of technologies in the Web Development, Software Development and Machine Learning frameworks.</SectionText>

    {/* main outer list of technologies */}
    <List>

      {/* backend technologies list */}
      <ListItem>
        <DiJava size='4rem' />
        <ListContainer>
          <ListTitle>BackEnd</ListTitle>
          <ListParagraph>
            SpringBoot, NodeJS, php, Java servlets, Flask, Postman
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* databases technologies list */}
      <ListItem>
        <DiMysql size='4rem' />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            MySQL, PostgreSQL, MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* frontend technologies list */}
      <ListItem>
        <DiReact size='4rem' />
        <ListContainer>
          <ListTitle>FrontEnd</ListTitle>
          <ListParagraph>
            HTML, CSS, JavaScript, ReactJS, BootStrap5
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* software development technologies list */}
      <ListItem>
        <DiJava size='4rem' />
        <ListContainer>
          <ListTitle>Software Development</ListTitle>
          <ListParagraph>
            Python, C/C++, Java
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* Operating System technologies list */}
      <ListItem>
        <DiLinux size='4rem' />
        <ListContainer>
          <ListTitle>Operating System</ListTitle>
          <ListParagraph>
            Ubuntu distributions, Windows, Red Hat Enterprise Linux
          </ListParagraph>
        </ListContainer>
      </ListItem>

        {/* other technologies list */}
        <ListItem>
        <DiDocker size='4rem' />
        <ListContainer>
          <ListTitle>Other</ListTitle>
          <ListParagraph>
            Git, Github, Docker
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* machine learning technologies list */}
      <ListItem>
        <DiPython size='4rem' />
        <ListContainer>
          <ListTitle>Machine Learning and Data Science</ListTitle>
          <ListParagraph>
            Python, Scikit-learn, Pandas, Numpy, Matplotlib, Seaborn, Tensorflow, Keras, MS-Excel
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
