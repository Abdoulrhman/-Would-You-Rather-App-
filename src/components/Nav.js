import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Menu,
  Responsive,
  Image,
  Grid,
  Button,
  Container,
} from "semantic-ui-react";
import { setAuthUser } from "../store/actions/authUser";

const Nav = () => {
  const users = useSelector((state) => state.users);
  const authUser = useSelector((state) => state.authUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(setAuthUser(null));
  };

  return (
    <Container>
      <Responsive as={Menu} minWidth={651} pointing secondary>
        <Menu.Item name="home" as={NavLink} to="/" exact />
        <Menu.Item name="new poll" as={NavLink} to="/add" />
        <Menu.Item name="leader board" as={NavLink} to="/leaderboard" />
        <Menu.Menu position="right">
          <Menu.Item>
            <span>
              <Image
                src={users[authUser].avatarURL}
                avatar
                spaced="right"
                verticalAlign="bottom"
              />
              {users[authUser].name}
            </span>
          </Menu.Item>
          <Menu.Item>
            <Button
              content="Logout"
              labelPosition="right"
              basic
              compact
              icon="log out"
              size="mini"
              onClick={handleLogout}
            />
          </Menu.Item>
        </Menu.Menu>
      </Responsive>
      <Responsive as={Fragment} minWidth={375} maxWidth={650}>
        <Grid columns={2} padded="vertically">
          <Grid.Row>
            <Grid.Column>
              <Image
                src={users[authUser].avatarURL}
                avatar
                spaced="right"
                verticalAlign="bottom"
              />
              {users[authUser].name}
            </Grid.Column>
            <Grid.Column verticalAlign="bottom" textAlign="right">
              <Button
                content="Logout"
                labelPosition="right"
                basic
                compact
                icon="log out"
                size="mini"
                onClick={handleLogout}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <Menu pointing secondary widths={3}>
                <Menu.Item name="home" as={NavLink} to="/" exact />
                <Menu.Item name="new poll" as={NavLink} to="/add" />
                <Menu.Item name="leader board" as={NavLink} to="/leaderboard" />
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
      <Responsive as={Fragment} maxWidth={374}>
        <Grid padded="vertically" columns={1}>
          <Grid.Row>
            <Grid.Column>
              <Image
                src={users[authUser].avatarURL}
                avatar
                spaced="right"
                verticalAlign="bottom"
              />
              {users[authUser].name}
              <Button
                content="Logout"
                labelPosition="right"
                basic
                compact
                icon="log out"
                size="mini"
                floated="right"
                onClick={handleLogout}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Menu pointing secondary widths={3}>
                <Menu.Item name="home" as={NavLink} to="/" exact />
                <Menu.Item name="new poll" as={NavLink} to="/add" />
                <Menu.Item name="leader board" as={NavLink} to="/leaderboard" />
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    </Container>
  );
};

export default Nav;
