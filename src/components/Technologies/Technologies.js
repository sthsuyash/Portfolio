import React from 'react';
import { DiPython, DiJava, DiMysql, DiReact, DiLinux, DiGit } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider style={{ marginTop: "2rem", marginBottom: "5rem" }} />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've worked with a range of technologies in the Web Development world as well as Software Development.</SectionText>

    <List>
      <ListItem>
        <DiJava size='4rem' />
        <ListContainer>
          <ListTitle>BackEnd</ListTitle>
          <ListParagraph>
            NodeJS, php, Java servlets, SpringBoot
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiMysql size='4rem' />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            MySQL, PostgreSQL, MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiReact size='4rem' />
        <ListContainer>
          <ListTitle>FrontEnd</ListTitle>
          <ListParagraph>
            HTML, CSS, JavaScript, React.js, BootStrap
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiPython size='4rem' />
        <ListContainer>
          <ListTitle>Software Development</ListTitle>
          <ListParagraph>
            Python, C/C++, Java
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiLinux size='4rem' />
        <ListContainer>
          <ListTitle>Operating System</ListTitle>
          <ListParagraph>
            Linux, Windows
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiGit size='4rem' />
        <ListContainer>
          <ListTitle>Other</ListTitle>
          <ListParagraph>
            Git, Github, Postman, SPSS, Bash, Jupyter Notebook
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;
