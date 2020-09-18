import React, { Component } from "react";

import {
  Segment,
  Grid,
  Header,
  Image,
  Loader,
  Dimmer,
} from "semantic-ui-react";
import LoginForm from "../components/LoginForm";


export class Login extends Component {
  state = {
    loading: false,
  };
  handleLoading = () => {
    this.setState({ loading: true });
  };

  render() {
    return (
      <>
        <Segment.Group>
          <LoginHeader />
          <LoginGridLayout
            image={<BrandImage />}
            form={<LoginForm onLoading={this.handleLoading} />}
            loading={this.state.loading}
          />
        </Segment.Group>
        <footer className="footer">
          <a href="https://www.freepik.com/free-photos-vectors/design">
            Avatar characters created by freepik - www.freepik.com
          </a>
        </footer>
      </>
    );
  }
}

const LoginHeader = () => (
  <Header as="h4" block attached="top" textAlign="center">
    <Header.Content>Welcome to the Would You Rather App!</Header.Content>
    <Header.Subheader>Please sign in to continue</Header.Subheader>
  </Header>
);

const LoginGridLayout = ({ image, form, loading }) => (
  <div>
    <Grid padded textAlign="center">
      <Grid.Row className="login">
        <Grid.Column width={16}>
          {loading === true && (
            <Dimmer active inverted>
              <Loader inverted content="Loading" />
            </Dimmer>
          )}
          {image}
          <br />
          {form}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

const BrandImage = () => (
  <Image src="/images/avatars/pokemon.png" size="medium" centered />
);

export default Login;
