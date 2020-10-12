import React, {useState} from 'react';
import {Link as ReactRouterLink} from 'react-router-dom';
import {
  Background,
  Container,
  Logo,
  ButtonLink,
  Feature,
  Text,
  FeatureCallOut,
  Link,
  Group,
  Picture,
  Profile,
  Dropdown,
  SearchIcon,
  Search,
  SearchInput,
  PlayButton,
} from "./styles/header";

export default function Header({ bg=true, children, ...restProps }){
    return bg ? <Background {...restProps} data-testid="header-bg">{children}</Background> : children;
}
Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};
Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};
Header.Search = function HeaderSearch({searchTerm, setSearchTerm, children, ...restProps }) {
  const [searchActive, setSearchActive] = useState(false);
  return (<Search {...restProps}>
  <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)} data-testid="search-click" >
  <img src="/images/icons/search.png" alt="search"/>
  </SearchIcon>
  <SearchInput value={searchTerm} onChange={({target}) => setSearchTerm(target.value)}
   placeholder="Search films and series" active={searchActive} data-testid="search-input">
   </SearchInput>
  </Search>);
};
Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`}/>;
};
Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};
Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
Header.Feature = function HeaderFeature({children, ...restProps}){
    return <Feature {...restProps}>{children}</Feature>;
}
Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};
Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
      <ReactRouterLink to={to}>
      <Logo {...restProps} />
      </ReactRouterLink>

  );
};

