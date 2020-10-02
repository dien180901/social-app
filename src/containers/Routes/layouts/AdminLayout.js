import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "components/NotFoundPage";
import AddEditBlogPage from "containers/AddEditBlogPage";
import ProfilePage from "containers/Admin/ProfilePage";
import SideMenu from "containers/Admin/SideMenu";
import BlogDetailPage from "containers/BlogDetailPage";
import BlogListPage from "containers/Admin/BlogListPage";
import FriendListPage from "containers/Admin/FriendListPage";
import MessengerPage from "containers/Admin/MessengerPage";
import PublicNavbar from "containers/PublicNavbar";
import AlertMsg from "components/AlertMsg";

const AdminLayout = () => {
  return (
    <>
      <PublicNavbar />
      <Container fluid>
        <Row>
          <SideMenu />
          <Col md={9} lg={10}>
            <AlertMsg />
            <Switch>
              <Route exact path="/admin/profile" component={ProfilePage} />
              <Route exact path="/admin/blogs" component={BlogListPage} />
              <Route exact path="/admin/blogs/:id" component={BlogDetailPage} />
              <Route exact path="/admin/blog/add" component={AddEditBlogPage} />
              <Route
                exact
                path="/admin/blog/edit/:id"
                component={AddEditBlogPage}
              />
              <Route exact path="/admin/friends" component={FriendListPage} />
              <Route exact path="/admin/messenger" component={MessengerPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminLayout;