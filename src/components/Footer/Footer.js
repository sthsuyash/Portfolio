import React from 'react';
import { AiFillGithub, AiFillKaggle, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+977-9841309522'>+977-9841309522</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:sthasuyash11@gmail.com'>sthasuyash11@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>

        <CompanyContainer>
          <Slogan>Code is like humor. When you have to explain it, it’s bad.</Slogan>
        </CompanyContainer>

        <SocialContainer>
          <SocialIcons href="https://github.com/sthsuyash">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/sthsuyash/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.kaggle.com/sthsuyash/">
            <AiFillKaggle size="3rem" />
          </SocialIcons>
        </SocialContainer>

      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
